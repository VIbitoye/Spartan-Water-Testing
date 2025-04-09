// src/context/UserContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const userId = "672e3031c81d69cfdaa88df0";
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cartUpdated, setCartUpdated] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://devserver-main--delicate-jalebi-769021.netlify.app/api/users/${userId}`);
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

    return (
        <UserContext.Provider value={{ user, loading, error, handleCartUpdate }}>
            {children}
        </UserContext.Provider>
    );
};
