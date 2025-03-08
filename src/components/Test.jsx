import React, { useState } from 'react';
import axios from 'axios';

function Test() {
  const [audioFile, setAudioFile] = useState(null);
  const [transcription, setTranscription] = useState("");

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!audioFile) return;

    const formData = new FormData();
    formData.append('audio', audioFile);

    try {
      const response = await axios.post('http://127.0.0.1:5000/transcribe', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setTranscription(response.data.text);
    } catch (error) {
      console.error('Error transcribing audio:', error);
      setTranscription('Error transcribing audio');
    }
  };

  return (
    <div>
      <h2>Upload and Transcribe Audio</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Transcribe</button>

      <h3>Transcription:</h3>
      <p>{transcription}</p>
    </div>
  );
}

export default Test;
