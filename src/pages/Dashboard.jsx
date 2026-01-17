import React from 'react';
import {
  FaUsers,
  FaUserCheck,
  FaChartLine,
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to Employee Management System</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stat Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Employees</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">0</h3>
              <div className="flex items-center mt-2">
                <FaArrowUp className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">0%</span>
                <span className="text-gray-500 text-sm ml-2">from last month</span>
              </div>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaUsers className="text-blue-600 text-2xl" />
            </div>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Active Today</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">0</h3>
              <div className="flex items-center mt-2">
                <FaArrowUp className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">0%</span>
                <span className="text-gray-500 text-sm ml-2">from yesterday</span>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <FaUserCheck className="text-green-600 text-2xl" />
            </div>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">On Leave</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">0</h3>
              <div className="flex items-center mt-2">
                <FaArrowDown className="text-red-500 mr-1" />
                <span className="text-red-500 text-sm">0%</span>
                <span className="text-gray-500 text-sm ml-2">from last week</span>
              </div>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaCalendarAlt className="text-purple-600 text-2xl" />
            </div>
          </div>
        </div>

        {/* Stat Card 4 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg. Rating</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">0.0</h3>
              <div className="flex items-center mt-2">
                <FaArrowUp className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">0%</span>
                <span className="text-gray-500 text-sm ml-2">from last month</span>
              </div>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <FaChartLine className="text-orange-600 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Chart 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Department Distribution</h3>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">Chart will appear here</p>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Attendance</h3>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">Chart will appear here</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FaUserCheck className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">No activity yet</p>
                <p className="text-gray-500 text-sm">Add employees to see activity</p>
              </div>
              <span className="text-gray-500 text-sm">Just now</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;