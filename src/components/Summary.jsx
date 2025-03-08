import React, { useState } from "react";
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, Legend, XAxis, YAxis, BarChart, Bar } from "recharts";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";

const mockPerformance = {
  totalFiles: 25,
  avgSentiment: 0.68,
  responseEffectiveness: 85,
  repetitiveQueries: 30,
  frustratedResponses: 15,
};

const questionCategories = {
  "Repetitive Queries": [
    { question: "How to check my order status?", chatbotResponse: "Go to My Orders section.", userReaction: "User wanted direct tracking link." },
    { question: "What is the return policy?", chatbotResponse: "Returns accepted within 14 days.", userReaction: "User wanted extended return options." },
  ],
  "Technical Queries": [
    { question: "How do I update drivers?", chatbotResponse: "Visit the manufacturer’s website.", userReaction: "User wanted a step-by-step guide." },
  ],
  "Software Issues": [
    { question: "Why is my laptop running slow?", chatbotResponse: "Try clearing temp files and updating software.", userReaction: "User wanted a diagnostic tool recommendation." },
  ],
  "Hardware Issues": [
    { question: "Laptop not charging, what to do?", chatbotResponse: "Check power cable and battery status.", userReaction: "User wanted repair options." },
  ],
  "Solution Proposed but Dissatisfied": [
    { question: "My laptop keeps overheating, help!", chatbotResponse: "Ensure vents are clean and update BIOS.", userReaction: "User found the response insufficient." },
  ],
};

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-800 bg-opacity-70 p-4 rounded">
        {Object.entries(mockPerformance).map(([key, value]) => (
          <div key={key} className="text-center p-2 bg-gray-700 rounded-lg">
            <h3 className="text-lg font-bold">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <p className="text-xl font-semibold">{value}{typeof value === "number" && key.includes("Effectiveness") ? "%" : ""}</p>
          </div>
        ))}
      </div>
      
      {/* Sample Questions with Responses in Tabs */}
      <div className="bg-gray-800 bg-opacity-70 p-4 rounded text-center">
        <h3 className="text-lg font-bold">💬 Queries and Chatbot Responses</h3>
        <Tab.Group>
          <Tab.List className="flex flex-wrap justify-center p-2 gap-2">
            {Object.keys(questionCategories).map((category) => (
              <Tab key={category} className={({ selected }) => 
                `px-4 py-2 rounded-lg text-white transition-colors duration-200 ${selected ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`
              }>
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {Object.entries(questionCategories).map(([category, questions]) => (
              <Tab.Panel key={category} className="p-4">
                <ul className="list-none text-left mx-auto w-full md:w-3/4">
                  {questions.map((q, index) => (
                    <li key={index} className="py-2 border-b border-gray-600 p-3 bg-gray-700 rounded-lg mb-2">
                      <p className="font-bold text-purple-400">Q: {q.question}</p>
                      <p className="text-sm text-gray-300"><strong>Chatbot:</strong> {q.chatbotResponse}</p>
                      <p className="text-sm text-red-400"><strong>User Feedback:</strong> {q.userReaction}</p>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      
      {/* Monthly and Time-Based Analysis */}
      <div className="bg-gray-800 bg-opacity-70 p-4 rounded text-center">
        <h3 className="text-lg font-bold">📆 Time-Based Analysis</h3>
        <BarChart width={500} height={300} data={[
          { name: "Week 1", queries: 40 },
          { name: "Week 2", queries: 35 },
          { name: "Week 3", queries: 50 },
          { name: "Week 4", queries: 45 },
        ]} className="mx-auto">
          <XAxis dataKey="name" stroke="#fff" tick={{ fill: '#fff' }} />
          <YAxis stroke="#fff" tick={{ fill: '#fff' }} />
          <Tooltip cursor={{ fill: 'rgba(168, 85, 247, 0.2)' }} contentStyle={{ backgroundColor: "#333", borderRadius: "5px", color: "#fff" }} />
          <Legend wrapperStyle={{ color: "#fff" }} />
          <Bar dataKey="queries" fill="#a855f7" radius={[10, 10, 0, 0]} barSize={40} />
        </BarChart>
      </div>
    </div>
  );
};

export default Summary;