from sklearn.feature_extraction.text import TfidfVectorizer  # Used to convert text to TF-IDF vectors
from sklearn.metrics.pairwise import cosine_similarity        # Used to calculate similarity between vectors

def rank_resumes(job_desc, resumes):
    """
    Rank resumes based on their similarity to the job description using TF-IDF.
    
    Parameters:
    - job_desc (str): Cleaned job description text
    - resumes (list): List of dicts like { 'filename': ..., 'text': ... }

    Returns:
    - List of resumes sorted by similarity score in descending order
    """
    try:
        # Combine job description and all resumes into a single list
        documents = [job_desc] + [r["text"] for r in resumes]

        # Convert documents to TF-IDF vectors
        vectorizer = TfidfVectorizer()
        tfidf_matrix = vectorizer.fit_transform(documents)

        # First document is the JD
        job_vec = tfidf_matrix[0:1]

        # Remaining vectors are the resumes
        resume_vecs = tfidf_matrix[1:]

        # Compute cosine similarity between JD and each resume
        scores = cosine_similarity(job_vec, resume_vecs)[0]

        # Zip resumes with their corresponding similarity scores
        ranked = sorted(
            zip(resumes, scores),
            key=lambda x: x[1],     # Sort by score
            reverse=True            # Higher score = better match
        )

        # Format results as list of {filename, score}
        return [{"filename": r["filename"], "score": round(score, 4)} for r, score in ranked]
    except Exception as e:
        print(e)
        return
