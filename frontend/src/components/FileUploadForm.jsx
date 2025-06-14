import { useState } from "react";
import AXInstance from "../api/api";
import ResultTable from "./ResultTable";

const FileUploadForm = () =>{
    const [jdFile, setJdFile] = useState(null);
    const [resumeFiles, setResumeFiles] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault()
        if(!jdFile){
            alert("Please Provide a job description")
            return
        }else if(resumeFiles.length === 0){
            alert("Please Provide atleast a single resume")
            return
        }
        //constructing a set of key/value pairs representing the fields and values of the form
        const formData = new FormData();
        formData.append('jd_file', jdFile)
        resumeFiles.forEach(file => {
            formData.append('resume_files', file)
        })
        setLoading(true);

        try{
            const res = await AXInstance.post('/rank-resumes', formData)
            setResults(res.data.ranked_resumes)
        }catch (error) {
            console.error(error);
            alert('Something went wrong while uploading.');
        }finally {
            setLoading(false); // Stop loading
        }
    }
    return(
        <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-2">
                <div>
                    <label className="font-medium">Job Description File: </label>
                    <input
                        type="file"
                        accept=".pdf,.docx"
                        onChange={e => setJdFile(e.target.files[0])} // Save file to state
                        className="file:cursor-pointer file:px-2 ml-9 file:py-1 file:rounded file:border-0 file:bg-blue-500 file:text-white file:font-medium hover:file:bg-blue-700 transition"
                    />
                </div>
                <div>
                    <label className="font-medium">Resume Files (multiple): </label>
                    <input
                        type="file"
                        accept=".pdf,.docx"
                        multiple
                        onChange={e => setResumeFiles([...e.target.files])}
                        className="file:cursor-pointer file:px-2 ml-2 file:py-1 file:rounded file:border-0 file:bg-blue-500 file:text-white file:font-medium hover:file:bg-blue-700 transition" // Save all files to state
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 w-1/8 text-white px-4 py-1 rounded"
                    >
                    {loading ? 'Ranking...' : 'Rank Resumes'} {/* Show loading text */}
                </button>
            </form>
            {console.log(results, "TETSINHAM")}
            {results.length > 0 && <ResultTable results={results} />}
        </div>
    )
}

export default FileUploadForm;