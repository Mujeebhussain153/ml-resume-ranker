import re
import nltk
from nltk.corpus import stopwords
nltk.download('stopwords')

STOPWORDS = set(stopwords.words('english'))

def clean_text(text):
    # Lowercase, remove special chars, stopwords
    try:
        text = text.lower()
        text = re.sub(r'\s+', ' ', text)
        text = re.sub(r'[^a-zA-Z0-9 ]', '', text)
        words = text.split()
        words = [word for word in words if word not in STOPWORDS]
        return ' '.join(words)
    except Exception as e:
        print(e)
        return