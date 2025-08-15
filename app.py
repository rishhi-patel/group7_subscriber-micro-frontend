from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel
import mysql.connector
import os
import logging
from opentelemetry import trace

# Import our OpenTelemetry configuration
from src.otel_config import setup_opentelemetry, instrument_fastapi, instrument_mysql

# Setup OpenTelemetry
tracer = setup_opentelemetry()

app = FastAPI()

# Instrument FastAPI
instrument_fastapi(app)

# Instrument MySQL
instrument_mysql()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database configuration (replace with your credentials)
DB_CONFIG = {
    "host": os.environ.get("DBHOST", "localhost"),
    "user": os.environ.get("DBUSER", "root"),
    "password": os.environ.get("DBPASS", "Secret5555"),
    "database": os.environ.get("DBNAME", "subscribers")
}

# Pydantic model for the data to be inserted


class Subscriber(BaseModel):
    name: str
    email: str | None = None


@app.post("/subscribers")
async def create_subscriber(subscriber: Subscriber):
    with tracer.start_as_current_span("create_subscriber") as span:
        try:
            # Add attributes to span
            span.set_attribute("subscriber.name", subscriber.name)
            span.set_attribute("subscriber.email", subscriber.email or "none")

            mydb = mysql.connector.connect(**DB_CONFIG)
            cursor = mydb.cursor()

            sql = "INSERT INTO subscriber (name, email) VALUES (%s, %s)"
            val = (subscriber.name, subscriber.email)

            with tracer.start_as_current_span("database_insert") as db_span:
                db_span.set_attribute("db.statement", sql)
                db_span.set_attribute("db.values", str(val))
                cursor.execute(sql, val)
                mydb.commit()
                item_id = cursor.lastrowid  # Get the ID of the newly inserted row

            cursor.close()
            mydb.close()

            # Log success
            logging.info(f"Subscriber created successfully", extra={
                "subscriber_id": item_id,
                "subscriber_name": subscriber.name
            })

            return {"message": "Thanks for subscribing", "id": item_id, "item": subscriber.dict()}

        except mysql.connector.Error as err:
            # Log error with span
            span.record_exception(err)
            span.set_status(trace.Status(trace.StatusCode.ERROR, str(err)))

            logging.error(f"Database error: {err}", extra={
                "error_type": "database_error",
                "subscriber_name": subscriber.name
            })

            return JSONResponse(
                status_code=500,
                content={"message": f"Database error: {err}"},
            )

        except Exception as e:
            # Log error with span
            span.record_exception(e)
            span.set_status(trace.Status(trace.StatusCode.ERROR, str(e)))

            logging.error(f"Unhandled exception: {e}", extra={
                "error_type": "unhandled_exception",
                "subscriber_name": subscriber.name
            })

            return JSONResponse(
                status_code=500,
                content={"message": f"Unhandled Exception: {e}"},
            )


app.mount("/", StaticFiles(directory="dist", html=True), name="static")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8088, log_level="info")
