import React, { useState } from "react";
import { IconSend } from '@tabler/icons-react';
import axios from 'axios';


//Code to ChatInput
const ChatInput = ({ onMessageSent }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
  
    try {
      const response = await axios.post('https://chatbotapplication-1.onrender.com/api/chat/send', 
        { prompt: inputValue },
        { withCredentials: true }
      );
      console.log("Response:", response.data);
      onMessageSent(response.data);
      setInputValue("");
    } catch (error) {
      console.error('Error sending message:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write Coding about new HTML Tags"
        className="p-3 pr-12 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        aria-label="Chat input"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 text-indigo-500 transform -translate-y-1/2 cursor-pointer border-none"
        aria-label="Send message"
      >
        <IconSend size={20} />
      </button>
    </form>
  );
};

export default ChatInput;