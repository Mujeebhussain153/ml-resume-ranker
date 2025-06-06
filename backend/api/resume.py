from fastapi import APIRouter, File, UploadFile
from ..utils.resume_parser import extract_resume_content
from ..utils.text_preprocessor import clean_text

router = APIRouter()

@router.post("/parse-resume")
async def parse_resume(file:UploadFile = File(...)):
    try:
        pass
    except Exception as e:
        print(e)
        return