// src/components/AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Menu icon

function AdminNavbar({ onToggleSidebar }) {
    return (
        <header className="w-screen bg-white shadow-md p-4 flex justify-between items-center">
            <div className="flex items-center">
                <button
                    className="md:hidden mr-4 text-gray-700 focus:outline-none"
                    onClick={onToggleSidebar}
                >
                    <FaBars className="w-6 h-6" />
                </button>
                <img src="/path/to/logo.png" alt="Spartan Logo" className="w-8 h-8 mr-2" />
                <span className="text-blue-600 font-bold text-lg">ADMIN DASHBOARD</span>
            </div>
            <Link to="/logout" className="text-gray-700 hover:text-blue-600">Log Out</Link>
        </header>
    );
}

export default AdminNavbar;
