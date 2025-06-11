import React from 'react';
import { useState } from 'react';

const ResultTable = ({ results }) => {

    const [resultsCopy, setResultsCopy] = useState(results)
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Ranked Resumes</h2>
      <input type='text' 
      placeholder='Search for the file name'
      onChange={(e) => {
        setResultsCopy(results.filter((f_name) => f_name.filename.toLowerCase().includes(e.target.value.toLocaleLowerCase())))
      }}
      className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Rank</th>
            <th className="border px-4 py-2">Filename</th>
            <th className="border px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
            {console.log(resultsCopy, "TEST!!!")}
          {resultsCopy.map((r, i) => (
            <tr key={r.filename}>
              <td className="border px-4 py-2">{i + 1}</td>
              <td className="border px-4 py-2">{r.filename}</td>
              <td className="border px-4 py-2">{r.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
