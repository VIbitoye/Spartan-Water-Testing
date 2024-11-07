// src/layouts/TechnicianLayout.jsx
import React, { useState } from 'react';
import TechnicianSidebar from '../Components/TechnicianNavbar';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import both icons for the toggle button

function TechnicianLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar hidden by default

    // Toggle the sidebar open/close state
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="technician-layout flex min-h-screen w-screen bg-gray-500">
            {/* Sidebar */}
            <TechnicianSidebar isOpen={isSidebarOpen} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Single Toggle Button */}
                <div className="p-4">
                    <button
                        className="p-2 text-gray-700 focus:outline-none flex items-center"
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ? (
                            <FaTimes className="w-3 h-3 mr-2" />
                        ) : (
                            <FaBars className="w-3 h-3 mr-2" />
                        )}
                        <span className='text-base'>{isSidebarOpen ? "CLOSE" : "MENU"}</span>
                    </button>
                </div>

                {/* Overlay for mobile sidebar */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={toggleSidebar}
                    ></div>
                )}

                {/* Main Content */}
                <main className="p-8">{children}</main>
            </div>
        </div>
    );
}

export default TechnicianLayout;
