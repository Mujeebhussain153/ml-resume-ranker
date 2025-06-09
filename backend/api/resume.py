from fastapi import APIRouter, File, UploadFile
from ..utils.resume_parser import extract_resume_content
from ..utils.text_preprocessor import clean_text

router = APIRouter()

@router.post("/parse-resume")
async def parse_resume(file:UploadFile = File(...)):
    try:
        save_path = f"..\\temp\\{file.filename}"
        with open(save_path, "wb") as f:
            f.write(await file.read())
        raw_text = extract_resume_content(save_path)
        cleaned_text = clean_text(raw_text)
        return {
            "filename": file.filename,
            "raw_text": raw_text[:300],
            "cleaned_text": cleaned_text[:300]
        }
    except Exception as e:
        print(e)
        return