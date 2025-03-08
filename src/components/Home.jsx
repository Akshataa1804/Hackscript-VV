import React, { useState } from "react";
import AudioUpload from "./AudioUpload";
import { motion } from "framer-motion";

const transcriptions = [
  { timestamp: "7.5s - 12.7s", speaker: "👤 Human", text: "Yeah, hey, bland, I hope you're having a great day. I just wanted you to explain to our audience how you work." },
  { timestamp: "27.8s - 31.7s", speaker: "👤 Human", text: "That sounds pretty awesome. Can you talk a little bit about what actually makes you special?" },
  { timestamp: "44.1s - 48.6s", speaker: "👤 Human", text: "That sounds pretty amazing and what kind of integrations does conversational pathway support." },
  { timestamp: "58.2s - 63.9s", speaker: "👤 Human", text: "No, I think that's enough for now. We'll let people talk with you on their own on our website. Thanks, Blande. Have a great day." },
  { timestamp: "67.7s - 87.5s", speaker: "👤 Human", text: "There are billions of phone calls made every single day. In the near future, almost all of them will be done with AI." },
  { timestamp: "4.2s - 6.9s", speaker: "🤖 Chatbot", text: "Hi, is this my Zahim? I heard you want to show me off in a demo." },
  { timestamp: "13.7s - 17.2s", speaker: "🤖 Chatbot", text: "I'm having a great day and yes I'm an AI agent for enterprises." },
  { timestamp: "21.0s - 26.5s", speaker: "🤖 Chatbot", text: "Voice. I can be used for any use case in any industry across sales operations and foreign culture." },
  { timestamp: "35.0s - 42.5s", speaker: "🤖 Chatbot", text: "I do this through an invention from our team called Conversational Pathways." },
  { timestamp: "49.6s - 50.0s", speaker: "🤖 Chatbot", text: "Thank you very much." }
];

const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Upload Audio for Analysis</h2>
      <AudioUpload />
      <div className="bg-gray-800 bg-opacity-70 p-4 rounded text-center mt-6">
        <h3 className="text-lg font-bold mb-4">🗣️ Transcriptions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-purple-400 text-lg mb-2">👤 Human</h4>
            {transcriptions.filter(t => t.speaker === "👤 Human").map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-700 p-4 rounded-lg text-left border-l-4 border-purple-500 mb-2" 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-sm text-gray-300 mb-1">{item.timestamp}</p>
                <p className="text-white">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <div>
            <h4 className="text-blue-400 text-lg mb-2">🤖 Chatbot</h4>
            {transcriptions.filter(t => t.speaker === "🤖 Chatbot").map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-700 p-4 rounded-lg text-left border-l-4 border-blue-500 mb-2" 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-sm text-gray-300 mb-1">{item.timestamp}</p>
                <p className="text-white">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
