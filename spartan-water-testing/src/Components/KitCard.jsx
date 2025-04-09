// src/components/KitCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
function KitCard({ kit }) {  // Remove `onCartUpdate` prop
    const userId = "672e3031c81d69cfdaa88df0";

    const { handleCartUpdate } = useContext(UserContext);

    const handleAddToCart = async () => {
        try {
            const response = await fetch(`https://devserver-main--delicate-jalebi-769021.netlify.app/api/users/cart/${userId}/${kit._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity: 1 }), // Pass quantity in the request body
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


    return (
        <div className="kit-card border-2 shadow-lg p-4 rounded-lg hover:shadow-lg transition duration-300 flex flex-col justify-between h-full">
            <Link to={`/shop/kit/${kit._id}`}>
                <img 
                    src={kit.image} 
                    alt={kit.name} 
                    className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-md mb-4" 
                />
            </Link>

            <div className="flex-grow flex flex-col items-center text-center">
                <Link to={`/shop/kit/${kit._id}`} className="text-lg md:text-sm 2xl:text-base text-indigo-600 hover:underline">
                    {kit.name}
                </Link>
                <p className="text-gray-600 mt-2 text-sm md:text-xs flex 2xl:text-xs">
                    {kit.description}
                </p>
                <p className="text-black font-medium mt-2 2xl:text-base md:text-">
                    ${kit.price.toFixed(2)}
                </p>
            </div>

            {/* Add to Cart Button */}
            <button 
                onClick={handleAddToCart}  // Call handleAddToCart on button click
                className="mt-4 w-full bg-indigo-600 text-white px-3 md:px-4 py-2 rounded-lg font-thin hover:bg-indigo-700 transition duration-300 text-sm md:text-base"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default KitCard;
