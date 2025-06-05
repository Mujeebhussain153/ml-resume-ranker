import os
import fitz
import docx2txt

# This Function is to extract all of the text availble within the PDF file
def extract_text_from_pdf(filename: str):
    try:
        data = fitz.open(filename)
        text = ""
        for page in data:
            text+=page.get_text()
        return text
    except Exception as e:
        print(e)
        return
    
# This Function is to extract all of the text availble within the PDF file
def extract_text_from_docx(filename: str):
    try:
        return docx2txt.process(filename)
    except Exception as e:
        print(e)
        return

# This Function is a passthrough function that decides which function to execute based on the file type provided
def extract_resume_content(filepath: str):
    try:
        extension = os.path.splitext(filepath)
        if extension == ".pdf":
            return extract_text_from_pdf(filepath)
        elif extension == ".docx":
            return extract_text_from_docx(filepath)
        else:
            return "Unsupported file type provided"
    except Exception as e:
        print(e)
        return
