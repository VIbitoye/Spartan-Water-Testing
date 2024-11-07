import React from 'react'

function CartCard() {
  return (
    <div className="kit-card border p-4 rounded-lg shadow-md">
            <img src={kit.image} alt={kit.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-bold mt-4">{kit.name}</h2>
            <p className="text-gray-600">{kit.description}</p>
            <p className="text-blue-500 font-semibold mt-2">${kit.price.toFixed(2)}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  )
}

export default CartCard