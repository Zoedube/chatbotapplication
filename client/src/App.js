import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar.jsx";
import InputDesign from "./Components/InputDesign.jsx";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get("https://chatbotapplication-1.onrender.com", {
          withCredentials: true,
        })
        .then((response) => {
          console.log("Fetched history for user:", user, response.data);
          setHistory(response.data);
        })
        .catch((error) => {
          console.error("Error fetching history:", error);
          setHistory([]);
        });
    } else {
      setHistory([]);
    }
  }, [user]);

  const handleLoginSuccess = (userData) => {
    console.log("User logged in:", userData);
    setUser(userData);
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