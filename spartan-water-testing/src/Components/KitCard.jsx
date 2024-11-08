// src/components/KitCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function KitCard({ kit }) {
    return (
        <div className="kit-card border-2 shadow-lg p-4 rounded-lg hover:shadow-lg transition duration-300 flex flex-col justify-between h-full">
            {/* Image */}
            <Link to={`/shop/kit/${kit.id}`}>
                <img 
                    src={kit.image} 
                    alt={kit.name} 
                    className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-md mb-4" 
                />
            </Link>

            {/* Kit Content */}
            <div className="flex-grow flex flex-col items-center text-center">
                <Link to={`/shop/kit/${kit.id}`} className="text-lg md:text-base 2xl:text-2xl text-indigo-600 hover:underline">
                    {kit.name}
                </Link>
                <p className="text-gray-600 mt-2 text-sm md:text-xs 2xl:text-lg">
                    {kit.description}
                </p>
                <p className="text-black font-semibold mt-2 2xl:text-base md:text-">
                    ${kit.price.toFixed(2)}
                </p>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-4 w-full bg-indigo-600 text-white px-3 md:px-4 py-2 rounded-lg font-thin hover:bg-indigo-700 transition duration-300 text-sm md:text-base">
                Add to Cart
            </button>
        </div>
    );
}

export default KitCard;
