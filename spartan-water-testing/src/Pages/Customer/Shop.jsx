import React, { useState, useEffect } from 'react';
import KitCard from '../../Components/KitCard';

function Shop() {
    const [waterKits, setWaterKits] = useState([]); // State to store kits from API
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All Kits');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const itemsPerPage = 6;

    // Fetch water kits from the backend API
    useEffect(() => {
        const fetchWaterKits = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/api/kits');
                if (!response.ok) {
                    throw new Error('Failed to fetch water kits');
                }
                const data = await response.json();
                setWaterKits(data);
            } catch (error) {
                console.error('Error fetching water kits:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWaterKits();
    }, []); // Empty dependency array so it runs only on mount

    // Filtered kits based on search term and selected category
    const filteredKits = waterKits
        .filter(kit => kit.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(kit => category === 'All Kits' || kit.category === category);

    // Calculate total pages and slice the kits for pagination
    const totalPages = Math.ceil(filteredKits.length / itemsPerPage);
    const paginatedKits = filteredKits.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Update page
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    // Reset to the first page whenever searchTerm or category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, category]);

    return (
        <div className="max-w-screen-lg p-12 text-black mx-auto g-gradient-to-t from-indigo-600 to-pink-100">
            <h1 className="md:text-base 2xl:text-3xl font-medium text-gray-800 mb-2 text-left">Shop</h1>
            
            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 md:mb-8 space-y-4 md:space-y-0">
                <input
                    type="text"
                    placeholder="Search kits..."
                    className="p-2 border border-gray-300 rounded-lg w-11/12 md:w-[18rem] text-black focus:outline-none bg-gray-200 focus:border-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="p-2 border border-gray-300 rounded-lg w-full md:w-1/4 text-black focus:outline-none bg-gray-200 focus:border-indigo-500"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>All Kits</option>
                    <option>Basic Kits</option>
                    <option>Advanced Kits</option>
                    <option>Professional Kits</option>
                </select>
            </div>

            {/* Loading Indicator */}
            {loading ? (
                <div className="flex justify-center items-center my-12">
                    <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    {/* Display Kits */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {paginatedKits.map((kit) => (
                            <KitCard key={kit._id} kit={kit} /> // Use `_id` if it's from MongoDB
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-8 space-x-1 sm:space-x-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    className={`px-2 py-1 md:px-3 md:py-1 rounded-lg text-sm md:text-base ${
                                        currentPage === index + 1
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Shop;
