// src/pages/Customer/KitDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import waterKits from '../data/waterKits';

function KitDetail() {
    const { kitId } = useParams();
    const kit = waterKits.find((kit) => kit.id === parseInt(kitId, 10));
    const [modalOpen, setModalOpen] = useState(false); // Modal state

    if (!kit) {
        return <p className="text-center text-gray-600 py-20">Kit not found.</p>;
    }

    // Toggle modal visibility
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="max-w-screen-lg mx-auto py-8 px-4 sm:px-6 md:px-4">
            <Link to="/shop" className="text-indigo-600 font-font-thin hover:underline mb-4 inline-block text-sm md:text-base">
                ← Back to Shop
            </Link>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Left Column - Image with click to open modal */}
                <div className="md:w-1/2 flex items-center justify-center">
                    <img 
                        src={kit.image} 
                        alt={kit.name} 
                        onClick={openModal} // Open modal on click
                        className="w-full h-auto object-cover rounded-lg shadow-lg max-w-xs md:max-w-sm lg:max-w-md cursor-pointer hover:opacity-90 transition" 
                    />
                </div>

                {/* Right Column - Product Info */}
                <div className="md:w-1/2 space-y-4 text-gray-700">
                    <h1 className="text-2xl md:text-base font-bold text-gray-900">{kit.name}</h1>
                    <p className="text-base md:text-sm lg:text-base leading-relaxed">{kit.detailedDescription}</p>
                    <p className="md:text-base 2xl:text-xl font-semibold text-indigo-600">${kit.price.toFixed(2)} <span className="text-gray-500 2xl:text-base md:text-xs font-thin">+ shipping</span></p>
                    <div className='text-green-500 font-font-thin text-sm ml-1'>In Stock</div>

                    {/* Quantity Selector */}
                    <div className="flex items-center mt-4">
                        <label htmlFor="quantity" className="mr-2 text-sm font-semibold">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" className="border-2 border-gray-500 bg-white rounded w-12 text-xs items-center justify-center flex text-center"/>
                    </div>  

                    {/* Add to Cart and Wishlist Buttons */}
                    <div className="flex gap-2 mt-4">
                        <button className="w-full md:w-1/3 bg-indigo-600 text-white py-2 rounded-lg font-thin  2xl:text-base md:text-xs hover:bg-indigo-700 transition duration-300">
                            Add to Cart
                        </button>
                        <button className="w-full md:w-1/3 bg-gray-200 text-gray-700 py-2 rounded-lg 2xl:text-base md:text-xs font-semibold hover:bg-gray-300 transition duration-300">
                            Add to Wishlist
                        </button>
                    </div>

                    <p className="text-sm text-gray-500 mt-2">Estimated delivery within 5-7 business days. Free returns within 30 days.</p>
                    
                    {/* Specifications Section */}
                    <div className="mt-8">
                        <h3 className="text-lg font-bold text-gray-800">Specifications</h3>
                        <table className="w-full mt-2 text-gray-700 text-sm">
                            <tbody>
                                {kit.specifications.map((spec, index) => (
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
                          src={kit.image} 
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

            {/* Steps Section */}
            <div className="mt-12">
                <h3 className="text-lg font-bold text-gray-800">How to Use This Kit</h3>
                <ul className="list-decimal list-inside text-gray-600 space-y-2 text-sm mt-2">
                    {kit.steps && kit.steps.map((step, index) => (
                        <li key={index} className="ml-1">{step}</li>
                    ))}
                </ul>
            </div>

            {/* Reviews Section */}
            <div className="mt-12">
                <h3 className="md:text-base 2xl:text-xl font-bold text-gray-800 mb-4">Customer Reviews</h3>
                <p className="text-gray-600 mb-4">Average Rating: 4.5/5 ({kit.reviews.length} reviews)</p>
                {kit.reviews.length > 0 ? (
                    <div className="space-y-4">
                        {kit.reviews.map((review, index) => (
                            <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
                                <div className="flex items-center space-x-2">
                                    <p className="text-yellow-500 text-sm">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                                    <span className="text-gray-600 text-sm">{review.rating} out of 5 stars</span>
                                </div>
                                <p className="text-gray-700 mt-2 text-sm">{review.text}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 text-sm">No reviews yet. Be the first to review this product!</p>
                )}
            </div>

            {/* Related Products Section */}
            <div className="mt-12">
                <h3 className="md:text-base 2xl:text-xl font-bold text-gray-800 mb-4">Related Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {waterKits
                        .filter((relatedKit) => relatedKit.category === kit.category && relatedKit.id !== kit.id)
                        .slice(0, 3)
                        .map((relatedKit) => (
                            <Link to={`/shop/kit/${relatedKit.id}`} key={relatedKit.id} className="kit-card border-2 shadow-lg p-4 rounded-lg hover:shadow-lg  hover:bg-gray-100 duration-300 flex flex-col justify-between h-full transition">
                                <img src={relatedKit.image} alt={relatedKit.name} className="w-full h-32 object-cover rounded-md mb-2"/>
                                <h4 className="font-bold text-gray-700 text-sm">{relatedKit.name}</h4>
                                <p className="text-indigo-600 text-sm">${relatedKit.price.toFixed(2)}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default KitDetail;
