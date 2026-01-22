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
              <Link 
                to="/dashboard"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Try Demo
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
              to="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Try Demo
              <FaArrowRight className="ml-2" />
            </Link>
            
            <a
              href="#features"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-24">
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

      {/* How It Works Section */}
      <div className="container mx-auto px-6 mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Experience Our Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click the demo button to instantly access our full-featured dashboard with sample data
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">1</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Click Demo</h3>
                <p className="text-gray-600">
                  Instantly access a fully functional demo dashboard with sample data.
                </p>
              </div>

              <div className="relative text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                  <div className="text-2xl font-bold text-green-600">2</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Explore Dashboard</h3>
                <p className="text-gray-600">
                  Navigate through employee data, analytics, and management features.
                </p>
              </div>

              <div className="relative text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                  <div className="text-2xl font-bold text-yellow-600">3</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Test Features</h3>
                <p className="text-gray-600">
                  Try out all features including employee management and analytics.
                </p>
              </div>

              <div className="relative text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">4</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Get Insights</h3>
                <p className="text-gray-600">
                  See how our platform can transform your employee management process.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/dashboard"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Try Demo Now
              <FaArrowRight className="ml-3" />
            </Link>
            <p className="text-gray-500 text-sm mt-4">No signup required • Full access to demo features</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;