import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './pages/LandingPage';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />
     
      {/* Dashboard Page */}
      <Route
        path="/dashboard"
        element={
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <div className="flex-1 p-6 pt-16 bg-gray-50">
                <Dashboard />
              </div>
              <Footer />
            </div>
          </div>
        }
      />
      <Route
        path="/employees"
        element={
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <div className="flex-1 p-6 pt-16 bg-gray-50">
                <Employees />
              </div>
              <Footer />
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;