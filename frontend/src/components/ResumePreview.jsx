const ResumePreview = ({resume}) => {
    return (
        <div>
            {resume.endsWith(".pdf") ? (
                <iframe
                    src={`http://127.0.0.1:8000/api/preview/${resume}`}
                    title="PDF Resume"
                    className="w-full h-[500px] border"
                />
            ): (
                <iframe
                    src={`https://docs.google.com/gview?url=http://127.0.0.1:8000/api/preview/${resume}&embedded=true`}
                    title="DOCX Resume"
                    className="w-full h-[500px] border"
                />
            )}
        </div>
    )
}

export default ResumePreview;