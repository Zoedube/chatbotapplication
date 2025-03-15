import React from "react";

const ChatHeader = () => {
  return (
    <header className="flex justify-between items-center mb-6 max-sm:flex-col max-sm:gap-4 max-sm:items-start border-b border-gray-200 pb-4">
      <div>
        <h1 className="mb-1 text-2xl font-semibold text-gray-900">
          Get answers in seconds
        </h1>
        <p className="text-sm text-gray-500">
          Create and complete tasks using boards
        </p>
      </div>
      <div className="flex gap-3 items-center text-sm text-gray-900 max-sm:self-end">
        <span>Johnson Doe</span>
        <div
          className="w-8 h-8 bg-white-200 rounded-full"
          aria-label="User avatar"
        />
      </div>
    </header>
  );
};

export default ChatHeader;
