import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaUserCheck,
  FaChartLine,
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getEmployeesAPI } from "../services/ApiAll";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const result = await getEmployeesAPI();
    if (result.status === 200) {
      setEmployees(result.data);
    }
  };

  // ===================== STATS =====================
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(emp => emp.status === "Active").length;
  const onLeaveEmployees = employees.filter(emp => emp.status === "On Leave").length;

  const avgRating =
    employees.length > 0
      ? (
          employees.reduce((sum, emp) => sum + (emp.rating || 4), 0) /
          employees.length
        ).toFixed(1)
      : "0.0";

  // ===================== DEPARTMENT CHART =====================
  const departmentMap = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  const departmentChartOptions = {
    chart: { type: "pie", backgroundColor: "transparent" },
    title: { text: null },
    tooltip: { pointFormat: "<b>{point.y}</b> employees ({point.percentage:.1f}%)" },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.y}"
        }
      }
    },
    series: [
      {
        name: "Employees",
        colorByPoint: true,
        data: Object.keys(departmentMap).map(dep => ({
          name: dep,
          y: departmentMap[dep]
        }))
      }
    ]
  };

  // ===================== ATTENDANCE CHART =====================
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const attendanceChartOptions = {
    chart: { type: "column", backgroundColor: "transparent" },
    title: { text: null },
    xAxis: { categories: months },
    yAxis: { title: { text: "Employees Present" } },
    series: [
      {
        name: "Attendance",
        data: months.map(() =>
          Math.floor(Math.random() * (activeEmployees || 1)) + 1
        )
      }
    ]
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to Employee Management System</p>
      </div>

      {/* ===================== STATS ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <StatCard
          title="Total Employees"
          value={totalEmployees}
          icon={<FaUsers />}
          color="blue"
        />

        <StatCard
          title="Active Today"
          value={activeEmployees}
          icon={<FaUserCheck />}
          color="green"
        />

        <StatCard
          title="On Leave"
          value={onLeaveEmployees}
          icon={<FaCalendarAlt />}
          color="purple"
          down
        />

        <StatCard
          title="Avg. Rating"
          value={avgRating}
          icon={<FaChartLine />}
          color="orange"
        />
      </div>

      {/* ===================== CHARTS ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Department Distribution
          </h3>
          <HighchartsReact highcharts={Highcharts} options={departmentChartOptions} />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Monthly Attendance
          </h3>
          <HighchartsReact highcharts={Highcharts} options={attendanceChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// ===================== REUSABLE STAT CARD =====================
const StatCard = ({ title, value, icon, color, down }) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-${color}-500`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">{value}</h3>
        <div className="flex items-center mt-2">
          {down ? (
            <FaArrowDown className="text-red-500 mr-1" />
          ) : (
            <FaArrowUp className="text-green-500 mr-1" />
          )}
          <span className={`text-sm ${down ? "text-red-500" : "text-green-500"}`}>
            Live
          </span>
        </div>
      </div>
      <div className={`bg-${color}-100 p-3 rounded-lg text-${color}-600 text-2xl`}>
        {icon}
      </div>
    </div>
  </div>
);
