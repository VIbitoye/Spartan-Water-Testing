// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerLayout from './Layouts/CustomerLayout';
import TechnicianLayout from './Layouts/TechnicianLayout';
import AdminLayout from './Layouts/AdminLayout';

import CustomerHome from './Pages/Customer/CustomerHome';
import TechnicianDashboard from './Pages/Technician/TechnicianHome';
import AdminDashboard from './Pages/Admin/AdminHome';

function App() {
    return (
        <Router>
            <Routes>
                {/* Customer Routes */}
                <Route
                    path="/"
                    element={
                        <CustomerLayout>
                            <CustomerHome />
                        </CustomerLayout>
                    }
                />

                <Route
                    path="/customer/dashboard"
                    element={
                        <CustomerLayout>
                            <CustomerHome />
                        </CustomerLayout>
                    }
                />

                {/* Technician Routes */}
                <Route
                    path="/technician/dashboard"
                    element={
                        <TechnicianLayout>
                            <TechnicianDashboard />
                        </TechnicianLayout>
                    }
                />

                {/* Admin Routes */}
                <Route
                    path="/admin/dashboard"
                    element={
                        <AdminLayout>
                            <AdminDashboard />
                        </AdminLayout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
