// src/pages/Customer/KitDetail.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';
import profilePic from '../assets/default_pfp.png';

function KitDetail() {
    const { kitId } = useParams();
    const [kit, setKit] = useState(null);
    const [allKits, setAllKits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1); // Track quantity input
    const userId = "672e3031c81d69cfdaa88df0";

    const { handleCartUpdate } = useContext(UserContext);

    const handleAddToCart = async () => {
        try {
            const response = await fetch(`https://devserver-main--delicate-jalebi-769021.netlify.app/api/users/cart/${userId}/${kit._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity }), // Pass quantity in the request body
            });

            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }

            handleCartUpdate();
            window.location.reload();
        } catch (error) {
            console.error("Error adding to cart:", error);
            alert("Failed to add item to cart. Please try again.");
        }
    };

    useEffect(() => {
        const fetchKitDetails = async () => {
            try {
                const response = await fetch(`https://devserver-main--delicate-jalebi-769021.netlify.app/api/kits/${kitId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch kit details');
                }
                const data = await response.json();
                setKit(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchAllKits = async () => {
            try {
                const response = await fetch(`https://devserver-main--delicate-jalebi-769021.netlify.app/api/kits`);
                if (!response.ok) {
                    throw new Error('Failed to fetch all kits');
                }
                const data = await response.json();
                setAllKits(data);
            } catch (error) {
                console.error('Error fetching all kits:', error.message);
            }
        };

        fetchKitDetails();
        fetchAllKits();
    }, [kitId]);

    if (loading) return <p className="text-center text-gray-600 py-20">Loading...</p>;
    if (error) return <p className="text-center text-gray-600 py-20">Error: {error}</p>;
    if (!kit) return <p className="text-center text-gray-600 py-20">Kit not found.</p>;

    const relatedKits = allKits.filter((relatedKit) => relatedKit.category === kit.category && relatedKit.id !== kit.id);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="max-w-screen-lg mx-auto py-8 px-4 sm:px-6 md:px-4">
            <Link to="/shop" className="text-indigo-600 font-thin hover:underline mb-4 inline-block text-sm md:text-base">
                ← Back to Shop
            </Link>

            {/* Product Details and Quantity Input */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="md:w-1/2 flex items-center justify-center">
                    <img 
                        src={kit.image || profilePic} 
                        alt={kit.name} 
                        onClick={openModal} 
                        className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer" 
                    />
                </div>

                <div className="md:w-1/2 space-y-4 text-gray-700">
                    <h1 className="text-2xl font-bold text-gray-900">{kit.name}</h1>
                    <p className="text-base leading-relaxed">{kit.detailedDescription}</p>
                    <p className="font-semibold text-indigo-00">${kit.price.toFixed(2)} <span className="text-gray-500 font-thin">+ shipping</span></p>
                    <div className='text-green-500 font-thin text-sm'>In Stock</div>

                    {/* Quantity Selector */}
                    <div className="flex items-center mt-4">
                        <label htmlFor="quantity" className="mr-2 text-sm font-semibold">Quantity:</label>
                        <input 
                            type="number" 
                            id="quantity" 
                            name="quantity" 
                            min="1" 
                            max="10" 
                            value={quantity} 
                            onChange={(e) => setQuantity(Number(e.target.value))} 
                            className="border-2 border-gray-500 bg-white rounded w-12 text-center"
                        />
                    </div>  

                    {/* Add to Cart Button */}
                    <div className="flex gap-2 mt-4">
                        <button onClick={handleAddToCart} className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                            Add to Cart
                        </button>
                        <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300">
                            Add to Wishlist
                        </button>
                    </div>

                    <p className="text-sm text-gray-500 mt-2">Estimated delivery within 5-7 business days. Free returns within 30 days.</p>
                    
                    {/* Specifications Section */}
                    <div className="mt-8">
                        <h3 className="text-lg font-bold text-gray-800">Specifications</h3>
                        <table className="w-full mt-2 text-gray-700 text-sm">
                            <tbody>
                                {kit.specifications && kit.specifications.map((spec, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-2 font-semibold">{spec.label}</td>
                                        <td className="py-2">{spec.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Image Zoom Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
                    <div className="relative">
                        <img 
                            src={kit.image || profilePic} 
                            alt={`${kit.name} zoomed`} 
                            className="w-[70vw] max-w-2xl h-1/2 rounded-lg shadow-lg cursor-pointer"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
                        />
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 text-white text-lg font-bold p-1.5 rounded-full hover:bg-gray-800 transition"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            {/* Related Products Section */}
            <div className="mt-12">
                <h3 className="md:text-base 2xl:text-xl font-bold text-gray-800 mb-4">Related Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {relatedKits.length > 0 ? (
                        relatedKits.slice(0, 3).map((relatedKit) => (
                            <Link to={`/shop/kit/${relatedKit._id}`} key={relatedKit.id} className="kit-card border-2 shadow-lg p-4 rounded-lg hover:shadow-lg hover:bg-gray-100 duration-300 flex flex-col justify-between h-full transition">
                                <img src={relatedKit.image || profilePic} alt={relatedKit.name} className="w-full h-32 object-cover rounded-md mb-2" />
                                <h4 className="font-bold text-gray-700 text-sm">{relatedKit.name}</h4>
                                <p className="text-indigo-600 text-sm">${relatedKit.price.toFixed(2)}</p>
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-600 text-sm">No related products available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default KitDetail;
