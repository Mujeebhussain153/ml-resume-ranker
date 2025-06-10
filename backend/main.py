from fastapi import FastAPI
from .api import resume, rank

# Creating the Fast API Object
app = FastAPI()

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to ML Resume Ranker API!"}

app.include_router(resume.router, prefix="/api")
app.include_router(rank.router, prefix="/api")
