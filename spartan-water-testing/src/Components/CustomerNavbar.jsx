import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaUser, FaCog, FaSignOutAlt, FaTimes, FaTrashAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';
import profilePic from '../assets/default_pfp.png';

function CustomerNavbar(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);    
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [itemToDelete, setItemToDelete] = useState(null); // Track which item to delete

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const cartRef = useRef(null);
    const dropdownRef = useRef(null);


    const cartItems = props.user?.cart || [];
    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
    const totalCost = cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0).toFixed(2);

    // Opening modal to confirm deletion of an item
    const openDeleteModal = (item) => {
        setItemToDelete(item);
        setIsModalOpen(true);
    };

    // Closing the modal without deleting
    const closeDeleteModal = () => {
        setItemToDelete(null);
        setIsModalOpen(false);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isCartOpen && cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
            if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCartOpen, isDropdownOpen]);


    // Confirm deletion and call the API to remove the item
    const confirmDeleteItem = async () => {
        if (itemToDelete) {
            try {
                const response = await fetch(`https://spartan-water-testing-production.up.railway.app/api/users/cart/${props.user.id}/${itemToDelete.kitId}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Failed to remove item from cart');
                }

                // Refresh the cart after deletion
                props.handleCartUpdate();
                closeDeleteModal();
            } catch (error) {
                console.error("Error removing item from cart:", error);
                alert("Failed to remove item from cart. Please try again.");
            }
        }
    };

    return (
        <div className="w-full bg-indigo-600 text-white shadow-md">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4 md:px-6">
                
                {/* Logo Section */}
                <Link to="/" className="flex items-center space-x-2 md:space-x-3">
                    <img src={logo} alt="Spartan Logo" className="w-8 h-8 md:w-10 md:h-10" />
                    <span className="text-white tracking-wide sm:hidden md:text-xs">SPARTAN LABORATORIES</span>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center space-x-12 2xl:space-x-16 font-medium text-xs md:text-xs 2xl:text-base">
                    <Link to="/home" className="relative text-white font-light hover:font-semibold transition duration-300 transform hover:scale-105 hover:text-gray-100">Home</Link>
                    <Link to="/shop" className="relative text-white font-light hover:font-semibold transition duration-300 transform hover:scale-105 hover:text-gray-100">Shop</Link>
                    <Link to="/orders" className="relative text-white font-light hover:font-semibold transition duration-300 transform hover:scale-105 hover:text-gray-100">Orders</Link>
                    <Link to="/contact" className="relative text-white font-light hover:font-semibold transition duration-300 transform hover:scale-105 hover:text-gray-100">Contact Us</Link>
                </nav>

                {/* Cart and Profile Section */}
                <div className="flex items-center space-x-6 md:space-x-8 ">
                    {/* Cart Icon with Badge */}
                    <div className="relative group" ref={cartRef}>
                        <FaShoppingCart onClick={toggleCart} className="cursor-pointer w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white transition duration-300" />
                        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">{totalItems}</span>   
                        {/* Cart Dropdown */}
                        {isCartOpen && (
                            <div className="absolute md:right-0 -right-[4.5rem] mt-2 w-[18rem] bg-white rounded-lg shadow-lg z-50 text-black">
                                <div className="p-4 border-b border-gray-300">
                                    <h2 className="font-thin text-xs 2xl:text-base">Shopping Cart ({totalItems} items)</h2>
                                </div>
                                <div className="p-5 space-y-2 max-h-60 overflow-y-auto">
                                    {cartItems.length > 0 ? (
                                        cartItems.map((item) => (
                                            <div key={item.kitId} className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 rounded-lg p-3">
                                                <Link to={`/shop/kit/${item.kitId}`} className="flex items-center space-x-2 w-full">
                                                    <img src={item.image || profilePic} alt={item.name} className="w-12 h-12 rounded-md" />
                                                    <div className="text-xs">
                                                        <p className="font-medium">{item.name}</p>
                                                        <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                                                    </div>
                                                </Link>
                                                <button
                                                    className="ml-2 p-1 bg-transparent hover:bg-gray-200 rounded transition duration-300"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        openDeleteModal(item);
                                                    }}
                                                >
                                                    <FaTrashAlt className="text-red-500" />
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center text-gray-500">No items in cart</div>
                                    )}
                                </div>
                                <div className='p-4 text-sm font-medium'>
                                    Total: ${totalCost}
                                </div>
                                <div className="p-4 border-t border-gray-300">
                                    <Link to="/checkout" className="block bg-blue-500 text-center w-full py-2 rounded font-light text-white hover:text-white hover:bg-blue-700 transition duration-300">Checkout</Link>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Profile Picture with Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <img src={props?.user?.avatar || profilePic} alt="Profile" className="w-6 h-6 md:w-8 md:h-8 mb-1 rounded-full cursor-pointer" onClick={toggleDropdown} />
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 2xl:w-48 w-36 bg-white rounded-lg shadow-lg z-50 text-black">
                                <Link to="/settings" className="flex items-center text-black font-thin px-4 py-2 rounded-t-lg hover:text-black hover:bg-gray-300" onClick={() => setIsDropdownOpen(false)}>
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
                    <Link to="/home" className="block text-white font-thin hover:text-white transition duration-300" onClick={toggleMobileMenu}>Home</Link>
                    <Link to="/shop" className="block text-white font-thin hover:text-white transition duration-300" onClick={toggleMobileMenu}>Shop</Link>
                    <Link to="/orders" className="block text-white font-thin hover:text-white transition duration-300" onClick={toggleMobileMenu}>Orders</Link>
                    <Link to="/contact" className="block text-white font-thin hover:text-white transition duration-300" onClick={toggleMobileMenu}>Contact Us</Link>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-3 rounded-lg shadow-lg text-center max-w-xs w-full">
                        <h2 className="text-lg text-black font-semibold mb-4">Confirm Deletion</h2>
                        <p className="text-sm text-gray-600 mb-4">Are you sure you want to remove <span className="font-bold">{itemToDelete.name}</span> from your cart?</p>
                        <div className="flex justify-center space-x-4">
                            <button onClick={confirmDeleteItem} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
                            <button onClick={closeDeleteModal} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CustomerNavbar;
