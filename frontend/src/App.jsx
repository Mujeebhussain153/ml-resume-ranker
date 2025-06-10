import React from 'react';
import FileUploadForm from './components/FileUploadForm';

function App() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      {/* App Title */}
      <h1 className="text-3xl font-bold mb-6">ML Resume Ranker</h1>

      {/* Upload Form Component */}
      <FileUploadForm />
    </div>
  );
}

export default App;
