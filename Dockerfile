# Stage 1: Build the Vite application
FROM node:20-alpine AS build-stage

WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker's layer caching
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite application for production
RUN npm run build

# Stage 2: Serve the built application with Python
FROM python:3.11-alpine AS production-stage

# Copy the built Vite application from the build-stage
COPY --from=build-stage /app/dist /app/dist

# Copy source files
COPY ./app.py app.py
COPY ./src ./src

# Install system dependencies
RUN apk add --no-cache gcc musl-dev

# Install Python dependencies including OpenTelemetry
RUN pip install pymysql mysql-connector-python fastapi uvicorn pydantic
RUN pip install opentelemetry-api opentelemetry-sdk
RUN pip install opentelemetry-instrumentation-fastapi
RUN pip install opentelemetry-instrumentation-mysql
RUN pip install opentelemetry-exporter-otlp-proto-http

# Expose port 8088 (matches app.py)
EXPOSE 8088

WORKDIR /app

# Start app
CMD ["python", "app.py"]