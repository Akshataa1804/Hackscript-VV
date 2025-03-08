import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const mockTranscription = [
  { time: "7.45s - 12.67s", text: "Hope you're having a great day!", emotion: "joy", score: 0.72 },
  { time: "27.80s - 31.65s", text: "That sounds awesome!", emotion: "joy", score: 0.71 },
  { time: "44.12s - 48.56s", text: "What kind of innovations?", emotion: "surprise", score: 0.86 },
  { time: "58.18s - 63.88s", text: "I think that's enough for now.", emotion: "neutral", score: 0.46 },
  { time: "67.66s - 87.47s", text: "Billions of phone calls every second...", emotion: "surprise", score: 0.53 },
];

const sentimentData = [
  { name: "Joy", value: 50 },
  { name: "Surprise", value: 30 },
  { name: "Neutral", value: 20 },
];

const SentimentUI = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto text-white bg-gray-900 rounded-lg shadow-md space-y-4">
      {/* File Info & Duration */}
      <div className="bg-gray-800 p-3 rounded flex justify-between items-center text-sm">
        <div>
          <span className="font-bold">🎵 File:</span> sample_audio.mp3
        </div>
        <div>
          <span className="font-bold">⏳ Duration:</span> 1m 30s
        </div>
      </div>

      {/* Overall Sentiment */}
      <div className="bg-gray-700 p-3 rounded text-center font-bold text-lg">Overall Sentiment: Mixed</div>
      
      {/* Sentiment Analysis Chart */}
      <div className="flex justify-center">
        <PieChart width={250} height={250}>
          <Pie data={sentimentData} cx={125} cy={125} outerRadius={80} fill="#8884d8" dataKey="value" label>
            {sentimentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={["#4CAF50", "#FF9800", "#9E9E9E"][index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </div>

      {/* Sentiment Classification */}
      <div className="text-center font-bold text-lg">Sentiment Classification</div>
      <BarChart width={320} height={200} data={sentimentData} className="mx-auto">
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>

      {/* Emotion Analysis Per Line */}
      <div className="font-bold text-lg text-center">📊 Emotion Analysis Per Line</div>
      {mockTranscription.map((item, index) => (
        <motion.div
          key={index}
          className={`p-3 my-2 rounded-lg text-sm flex justify-between items-center space-x-2 ${
            item.emotion === "joy" ? "bg-green-600" : item.emotion === "surprise" ? "bg-blue-600" : "bg-gray-600"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex-1">
            <strong>{item.time}</strong>
            <div>{item.text}</div>
          </div>
          <div className="text-center">
            <span className="italic block">{item.emotion}</span>
            <span className="text-xs text-gray-300">Score: {item.score}</span>
          </div>
          <button className="bg-yellow-500 text-black px-2 py-1 rounded text-xs">➕ Add as Repetitive</button>
        </motion.div>
      ))}

      {/* Audio Segmentation Box */}
      <div className="bg-gray-700 p-3 rounded text-center font-bold text-lg mt-4">Audio Segmentation</div>
      <div className="bg-gray-800 p-3 rounded text-sm text-gray-300">
        <p>Segments of speech detected with timestamps and classification.</p>
      </div>
    </div>
  );
};

export default SentimentUI;