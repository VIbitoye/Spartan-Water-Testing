// src/pages/Shop/Shop.jsx
import React from 'react';
import waterKits from '../../data/waterKits';
import KitCard from '../../Components/KitCard';

function Shop() {
    return (
        <div className="shop-container p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterKits.map((kit) => (
                <KitCard key={kit.id} kit={kit} />
            ))}
        </div>
    );
}

export default Shop;
