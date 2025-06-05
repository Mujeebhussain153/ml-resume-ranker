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