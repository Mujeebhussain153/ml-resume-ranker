from fastapi import APIRouter
from fastapi.responses import FileResponse
import os

router = APIRouter()

@router.get('/preview/{filename}')
async def preview_file(filename:str):
    try:
        file_path = rf'.\backend\temp\{filename}'
        if(os.path.exists(file_path)):
            return FileResponse(file_path, media_type='application/octet-stream', filename=filename)
        else:
            return {"error": "File not found"}
    except Exception as e:
        print(e)
        return