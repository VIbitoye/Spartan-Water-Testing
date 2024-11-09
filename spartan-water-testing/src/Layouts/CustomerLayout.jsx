// src/layouts/CustomerLayout.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/CustomerNavbar';
import Footer from '../Components/Footer';

// Full-screen Loading Component
const FullScreenLoader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>
);

function CustomerLayout({ children }) {
    const userId = "672e3031c81d69cfdaa88df0";
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cartUpdated, setCartUpdated] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://spartan-water-testing-production.up.railway.app/api/users/${userId}`);
                const data = await response.json();
                if (response.ok) {
                    setUser(data);
                } else {
                    throw new Error(data.message || 'Failed to fetch user data');
                }
            } catch (err) {
                setError(err.message);
                console.error('Error fetching user data:', err);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchUser();
        }
    }, [userId, cartUpdated]);

    const handleCartUpdate = () => setCartUpdated((prev) => !prev);

    if (loading) {
        return <FullScreenLoader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="customer-layout bg-white w-screen min-h-screen items-center justify-center  overflow-x-hidden">
            <Navbar user={user} />
            <main className="w-screen  min-h-screen overflow-x-hidden">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default CustomerLayout;
