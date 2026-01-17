import React from 'react'
import { FaBell, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">

          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <button className="lg:hidden text-gray-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="hidden lg:block">
              <h1 className="text-xl font-bold text-blue-600">
                EmployeeHub
              </h1>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">

            {/* Notification */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600">
              <FaBell className="text-xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Info */}
            <div className="flex items-center space-x-3">
              <div className="text-right hidden md:block">
                <p className="font-semibold text-gray-800">Admin User</p>
                <p className="text-sm text-gray-500">Administrator</p>
              </div>

              <button className="flex items-center space-x-2">
                <FaUserCircle className="text-3xl text-gray-400" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
