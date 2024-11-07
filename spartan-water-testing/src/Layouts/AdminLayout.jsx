// src/layouts/AdminLayout.jsx
import React, { useState } from 'react';
import AdminNavbar from '../Components/AdminNavbar';

function AdminLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="admin-layout bg-gray-100 min-h-screen flex">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
            >
                <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
                <ul className="space-y-4">
                    <li>
                        <Link to="/admin/dashboard" className="hover:text-blue-300">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/users" className="hover:text-blue-300">User Management</Link>
                    </li>
                    <li>
                        <Link to="/admin/settings" className="hover:text-blue-300">System Settings</Link>
                    </li>
                    <li>
                        <Link to="/admin/logs" className="hover:text-blue-300">Activity Logs</Link>
                    </li>
                </ul>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Navbar with Toggle Button */}
                <AdminNavbar onToggleSidebar={toggleSidebar} />

                {/* Overlay for mobile sidebar */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 md:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}

                {/* Main Content */}
                <main className="p-8">{children}</main>
            </div>
        </div>
    );
}

export default AdminLayout;
