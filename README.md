# Subscriber Micro‑Frontend

Autonomous micro‑frontend to collect subscribers and store them in MySQL. Includes:

- **MySQL + Adminer** (Docker Compose, orchestrated by Ansible)
- **Flyway** database migrations
- **FastAPI** backend serving the UI bundle
- **OpenTelemetry** (OTLP) integration for SigNoz

> Default service name for tracing: **`subscriber-service`**
> Default database name: **`subscribers`**

---

## 1) Prerequisites

- Ubuntu/Debian (or WSL2)
- Docker + Docker Compose v2
- Python 3.10+ and `pip`
- Node.js 18+ and `npm`
- Ansible (`sudo apt-get update && sudo apt-get install -y ansible`)
- Optional: [`act`](https://github.com/nektos/act) to run GitHub Actions locally

If you ever see VS Code permission errors, fix ownership once:

```bash
sudo chown -R $USER:$USER /home/ubuntu/github/group7_subscriber-micro-frontend
```

---

## 2) Configuration

The FastAPI app reads these env vars (defaults shown):

```bash
export DBHOST=127.0.0.1
export DBUSER=root
export DBPASS=Secret5555
export DBNAME=subscribers        # <- standardize on this
export OTEL_SERVICE_NAME=subscriber-service
export OTEL_EXPORTER_OTLP_ENDPOINT=http://otel-collector:4318/v1/traces  # or https://otel.exotrend.live/v1/traces
```

> The code sets an explicit OpenTelemetry **Resource** with `service.name` using `OTEL_SERVICE_NAME`.
> If sending to a remote SigNoz endpoint over **HTTP (not HTTPS)**, ensure the exporter is created with `insecure=True` in code or use HTTPS endpoint.

---

## 3) Bring up MySQL + Adminer

From repo root:

```bash
ansible-playbook up.yml   # add -K if sudo asks for a password
```

Check containers:

```bash
docker compose -f mysql-adminer.yml ps
# Expect services: db (3306), adminer_container (8080)
```

Adminer UI:

- URL: `http://localhost:8080`
- System: **MySQL**
- Server: `db` (or `127.0.0.1` from host)
- User: `root`
- Password: `Secret5555`

---

## 4) Create the database (one‑time)

```bash
mysql -h 127.0.0.1 -uroot -p -e "CREATE DATABASE IF NOT EXISTS subscribers;"
```

> If you previously used `flyway_test`, switch your app to `subscribers`, or re-run Flyway against `subscribers` as shown below.

---

## 5) Run Flyway migrations

### Recommended: run on the same Docker network and use service name `db`

```bash
# Detect/confirm network (usually <folder>_default)
docker network ls | grep subscriber

# Run migrations
docker run --rm   --network group7_subscriber-micro-frontend_default   -v "$PWD/migrations:/flyway/migrations"   redgate/flyway:11.11.1   -user=root -password=Secret5555   -locations=filesystem:/flyway/migrations   -url="jdbc:mysql://db:3306/subscribers?allowPublicKeyRetrieval=true&useSSL=false"   migrate
```

### Alternative: host bridge IP (works, but less portable)

```bash
docker run --rm   -v "$PWD/migrations:/flyway/sql"   redgate/flyway:11.11.1   -user=root -password=Secret5555   -url="jdbc:mysql://172.17.0.1:3306/subscribers?allowPublicKeyRetrieval=true&useSSL=false"   migrate
```

> MySQL 8/9 note: the `allowPublicKeyRetrieval=true&useSSL=false` flags avoid the RSA public key handshake error when not using TLS.

### (Optional) `flyway.conf` for one‑liners

Create `migrations/flyway.conf`:

```properties
flyway.user=root
flyway.password=Secret5555
flyway.url=jdbc:mysql://db:3306/subscribers?allowPublicKeyRetrieval=true&useSSL=false
flyway.locations=filesystem:/flyway/migrations
```

Then run:

```bash
docker run --rm   --network group7_subscriber-micro-frontend_default   -v "$PWD/migrations:/flyway/migrations"   -v "$PWD/migrations/flyway.conf:/flyway/conf/flyway.conf"   redgate/flyway:11.11.1 migrate
```

Verify:

```bash
mysql -h 127.0.0.1 -uroot -p -e "USE subscribers; SHOW TABLES; DESCRIBE subscriber;"
```

---

## 6) Run the app + UI (local dev)

Two terminals:

**A) Build UI in watch mode**

```bash
npm install
npm run watch
```

**B) Run FastAPI**

```bash
pip install -r requirements.txt
python app.py
# Server listens on 0.0.0.0:8088
```

Test creating a subscriber:

```bash
curl -X POST http://localhost:8088/subscribers   -H "Content-Type: application/json"   -d '{"name":"Ada Lovelace","email":"ada@example.com"}'
```

---

## 7) GitHub Actions (example)

**.github/workflows/db-deploy.yml** (snippet):

```yaml
name: DB Deploy
on: [push]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install MySQL client
        run: sudo apt-get update && sudo apt-get install -y mysql-client

      # Option A: apply a direct SQL file
      - name: Apply schema_changes.sql
        env:
          DB_HOST: ${{ secrets.DB_HOST }}
          DB_USER: ${{ secrets.DB_ADMIN_USER }}
          DB_PASSWORD: ${{ secrets.DB_PASSWORD }}
          DB_NAME: ${{ secrets.DB_NAME }}
        run: mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < schema_changes.sql

      # Option B: run Flyway via Docker (preferred for versioned migrations)
      # - name: Flyway migrate
      #   run: |
      #     docker run --rm       #       -v "$PWD/migrations:/flyway/migrations"       #       redgate/flyway:11.11.1       #       -user="${{ secrets.DB_ADMIN_USER }}"       #       -password="${{ secrets.DB_PASSWORD }}"       #       -locations=filesystem:/flyway/migrations       #       -url="jdbc:mysql://${{ secrets.DB_HOST }}:3306/${{ secrets.DB_NAME }}?allowPublicKeyRetrieval=true&useSSL=false"       #       migrate
```

**Run locally with `act`**:

```bash
cat > .secrets <<'EOF'
DB_HOST=127.0.0.1
DB_ADMIN_USER=root
DB_PASSWORD=Secret5555
DB_NAME=subscribers
EOF

bin/act --secret-file .secrets
# Or to use host resources:
bin/act -P ubuntu-latest=-self-hosted --secret-file .secrets
```

---

## 8) OpenTelemetry / SigNoz

In `src/otel_config.py`, ensure a **Resource** with `service.name` is set, e.g.:

```python
from opentelemetry.sdk.resources import Resource
resource = Resource.create({
    "service.name": os.getenv("OTEL_SERVICE_NAME", "subscriber-service"),
    "service.namespace": "microfrontend",
    "deployment.environment": os.getenv("ENV", "local"),
})
```

Point exporter to your collector:

```bash
export OTEL_EXPORTER_OTLP_ENDPOINT=http://otel-collector:4318/v1/traces
# or externally:
# export OTEL_EXPORTER_OTLP_ENDPOINT=https://otel.exotrend.live/v1/traces
```

After sending traffic, check SigNoz → **Applications** and look for `subscriber-service`.

---

## 9) Tear down

```bash
ansible-playbook down.yml
```

---

## Troubleshooting

- **Unknown database 'subscribers'**
  Create it or align app/OTEL/env to one DB name:

  ```bash
  mysql -h 127.0.0.1 -uroot -p -e "CREATE DATABASE IF NOT EXISTS subscribers;"
  ```

- **MySQL 8+ RSA public key error**
  Add `?allowPublicKeyRetrieval=true&useSSL=false` to Flyway JDBC URL.

- **Cannot save files in Codespace**

  ```bash
  sudo chown -R $USER:$USER /home/ubuntu/github/group7_subscriber-micro-frontend
  ```

- **SigNoz shows unknown_service**
  Ensure `service.name` is set via `OTEL_SERVICE_NAME` or Resource in code.

---

## Notes

- Consider pinning MySQL to a known-good tag (e.g., `mysql:8.4`) in `mysql-adminer.yml`.
- Default credentials in this README are for **local development only**. Rotate in real deployments.
