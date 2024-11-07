// src/components/KitCard.jsx
import React from 'react';

function KitCard({ kit }) {
    return (
        <div className="kit-card border border-indigo-600 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src={kit.image} alt={kit.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold text-indigo-600 mt-4">{kit.name}</h2>
            <p className="text-gray-600 mt-2 text-sm">{kit.description}</p>
            <p className="text-indigo-500 font-semibold mt-2">${kit.price.toFixed(2)}</p>
            <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-thin hover:bg-indigo-700 transition duration-300">
                Add to Cart
            </button>
        </div>
    );
}

export default KitCard;
