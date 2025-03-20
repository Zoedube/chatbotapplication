// ChatHeader.jsx
import React, { useState } from 'react';
import AuthModal from './AuthModal';
import { IconUser } from '@tabler/icons-react';

const ChatHeader = ({ user, onLoginSuccess }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };

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
        <span 
          className="cursor-pointer hover:text-indigo-500 transition-colors"
          onClick={handleLoginClick}
        >
          {user ? user.username : 'Johnson Doe'}
        </span>
        <div
          className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center bg-gray-200"
          onClick={handleLoginClick}
          aria-label="User avatar"
          title={user ? "User profile" : "Click to login"}
        >
          <IconUser size={20} className="text-gray-600" />
        </div>
      </div>
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={onLoginSuccess}
      />
    </header>
  );
};

export default ChatHeader;
