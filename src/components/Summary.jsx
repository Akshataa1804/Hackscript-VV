import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const mockPerformance = {
  totalFiles: 25,
  avgSentiment: 0.68,
  responseEffectiveness: 85,
  repetitiveQueries: 30,
  frustratedResponses: 15,
};

const sentimentTrend = [
  { date: "Mar 1", score: 0.6 },
  { date: "Mar 5", score: 0.7 },
  { date: "Mar 10", score: 0.75 },
  { date: "Mar 15", score: 0.65 },
  { date: "Mar 20", score: 0.68 },
];

const cumulativeAnalysis = [
  { period: "Week 1", score: 0.65 },
  { period: "Week 2", score: 0.7 },
  { period: "Week 3", score: 0.75 },
  { period: "Week 4", score: 0.68 },
];

const questionTypes = [
  { name: "Repetitive", value: 30 },
  { name: "Frustrated", value: 15 },
  { name: "Clarification", value: 25 },
  { name: "Acknowledgements", value: 30 },
];

const Summary = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-white bg-gradient-to-br from-purple-900 to-gray-900 rounded-lg shadow-md space-y-6">
      <motion.h2 
        className="text-2xl font-semibold text-center"
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        📊 Cumulative Sentiment Analysis
      </motion.h2>
      
      {/* Performance Metrics */}
      <div className="bg-gray-800 bg-opacity-70 p-4 rounded grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div><span className="font-bold">🔍 Files Analyzed:</span> {mockPerformance.totalFiles}</div>
        <div><span className="font-bold">📈 Avg Sentiment:</span> {mockPerformance.avgSentiment}</div>
        <div><span className="font-bold">✅ Response Effectiveness:</span> {mockPerformance.responseEffectiveness}%</div>
        <div><span className="font-bold">🔁 Repetitive Queries:</span> {mockPerformance.repetitiveQueries}%</div>
      </div>
      
      {/* Weekly & Monthly Analysis */}
      <div className="bg-gray-800 bg-opacity-70 p-4 rounded text-center">
        <h3 className="text-lg font-bold">📅 Weekly & Monthly Sentiment Analysis</h3>
        <BarChart width={350} height={200} data={cumulativeAnalysis} className="mx-auto">
          <XAxis dataKey="period" />
          <YAxis domain={[0.5, 1]} />
          <Tooltip />
          <Bar dataKey="score" fill="#82ca9d" />
        </BarChart>
        <button className="mt-4 px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700">📥 Export Analysis</button>
      </div>

      {/* Sentiment Trend */}
      <div className="bg-gray-800 bg-opacity-70 p-4 rounded text-center">
        <h3 className="text-lg font-bold">📅 Sentiment Trend Over Time</h3>
        <LineChart width={350} height={200} data={sentimentTrend} className="mx-auto">
          <XAxis dataKey="date" />
          <YAxis domain={[0.5, 1]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </div>

      {/* Question Types */}
      <div className="bg-gray-800 bg-opacity-70 p-4 rounded text-center">
        <h3 className="text-lg font-bold">💬 Types of Questions</h3>
        <PieChart width={250} height={250} className="mx-auto">
          <Pie data={questionTypes} cx={125} cy={125} outerRadius={80} fill="#8884d8" dataKey="value">
            {questionTypes.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={["#FF5722", "#F44336", "#FF9800", "#4CAF50"][index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Summary;
