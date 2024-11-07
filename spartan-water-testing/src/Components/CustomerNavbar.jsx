// src/components/CustomerNavbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaUser, FaCog, FaSignOutAlt, FaTimes, FaTrashAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';
import waterKits from '../data/waterKits';
import profilePic from '../assets/default_pfp.png';

function CustomerNavbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);    
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
       <div className="w-screen bg-indigo-600 text-white shadow-md fixed z-50">
    <div className="max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4 md:px-6">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <img src={logo} alt="Spartan Logo" className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-white text-lg md:text-xl tracking-wide">SPARTAN LABS</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-medium 2xl:text-sm text-xs">
            <Link to="/customer/dashboard" className="text-white font-thin hover:text-white transition duration-300">Home</Link>
            <Link to="/customer/shop" className="text-white font-thin hover:text-white transition duration-300">Shop</Link>
            <Link to="/customer/orders" className="text-white font-thin hover:text-white transition duration-300">Orders</Link>
            <Link to="/customer/contact" className="text-white font-thin hover:text-white transition duration-300">Contact Us</Link>
        </nav>

        {/* Cart and Profile Section */}
        <div className="flex items-center space-x-6 md:space-x-8 ">
            {/* Cart Icon with Badge */}
            <div className="relative group">
                <FaShoppingCart 
                    onClick={toggleCart} 
                    className="cursor-pointer w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white transition duration-300" 
                />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">{waterKits.length}</span>

                {/* Cart Dropdown */}
                {isCartOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 text-black">
                        <div className="p-4 border-b border-gray-300">
                            <h2 className="font-thin text-lg">Shopping Cart</h2>
                        </div>
                        <div className="p-5 space-y-4 max-h-60 overflow-y-auto">
                            {waterKits.map((kit) => (
                                <div key={kit.id} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <img src={kit.image} alt={kit.name} className="w-6 h-6 rounded-full" />
                                        <div className="text-sm">
                                            <p className="font-medium">{kit.name}</p>
                                            <p className="text-xs font-bold text-gray-500">$ {kit.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <button className="bg-white hover:text-red-500 hover:bg-gray-200 text-red-500 border border-gray-200 rounded">
                                        <FaTrashAlt className="text-red-700" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-gray-300">
                            <Link 
                                to="/checkout" 
                                className="block bg-blue-500 text-center w-full py-2 rounded font-light text-white hover:text-white hover:bg-blue-700 transition duration-300"
                            >
                                Checkout
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Profile Picture with Dropdown */}
            <div className="relative">
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-6 h-6 md:w-8 md:h-8 mb-1 rounded-full cursor-pointer"
                    onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 2xl:w-48 w-36 bg-white rounded-lg shadow-lg z-50 text-black">
                        <Link to="/customer/profile" className="flex items-center text-black font-thin px-4 py-2 rounded-t-lg hover:text-black hover:bg-gray-300" onClick={() => setIsDropdownOpen(false)}>
                            <FaUser className="mr-3" /> Profile
                        </Link>
                        <Link to="/customer/settings" className="flex items-center text-black font-thin px-4 py-2 hover:text-black hover:bg-gray-300" onClick={() => setIsDropdownOpen(false)}>
                            <FaCog className="mr-3" /> Settings
                        </Link>
                        <Link to="/logout" className="flex items-center text-black font-thin px-4 py-2 hover:text-black hover:bg-gray-300 rounded-b-lg" onClick={() => setIsDropdownOpen(false)}>
                            <FaSignOutAlt className="mr-3" /> Log Out
                        </Link>
                    </div>
                )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                {isMobileMenuOpen ? (
                    <FaTimes className="w-6 h-6 text-white cursor-pointer" onClick={toggleMobileMenu} />
                ) : (
                    <FaBars className="w-6 h-6 text-white cursor-pointer" onClick={toggleMobileMenu} />
                )}
            </div>
        </div>
    </div>

    {/* Mobile Navigation Links */}
    {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-700 text-white py-4 px-6 space-y-4 shadow-lg">
            <Link to="/customer/dashboard" className="block text-white font-thin hover:text-white transition duration-300" onClick={toggleMobileMenu}>
                Home
            </Link>
            <Link to="/customer/shop" className="block text-white font-thin hover:text-white transition duration-300" onClick={toggleMobileMenu}>
                Shop
            </Link>
            <Link to="/customer/orders" className="block text-white font-thin hover:text-white transition duration-300" onClick={toggleMobileMenu}>
                Orders
            </Link>
            <Link to="/customer/contact" className="block text-white font-thin hover:text-white transition duration-300" onClick={toggleMobileMenu}>
                Contact Us
            </Link>
        </div>
    )}
</div>

    );
}

export default CustomerNavbar;
