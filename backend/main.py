from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import resume, rank, preview

# Creating the Fast API Object
app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,             # List of allowed origins
    allow_credentials=True,            # Allow cookies and authorization headers
    allow_methods=["*"],               # Allow all standard HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],               # Allow all headers
)

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to ML Resume Ranker API!"}

app.include_router(resume.router, prefix="/api")
app.include_router(rank.router, prefix="/api")
app.include_router(preview.router, prefix="/api")
