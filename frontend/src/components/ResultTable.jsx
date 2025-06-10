import React from 'react';

// Table to display ranked resumes
const ResultTable = ({ results }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Ranked Resumes</h2>

      {/* Simple styled HTML table */}
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Rank</th>
            <th className="border px-4 py-2">Filename</th>
            <th className="border px-4 py-2">Score</th>
          </tr>
        </thead>

        <tbody>
          {results.map((r, i) => (
            <tr key={r.filename}>
              <td className="border px-4 py-2">{i + 1}</td>        {/* Rank */}
              <td className="border px-4 py-2">{r.filename}</td>   {/* Filename */}
              <td className="border px-4 py-2">{r.score}</td>      {/* Score */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
