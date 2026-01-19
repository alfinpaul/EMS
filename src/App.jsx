import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './pages/LandingPage';
import Sidebar from './Components/Sidebar'; // Import Sidebar

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('token', userData.token || 'dummy-token');
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleRegister = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('token', userData.token || 'dummy-token');
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
   
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <LandingPage />
          } 
        />
        
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <Login onLogin={handleLogin} />
          } 
        />
        
        <Route 
          path="/register" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <Register onRegister={handleRegister} />
          } 
        />

        {/* Protected Routes with Layout (including Sidebar) */}
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? 
            (
              <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Navbar user={user} onLogout={handleLogout} />
                  <div className="flex-1 p-6 pt-16 bg-gray-50">
                    <Dashboard />
                  </div>
                  <Footer />
                </div>
              </div>
            ) : 
            <Navigate to="/login" />
          } 
        />
        
        <Route 
          path="/employees" 
          element={
            isAuthenticated ? 
            (
              <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Navbar user={user} onLogout={handleLogout} />
                  <div className="flex-1 p-6 pt-16 bg-gray-50">
                    <Employees />
                  </div>
                  <Footer />
                </div>
              </div>
            ) : 
            <Navigate to="/login" />
          } 
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
   
  );
}

export default App;