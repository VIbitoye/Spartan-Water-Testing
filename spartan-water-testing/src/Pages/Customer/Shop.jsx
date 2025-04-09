import React, { useState, useEffect } from 'react';
import KitCard from '../../Components/KitCard';

function Shop() {
    const [waterKits, setWaterKits] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All Kits');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000); // Default max price
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchWaterKits = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://devserver-main--delicate-jalebi-769021.netlify.app/api/kits');
                if (!response.ok) throw new Error('Failed to fetch water kits');
                const data = await response.json();
                setWaterKits(data);
            } catch (error) {
                console.error('Error fetching water kits:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchWaterKits();
    }, []);

    // Filter and sort kits based on search term, selected category, and price range
    const filteredKits = waterKits
        .filter(kit => kit.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(kit => 
            filter === 'All Kits' || 
            filter === 'Price: Low to High' || 
            filter === 'Price: High to Low' || 
            kit.category === filter
        )
        .filter(kit => kit.price >= minPrice && kit.price <= maxPrice);

    // Sort by price if sorting option is selected
    if (filter === 'Price: Low to High') {
        filteredKits.sort((a, b) => a.price - b.price);
    } else if (filter === 'Price: High to Low') {
        filteredKits.sort((a, b) => b.price - a.price);
    }

    // Calculate total pages and slice the kits for pagination
    const totalPages = Math.ceil(filteredKits.length / itemsPerPage);
    const paginatedKits = filteredKits.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filter, minPrice, maxPrice]);

    return (
        <div className="max-w-screen-lg p-4 sm:p-6 md:p-8 text-black mx-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-4 text-left">Shop</h1>
            
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
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option>All Kits</option>
                    <option>Basic Kits</option>
                    <option>Advanced Kits</option>
                    <option>Professional Kits</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>


            {loading ? (
                <div className="flex justify-center items-center my-12">
                    <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {paginatedKits.map((kit) => (
                            <KitCard key={kit._id} kit={kit} />
                        ))}
                    </div>
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
