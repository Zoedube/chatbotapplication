import React, { useState } from 'react';
import Sidebar from './Components/Sidebar.jsx';
import InputDesign from './Components/InputDesign.jsx'; // Use InputDesign instead of individual components

function App() {
  const [user, setUser] = useState(null); // State to track the logged-in user

  const handleLoginSuccess = (userData) => {
    console.log("User logged in:", userData); // Debug log
    setUser(userData); // Update the user state with the response data
  };

  return (
    <div className="flex min-h-screen bg-white-100">
      <Sidebar />
      <InputDesign user={user} onLoginSuccess={handleLoginSuccess} /> {/* Pass props to InputDesign */}
    </div>
  );
}

export default App;