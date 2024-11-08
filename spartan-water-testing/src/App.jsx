// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerLayout from './Layouts/CustomerLayout';
import TechnicianLayout from './Layouts/TechnicianLayout';
import AdminLayout from './Layouts/AdminLayout';
import ScrollToTop from './Components/ScrollToTop';
import CustomerHome from './Pages/Customer/CustomerHome';
import TechnicianDashboard from './Pages/Technician/TechnicianHome';
import AdminDashboard from './Pages/Admin/AdminHome';
import Shop from './Pages/Customer/Shop';
import KitDetail from './Components/KitInfo';
import OrdersPage from './Pages/Customer/Orders';
import CheckoutPage from './Pages/Customer/Checkout';
import Contact from './Pages/Customer/Contact';
import ProfileSettingsPage from './Pages/Customer/Profile';
import { UserProvider } from './Contexts/UserContext';

function App() {
    return (
        <UserProvider> {/* Wrapping everything inside UserProvider */}
            <Router>
                <ScrollToTop />
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
                        path="/home"
                        element={
                            <CustomerLayout>
                                <CustomerHome />
                            </CustomerLayout>
                        }
                    />
                    <Route
                        path="/shop"
                        element={
                            <CustomerLayout>
                                <Shop />
                            </CustomerLayout>
                        }
                    />

                    {/* Route for individual kit details with a dynamic kitId */}
                    <Route
                        path="/shop/kit/:kitId"
                        element={
                            <CustomerLayout>
                                <KitDetail />
                            </CustomerLayout>
                        }
                    />
                    <Route
                        path="/orders"
                        element={
                            <CustomerLayout>
                                <OrdersPage />
                            </CustomerLayout>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <CustomerLayout>
                                <CheckoutPage />
                            </CustomerLayout>
                        }
                    />

                    <Route
                        path="/contact"
                        element={
                            <CustomerLayout>
                                <Contact />
                            </CustomerLayout>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <CustomerLayout>
                                <ProfileSettingsPage />
                            </CustomerLayout>
                        }
                    />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
