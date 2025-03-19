import React, { useState } from 'react';
import axios from 'axios';

//Code to Authentication for registering & logging in
const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const url = isLogin ? 'http://localhost:3000/api/login' : 'http://localhost:3000/api/register';
      const data = isLogin 
        ? { username, password }
        : { username, email, password };
  
      const response = await axios.post(url, data, {
        withCredentials: true, 
      });
      
      if (isLogin) {
        onLoginSuccess(response.data);
      }
      onClose();
    } catch (err) {
      setError(err.response?.data || 'An error occurred');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 border border-gray-200 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition-colors"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 w-full text-sm text-indigo-500 hover:underline"
        >
          {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
        </button>

        <button
          onClick={onClose}
          className="mt-2 w-full text-sm text-gray-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;