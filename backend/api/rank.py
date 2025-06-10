from fastapi import APIRouter, UploadFile, File  # FastAPI utilities for file uploads
from ..utils.resume_parser import extract_resume_text
from ..utils.text_preprocessor import clean_text
from ..utils.ranker import rank_resumes
import os

router = APIRouter()

@router.post("/rank-resumes/")
async def rank_resumes_endpoint(
    jd_file: UploadFile = File(...),                # Job Description file (PDF or DOCX)
    resume_files: list[UploadFile] = File(...)      # List of resumes to rank
):
    # Save the uploaded JD file to temp/ folder
    jd_path = f"temp/{jd_file.filename}"
    with open(jd_path, "wb") as f:
        f.write(await jd_file.read())

    # Extract and clean text from JD
    jd_text = clean_text(extract_resume_text(jd_path))

    resumes = []

    # Loop over each uploaded resume file
    for file in resume_files:
        path = f"temp/{file.filename}"              # Save path
        with open(path, "wb") as f:
            f.write(await file.read())              # Save file to disk

        raw = extract_resume_text(path)             # Extract raw text from file
        cleaned = clean_text(raw)                   # Clean the extracted text

        resumes.append({
            "filename": file.filename,
            "text": cleaned
        })

    # Rank resumes against the JD
    results = rank_resumes(jd_text, resumes)

    return {
        "ranked_resumes": results
    }
