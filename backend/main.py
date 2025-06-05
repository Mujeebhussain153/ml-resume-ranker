from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home_page():
    try:
        return {"message": "Hello World"}
    except Exception as e:
        print(e)
        return