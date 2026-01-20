import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaChartLine, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import Footer from '../Components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">EmployeeHub</div>
            <div className="space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium  text-decoration-none">
                Sign In
              </Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700  text-decoration-none">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">EmployeeHub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Streamline your employee management with our comprehensive dashboard.
            Track performance, manage attendance, and optimize your workforce.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="  text-decoration-none bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Get Started
              <FaArrowRight className="ml-2" />
            </Link>

          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Employee Management</h3>
              <p className="text-gray-600">
                Easily add, edit, and manage employee profiles. Keep track of all employee details in one place.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Get insights with comprehensive analytics. Track performance, attendance, and department statistics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Secure Access</h3>
              <p className="text-gray-600">
                Role-based access control ensures data security. Manage permissions and protect sensitive information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple four-step process
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                <div className="text-2xl font-bold text-blue-600">1</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sign Up</h3>
              <p className="text-gray-600">
                Create your account in seconds. No credit card required for the free trial.
              </p>
            </div>

            <div className="relative text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                <div className="text-2xl font-bold text-green-600">2</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Import Data</h3>
              <p className="text-gray-600">
                Upload your employee data via CSV or connect with your existing HR tools.
              </p>
            </div>

            <div className="relative text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                <div className="text-2xl font-bold text-yellow-600">3</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customize</h3>
              <p className="text-gray-600">
                Set up departments, roles, and permissions tailored to your organization.
              </p>
            </div>

            <div className="relative text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                <div className="text-2xl font-bold text-purple-600">4</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Go Live</h3>
              <p className="text-gray-600">
                Start managing your workforce with powerful tools and real-time insights.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/register"
            className="inline-flex items-center text-decoration-none bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Free Trial
            <FaArrowRight className="ml-3" />
          </Link>
          <p className="text-gray-500 text-sm mt-4">No credit card required • 14-day free trial</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;