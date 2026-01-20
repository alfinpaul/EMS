import React, { useEffect, useState } from "react";
import {
  FaUserPlus,
  FaEdit,
  FaTrash,
  FaUser,
  FaCheckCircle,
  FaSearch
} from "react-icons/fa";

import {
  getEmployeesAPI,
  addEmployeeAPI,
  updateEmployeeAPI,
  deleteEmployeeAPI
} from "../services/ApiAll";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Search and filter 
  const [searchName, setSearchName] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "IT",
    position: "",
    joinDate: new Date().toISOString().split("T")[0],
    status: "Active"
  });

  const departments = ["IT", "HR", "Finance", "Marketing", "Sales", "Operations"];

  /* ================= API FETCH ================= */
  const fetchEmployees = async () => {
    const res = await getEmployeesAPI();
    setEmployees(res.data);
    setFilteredEmployees(res.data); // Initialize filtered employees
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  /* ================= SEARCH AND FILTER ================= */
  useEffect(() => {
    let results = employees;

    // Filter by name 
    if (searchName.trim() !== "") {
      results = results.filter(emp =>
        emp.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    // Filter by department
    if (filterDepartment !== "All") {
      results = results.filter(emp => emp.department === filterDepartment);
    }

    // Filter by status
    if (filterStatus !== "All") {
      results = results.filter(emp => emp.status === filterStatus);
    }

    setFilteredEmployees(results);
  }, [searchName, filterDepartment, filterStatus, employees]);

  /* ================= FORM ================= */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setShowAddForm(false);
    setEditingId(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "IT",
      position: "",
      joinDate: new Date().toISOString().split("T")[0],
      status: "Active"
    });
  };

  /* ================= ADD ================= */
  const handleAddEmployee = async () => {
    if (!formData.name || !formData.email || !formData.position) {
      alert("Please fill required fields");
      return;
    }

    await addEmployeeAPI({
      ...formData,
      avatar: `https://ui-avatars.com/api/?name=${formData.name}`
    });

    fetchEmployees();
    resetForm();
  };

  /* ================= EDIT ================= */
  const handleEdit = (emp) => {
    setEditingId(emp.id);
    setFormData(emp);
    setShowAddForm(true);
  };

  const handleUpdate = async () => {
    await updateEmployeeAPI(editingId, formData);
    fetchEmployees();
    resetForm();
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (window.confirm("Delete this employee?")) {
      await deleteEmployeeAPI(id);
      fetchEmployees();
    }
  };

  /* ================= STATS ================= */
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(e => e.status === "Active").length;
  const inactiveEmployees = employees.filter(e => e.status === "Inactive").length;

  const departmentStats = departments.map(dept => {
    const count = employees.filter(e => e.department === dept).length;
    return {
      name: dept,
      count,
      percentage: totalEmployees
        ? Math.round((count / totalEmployees) * 100)
        : 0
    };
  });

  return (
    <div className="p-6">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Employee Management</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center"
        >
          <FaUserPlus className="mr-2" /> Add Employee
        </button>
      </div>

      {/* ================= SEARCH AND FILTER BAR ================= */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search by Name */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search by name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          {/* Filter by Department */}
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
          >
            <option value="All">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          {/* Filter by Status */}
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredEmployees.length} of {employees.length} employees
          {(searchName || filterDepartment !== "All" || filterStatus !== "All") && (
            <button
              onClick={() => {
                setSearchName("");
                setFilterDepartment("All");
                setFilterStatus("All");
              }}
              className="ml-2 text-blue-600 hover:text-blue-800 underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* ================= ADD / EDIT FORM ================= */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Employee" : "Add Employee"}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <input className="border p-2 rounded" name="name" placeholder="Name"
              value={formData.name} onChange={handleInputChange} />

            <input className="border p-2 rounded" name="email" placeholder="Email"
              value={formData.email} onChange={handleInputChange} />

            <input className="border p-2 rounded" name="phone" placeholder="Phone"
              value={formData.phone} onChange={handleInputChange} />

            <input className="border p-2 rounded" name="position" placeholder="Position"
              value={formData.position} onChange={handleInputChange} />

            <select className="border p-2 rounded" name="department"
              value={formData.department} onChange={handleInputChange}>
              {departments.map(d => <option key={d}>{d}</option>)}
            </select>

            <select className="border p-2 rounded" name="status"
              value={formData.status} onChange={handleInputChange}>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="mt-4 text-right">
            <button onClick={resetForm} className="mr-2 px-4 py-2 border rounded">
              Cancel
            </button>
            <button
              onClick={editingId ? handleUpdate : handleAddEmployee}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {editingId ? "Update" : "Save"}
            </button>
          </div>
        </div>
      )}

      {/* ================= EMPLOYEE TABLE ================= */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Employee</th>
              <th className="px-6 py-3 text-left">Contact</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Position</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredEmployees.map(emp => (
              <tr key={emp.id}>
                <td className="px-6 py-4 flex items-center">
                  <img src={emp.avatar} className="w-10 h-10 rounded-full mr-3" />
                  {emp.name}
                </td>
                <td className="px-6 py-4">{emp.email}</td>
                <td className="px-6 py-4">{emp.department}</td>
                <td className="px-6 py-4">{emp.position}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    emp.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {emp.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex space-x-2">
                  <button onClick={() => handleEdit(emp)}
                    className="p-2 bg-yellow-100 text-yellow-600 rounded">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(emp.id)}
                    className="p-2 bg-red-100 text-red-600 rounded">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= QUICK STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold mb-4">Quick Stats</h4>

          <div className="space-y-4">
            <div className="flex justify-between bg-blue-50 p-3 rounded">
              <div>
                <p>Total Employees</p>
                <p className="text-2xl font-bold">{totalEmployees}</p>
              </div>
              <FaCheckCircle className="text-blue-600 text-xl" />
            </div>

            <div className="flex justify-between bg-green-50 p-3 rounded">
              <div>
                <p>Active</p>
                <p className="text-2xl font-bold">{activeEmployees}</p>
              </div>
              <span>{totalEmployees ? Math.round((activeEmployees / totalEmployees) * 100) : 0}%</span>
            </div>

            <div className="flex justify-between bg-red-50 p-3 rounded">
              <div>
                <p>Inactive</p>
                <p className="text-2xl font-bold">{inactiveEmployees}</p>
              </div>
              <span>{totalEmployees ? Math.round((inactiveEmployees / totalEmployees) * 100) : 0}%</span>
            </div>
          </div>
        </div>

        {/* ================= DEPARTMENT OVERVIEW ================= */}
        <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2">
          <h4 className="font-semibold mb-4">Department Overview</h4>

          {departmentStats.map(dept => (
            <div key={dept.name} className="mb-3">
              <div className="flex justify-between text-sm">
                <span>{dept.name}</span>
                <span>{dept.count} ({dept.percentage}%)</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-blue-600 h-2 rounded"
                  style={{ width: `${dept.percentage}%` }}>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Employees;