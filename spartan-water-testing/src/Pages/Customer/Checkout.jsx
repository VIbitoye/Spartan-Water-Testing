// src/pages/CheckoutPage.jsx
import React from 'react';
import cartItems from '../../data/cartData';

function CheckoutPage() {
    // Calculate subtotal by multiplying each item's price with its quantity
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const estimatedTax = (0.07 * calculateSubtotal()).toFixed(2); // Example tax rate of 7%
    const total = (parseFloat(calculateSubtotal()) + parseFloat(estimatedTax)).toFixed(2);

    return (
        <div className="min-h-screen flex justify-center items-start bg-gray-50 pt-4 pb-8 sm:pt-6 sm:pb-10 text-black">
            <div className="max-w-md w-full bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 mt-4 md:mt-8">
                <h1 className="text-center text-base sm:text-lg md:text-xl font-medium mb-4">Checkout</h1>

                {/* Cart Summary */}
                <div className="space-y-4 mb-5 border-b pb-4">
                    <h2 className="text-sm font-semibold mb-2">Cart Summary</h2>
                    <p className="text-xs sm:text-sm font-medium text-gray-600">{cartItems.reduce((quantity, item) => quantity + item.quantity, 0)} Items</p>
                    <div className="space-y-2">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between p-2 bg-white rounded-lg shadow-sm">
                                {/* Item Image and Details */}
                                <div className="flex items-center space-x-3">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                                    <div>
                                        <h3 className="text-xs font-medium">{item.name}</h3>
                                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                {/* Item Price */}
                                <div className="text-gray-700 font-semibold text-xs">
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="space-y-2 mb-5 border-b pb-4">
                    <h2 className="text-sm font-semibold mb-2">Order Summary</h2>
                    <div className="text-gray-700 text-xs space-y-1">
                        <p>Subtotal: ${calculateSubtotal()}</p>
                        <p>Estimated Tax: ${estimatedTax}</p>
                        <p className="font-semibold text-sm">Total: ${total}</p>
                    </div>
                </div>

                {/* Shipping and Payment Info */}
                <div>
                    <h2 className="text-sm font-semibold mb-3">Shipping & Payment</h2>
                    <form className="space-y-4">
                        {/* Shipping Address */}
                        <div>
                            <label className="block font-medium text-xs mb-1">Shipping Address</label>
                            <input
                                type="text"
                                className="w-full p-2 sm:p-2.5 border border-gray-300 bg-white rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="1234 Main St, City, Country"
                            />
                        </div>

                        {/* Payment Method */}
                        <div>
                            <label className="block font-medium text-xs mb-1">Payment Method</label>
                            <select className="w-full p-2 sm:p-2.5 border border-gray-300 bg-white rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option>Credit Card</option>
                                <option>PayPal</option>
                                <option>Bank Transfer</option>
                            </select>
                        </div>

                        {/* Place Order Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-medium py-2 text-xs rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
