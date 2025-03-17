import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import SearchHistory from "./SearchHistory";
import ChatInput from "./ChatInput";
import ChatFooter from "./ChatFooter";

const InputDesign = ({ user, onLoginSuccess }) => {
  const [messages, setMessages] = useState([]);

  const handleMessageSent = (message) => {
    setMessages(prev => [message, ...prev]);
  };

  return (
    <main className="flex flex-col flex-1 p-6 max-md:p-5 max-sm:p-4">
      <ChatHeader user={user} onLoginSuccess={onLoginSuccess} />
      {user ? (
        <>
          <SearchHistory />
          <ChatInput onMessageSent={handleMessageSent} />
          <ChatFooter />
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            Please login by clicking the name above to use the chat
          </p>
        </div>
      )}
    </main>
  );
};

export default InputDesign;
