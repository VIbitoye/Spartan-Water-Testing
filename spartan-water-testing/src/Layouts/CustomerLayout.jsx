// src/layouts/CustomerLayout.jsx
import React from 'react';
import Navbar from '../Components/CustomerNavbar';
import Footer from '../Components/Footer';
function CustomerLayout({ children }) {
    return (
        <div className="customer-layout bg-white w-screen min-h-screen">
            <Navbar />
            <main className="p-8 bg-blue-50  overflow-x-hidden min-h-screen">{children}</main>
            <Footer/>
        </div>
    );
}

export default CustomerLayout;
