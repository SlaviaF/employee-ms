import React from 'react';
import { FaCalendarAlt, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUsers, FaBuilding } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const navClass = ({ isActive }) =>
    `${isActive ? 'bg-blue-700' : 'hover:bg-blue-900'} flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors`;

const AdminSidebar = () => {
    return (
        <div className="flex flex-col h-screen w-64 bg-blue-950 text-white p-6 shadow-lg">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-center tracking-wide">
                    People IT
                </h3>
            </div>
            <div className="flex flex-col space-y-3">
                <NavLink
                    to="/admin-dashboard"
                    className={navClass}
                    end
                >
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink
                    to="/employees"
                    className={navClass}
                >
                    <FaUsers />
                    <span>Employee</span>
                </NavLink>
                <NavLink
                    to="/admin-dashboard/departments"
                    className={navClass}
                >
                    <FaBuilding />
                    <span>Department</span>
                </NavLink>
                <NavLink
                    to="/leaves"
                    className={navClass}
                >
                    <FaCalendarAlt />
                    <span>Leave</span>
                </NavLink>
                <NavLink
                    to="/salaries"
                    className={navClass}
                >
                    <FaMoneyBillWave />
                    <span>Salary</span>
                </NavLink>
                <NavLink
                    to="/settings"
                    className={navClass}
                >
                    <FaCogs />
                    <span>Settings</span>
                </NavLink>
            </div>
        </div>
    );
};

export default AdminSidebar;