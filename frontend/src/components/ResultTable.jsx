import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv'
import ResumePreview from './ResumePreview';

const ResultTable = ({ results }) => {

    const [resultsCopy, setResultsCopy] = useState(results)
    useEffect(() => {
      setResultsCopy(results), [results]
    })
    const [selectedResume, setSelectedResume] = useState(null)
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2 text-center text-shadow-lg">Ranked Resumes</h2>
      <div className='flex justify-end mt-2'>
        <CSVLink data={resultsCopy} filename='results.csv' className='text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition'>
          Export CSV
        </CSVLink>
      </div>
      <input type='text' 
      placeholder='Search for the file name'
      onChange={(e) => {
        setResultsCopy(results.filter((f_name) => f_name.filename.toLowerCase().includes(e.target.value.toLocaleLowerCase())))
      }}
      className="w-full mb-4 mt-4 p-2 border border-gray-300 rounded"
      />
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Rank</th>
            <th className="border px-4 py-2">Filename</th>
            <th className="border px-4 py-2">Score</th>
            <th className="border px-4 py-2">Preview</th>
          </tr>
        </thead>
        <tbody>
          {resultsCopy.length>0 ? resultsCopy.map((r, i) => (
            <tr key={r.filename}>
              <td className="border px-4 py-2">{i + 1}</td>
              <td className="border px-4 py-2">{r.filename}</td>
              <td className="border px-4 py-2">{r.score}</td>
              <td className="border px-4 py-2">
                <button onClick={() => setSelectedResume(r.filename)} className='text-blue-600 hover:underline text-sm'>
                  Preview
                </button>
              </td>
            </tr>
          )): <h2 className='text-sm text-red-600 px-3'>No Matching Results</h2>}
        </tbody>
      </table>
      {selectedResume && <ResumePreview resume={selectedResume}/>}
    </div>
  );
};

export default ResultTable;
