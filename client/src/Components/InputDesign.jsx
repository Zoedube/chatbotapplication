"use client";
import React from "react";

import ChatHeader from "..Components/ChatHeader";
import SearchHistory from "..Components/SearchHistory";
import ChatInput from "..Components/ChatInput";
import ChatFooter from "..Components/ChatFooter";

const InputDesign = () => {
  return (
    <main className="flex flex-col flex-1 p-6 max-md:p-5 max-sm:p-4">
      <ChatHeader />
      <SearchHistory />
      <ChatInput />
      <ChatFooter />
    </main>
  );
};

export default InputDesign;
