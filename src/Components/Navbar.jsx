import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaHome, FaUsers } from 'react-icons/fa';

const Navigation = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // If you have a logout function prop, call it
    if (onLogout) {
      onLogout();
    }
    
    // Navigate to landing page
    navigate('/');
    
    // Optional: Clear any user data from localStorage/sessionStorage
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link 
              to="/dashboard" 
              className="text-xl font-bold text-gray-800"
              style={{ textDecoration: 'none' }}
            >
              Employee Management
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors duration-200"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;