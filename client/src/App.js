import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar.jsx";
import InputDesign from "./Components/InputDesign.jsx";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null); // State to track the logged-in user
  const [history, setHistory] = useState([]); // State to track chat history

  // Fetch chat history when the user changes (login)
  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:3000/api/chat/history", {
          withCredentials: true, // Include cookies for authentication
        })
        .then((response) => {
          console.log("Fetched history for user:", user, response.data);
          setHistory(response.data);
        })
        .catch((error) => {
          console.error("Error fetching history:", error);
          setHistory([]); // Clear history on error
        });
    } else {
      setHistory([]); // Clear history when no user is logged in
    }
  }, [user]); // Re-run this effect when the user changes

  const handleLoginSuccess = (userData) => {
    console.log("User logged in:", userData); // Debug log
    setUser(userData); // Update the user state with the response data
  };

  const handleNewMessage = (message) => {
    setHistory((prev) => [message, ...prev]);
  };

  return (
    <div className="flex min-h-screen bg-white-100">
      <Sidebar />
      <InputDesign
        user={user}
        onLoginSuccess={handleLoginSuccess}
        history={history}
        onMessageSent={handleNewMessage}
      />
    </div>
  );
}

export default App;