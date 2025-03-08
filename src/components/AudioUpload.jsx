import { useState } from "react";

const AudioUpload = () => {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(file);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-black max-w-md mx-auto">
      <input type="file" accept="audio/*" onChange={handleFileChange} className="mb-4" />
      {audioFile && <p className="mt-2">Selected File: {audioFile.name}</p>}
    </div>
  );
};

export default AudioUpload;
