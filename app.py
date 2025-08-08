from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
import uvicorn
from pydantic import BaseModel
import mysql.connector
import os


app = FastAPI()

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
    try:
        mydb = mysql.connector.connect(**DB_CONFIG)
        cursor = mydb.cursor()

        sql = "INSERT INTO subscriber (name, email) VALUES (%s, %s)"
        val = (subscriber.name, subscriber.email)
        cursor.execute(sql, val)

        mydb.commit()
        item_id = cursor.lastrowid # Get the ID of the newly inserted row

        cursor.close()
        mydb.close()

        return {"message": "Thanks for subscribing", "id": item_id, "item": subscriber.dict()}

    except mysql.connector.Error as err:
        return JSONResponse(
            status_code=500,
            content={"message": f"Database error: {err}"},
        )

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"message": f"Unhandled Exception: {e}"},
        )


app.mount("/", StaticFiles(directory="dist"), name="static")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8082, log_level="info")