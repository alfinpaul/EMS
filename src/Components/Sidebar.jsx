import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 bg-gray-800 text-white  p-4 flex flex-col ">
    <h1 className="text-2xl font-bold mb-8 ">EMS</h1>
    <div className="border-t-2 border-gray-300 my-6"></div>
    <Link to="/" className="text-xl font-bold text-gray-800 " style={{ textDecoration: 'none' }}>Dashboard</Link>
    <Link to="/employees" className="text-xl font-bold text-gray-800 mt-3" style={{ textDecoration: 'none' }}>Employees</Link>
  </div>
);

export default Sidebar;


