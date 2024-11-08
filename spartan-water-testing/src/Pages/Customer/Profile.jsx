import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext'; // Adjust the path if needed
import pfp from '../../assets/default_pfp.png';

function ProfileSettingsPage() {
    const { user } = useContext(UserContext); // Get user from context

    const [userData, setUserData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        address: {
            street: user?.address?.street || '',
            city: user?.address?.city || '',
            state: user?.address?.state || '',
            zip: user?.address?.zip || '',
        },
        avatar: user?.avatar || pfp, // Use a default profile picture if avatar is undefined
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    // Update userData if user context changes (e.g., fetched asynchronously)
    useEffect(() => {
        if (user) {
            setUserData({
                name: user.name || '',
                email: user.email || '',
                address: {
                    street: user.address?.street || '',
                    city: user.address?.city || '',
                    state: user.address?.state || '',
                    zip: user.address?.zip || '',
                },
                avatar: user.avatar || pfp,
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            address: {
                ...prevData.address,
                [name]: value,
            },
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveChanges = () => {
        console.log('User Data:', userData);
        console.log('Password Data:', passwordData);
        alert('Changes saved successfully!');
    };

    return (
        <div className="min-h-screen flex justify-center items-start bg-gray-50 pt-4 pb-8 sm:pt-6 sm:pb-10 text-black">
            <div className="max-w-md w-full bg-white p-4 sm:p-6 md:p-8 -mt-4 rounded-xl shadow-lg border border-gray-100">
                <h1 className="md:text-sm 2xl:text-xl font-medium text-gray-800 mb-2 text-center">Profile and Settings</h1>
                
                {/* Profile Information */}
                <div className="flex items-center my-6 md:mb-4">
                    <img 
                        src={userData.avatar} 
                        alt="Profile" 
                        className="w-16 h-16 md:w-12 md:h-12 rounded-full border border-gray-200 mr-4"
                    />
                    <div>
                        <h2 className="text-lg md:text-base font-medium text-gray-800">{userData.name}</h2>
                        <p className="text-gray-500 md:text-sm">{userData.email}</p>
                    </div>
                </div>

                {/* Editable User Information Fields */}
                <div className="space-y-4 mb-6 md:mb-4 text-black">
                    <div>
                        <label className="block text-sm md:text-xs font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                        />
                    </div>

                    <div>
                        <label className="block text-sm md:text-xs font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                        />
                    </div>

                    {/* Address Fields */}
                    <div>
                        <label className="block text-sm md:text-xs font-medium text-gray-700 mb-1">Street</label>
                        <input
                            type="text"
                            name="street"
                            value={userData.address.street}
                            onChange={handleAddressChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                        />
                    </div>
                    <div>
                        <label className="block text-sm md:text-xs font-medium text-gray-700 mb-1">City</label>
                        <input
                            type="text"
                            name="city"
                            value={userData.address.city}
                            onChange={handleAddressChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                        />
                    </div>
                    <div>
                        <label className="block text-sm md:text-xs font-medium text-gray-700 mb-1">State</label>
                        <input
                            type="text"
                            name="state"
                            value={userData.address.state}
                            onChange={handleAddressChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                        />
                    </div>
                    <div>
                        <label className="block text-sm md:text-xs font-medium text-gray-700 mb-1">Zip</label>
                        <input
                            type="text"
                            name="zip"
                            value={userData.address.zip}
                            onChange={handleAddressChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                        />
                    </div>
                </div>

                {/* Password Change Section */}
                <h2 className="text-lg md:text-base font-medium text-gray-800 mb-4">Change Password</h2>
                <div className="space-y-4 mb-6 md:mb-4">
                    <div>
                        <label className="block text-sm md:text-xs font-medium text-gray-700 mb-1">Current Password</label>
                        <input
                            type="password"
                            name="currentPassword"
                            value={passwordData.currentPassword}
                            onChange={handlePasswordChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                        />
                    </div>

                    <div>
                        <label className="block text-sm md:text-xs font-medium text-gray-700 mb-1">New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                        />
                    </div>

                    <div>
                        <label className="block text-sm md:text-xs font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                        />
                    </div>
                </div>

                {/* Save Button */}
                <button
                    onClick={handleSaveChanges}
                    className="block bg-blue-500 text-center w-full py-2 rounded font-light text-white hover:text-white hover:bg-blue-700 transition duration-300"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}

export default ProfileSettingsPage;
