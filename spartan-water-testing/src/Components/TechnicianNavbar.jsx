// src/components/TechnicianSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaTasks, FaFileAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'; // Import icons

function TechnicianSidebar({ isOpen }) {
    return (
        <aside
            className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-6 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out z-50`}
        >
            {/* Branding / Logo */}
            <div className="flex items-center space-x-2 mb-8">
                <FaUserCircle className="text-blue-500 w-8 h-8" />
                <h2 className="text-lg font-semibold tracking-wide">Victor Ibitoye</h2>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4">
                <li>
                    <Link to="/technician/dashboard" className="flex items-center space-x-3 hover:text-blue-400">
                        <FaTachometerAlt className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-medium">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/technician/assignments" className="flex items-center space-x-3 hover:text-blue-400">
                        <FaTasks className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-medium">Assignments</span>
                    </Link>
                </li>
                <li>
                    <Link to="/technician/reports" className="flex items-center space-x-3 hover:text-blue-400">
                        <FaFileAlt className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-medium">Reports</span>
                    </Link>
                </li>
            </ul>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6"></div>

            {/* Log Out Link */}
            <ul>
                <li>
                    <Link to="/logout" className="flex items-center space-x-3 text-gray-400 hover:text-red-500">
                        <FaSignOutAlt className="w-5 h-5" />
                        <span className="text-sm font-medium">Log Out</span>
                    </Link> 
                </li>
            </ul>
        </aside>
    );
}

export default TechnicianSidebar;
