// src/pages/OrdersPage.jsx
import React, { useState } from 'react';
import orders from '../../data/orderData';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaCalendarAlt, FaMoneyBillWave, FaIdBadge, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

function OrdersPage() {
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    const toggleOrderDetails = (orderId) => {
        setExpandedOrderId(orderId === expandedOrderId ? null : orderId);
    };

    return (
        <div className="max-w-screen-lg p-4 sm:p-6 md:p-8 text-black mx-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-4 text-left">Order History</h1>

            {orders.length === 0 ? (
                <p className="text-gray-600 text-sm md:text-base">No order history available.</p>
            ) : (
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full bg-white text-left table-fixed">
                        <thead>
                            <tr className="bg-gray-100 border-b text-gray-800">
                                <th className="py-2 px-3 text-xs sm:text-sm md:text-base font-medium w-1/5">
                                    <div className="flex items-center space-x-1 sm:space-x-2">
                                        <FaIdBadge className="text-gray-500 text-xs sm:text-sm" />
                                        <span>Order ID</span>
                                    </div>
                                </th>
                                <th className="py-2 px-3 text-xs sm:text-sm md:text-base font-medium w-1/5">
                                    <div className="flex items-center space-x-1 sm:space-x-2">
                                        <FaCalendarAlt className="text-gray-500 text-xs sm:text-sm" />
                                        <span>Date</span>
                                    </div>
                                </th>
                                <th className="py-2 px-3 text-xs sm:text-sm md:text-base font-medium w-1/5">Status</th>
                                <th className="py-2 px-3 text-xs sm:text-sm md:text-base font-medium w-1/5">
                                    <div className="flex items-center space-x-1 sm:space-x-2">
                                        <FaMoneyBillWave className="text-gray-500 text-xs sm:text-sm" />
                                        <span>Total</span>
                                    </div>
                                </th>
                                <th className="py-2 px-3 text-xs sm:text-sm md:text-base font-medium w-1/5">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <React.Fragment key={order.id}>
                                    <tr className="border-b hover:bg-gray-50 transition">
                                        <td className="py-2 px-3 text-xs sm:text-sm md:text-base font-medium w-1/5">{order.id}</td>
                                        <td className="py-2 px-3 text-xs sm:text-sm md:text-base font-medium w-1/5">{order.date}</td>
                                        <td className={`py-2 px-3 text-xs sm:text-sm md:text-base font-normal w-1/5 ${
                                            order.status === 'Delivered' ? 'text-green-600' : 
                                            order.status === 'Cancelled' ? 'text-red-500' : 'text-yellow-500'
                                        }`}>
                                            {order.status}
                                        </td>
                                        <td className="py-2 px-3 text-xs sm:text-sm md:text-base font-normal w-1/5">
                                            ${order.total.toFixed(2)}
                                        </td>
                                        <td className="py-2 px-3 w-full">
                                            <button
                                                onClick={() => toggleOrderDetails(order.id)}
                                                className="flex items-center justify-center px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-semibold text-indigo-600 bg-gray-100 rounded-lg transition-transform transform hover:scale-105 hover:bg-indigo-100 hover:shadow-md"
                                            >
                                                {expandedOrderId === order.id ? 'Hide Details' : 'Show Details'}
                                                {expandedOrderId === order.id ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedOrderId === order.id && (
                                        <tr>
                                            <td colSpan="5" className="p-4 bg-gray-100">
                                                <h3 className="text-xs sm:text-sm md:text-base font-medium mb-2 text-black">Order #{order.id}</h3>
                                                <h3 className="text-xs font-medium mb-2 text-gray-700">Customer Information</h3>
                                                <div className="text-xs sm:text-sm md:text-base text-gray-700 mb-4">
                                                    <div className="flex items-center mb-1">
                                                        <FaUser className="mr-2 text-gray-500 text-xs sm:text-sm" />
                                                        <span><strong>Customer:</strong> {order.customerName}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <FaMapMarkerAlt className="mr-2 text-gray-500 text-xs sm:text-sm" />
                                                        <span><strong>Address:</strong> {order.shippingAddress}</span>
                                                    </div>
                                                </div>
                                                <h3 className="text-xs sm:text-sm md:text-base font-medium mb-2 text-gray-700">Items</h3>
                                                <ul className="space-y-1 mx-1">
                                                    {order.items.map((item) => (
                                                        <li key={item.id} className="flex justify-between text-xs sm:text-sm md:text-base border-b py-1">
                                                            <div className="flex items-center space-x-2">
                                                                <Link to={`/shop/kit/${item.id}`} className="text-indigo-600 hover:underline">
                                                                    {item.name}
                                                                </Link>
                                                                <span className="text-gray-500">(x{item.quantity})</span>
                                                            </div>
                                                            <span className="font-normal text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="flex justify-between items-center mt-3">
                                                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                                                        Total items: {order.items.reduce((total, item) => total + item.quantity, 0)}
                                                    </p>
                                                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                                                        Total: <span className="font-bold">${order.total.toFixed(2)}</span>
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default OrdersPage;
