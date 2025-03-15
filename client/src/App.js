import React from 'react';
import Sidebar from './Components/Sidebar.jsx';
import ChatHeader from './Components/ChatHeader.jsx';
import SearchHistory from './Components/SearchHistory.jsx';
import ChatInput from './Components/ChatInput.jsx';
import ChatFooter from './Components/ChatFooter.jsx';

function App() {
  return (
    <div className="flex min-h-screen bg-white-100">
      <Sidebar />
      <main className="flex flex-col flex-1 p-6 max-md:p-5 max-sm:p-4">
        <ChatHeader />
        <SearchHistory />
        <ChatInput />
        <ChatFooter />
      </main>
    </div>
  );
}

export default App;