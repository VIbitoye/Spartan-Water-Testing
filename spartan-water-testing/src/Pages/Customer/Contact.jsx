// src/pages/ContactPage.jsx
import React from 'react';

function ContactPage() {
    return (
        <div className="min-h-screen flex justify-center items-center text-black bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-4 sm:p-6 md:p-8 rounded-xl  border border-gray-100 mt-4 md:mt-8">
                <h1 className="text-center text-lg sm:text-xl md:text-2xl font-medium mb-6">Contact Us</h1>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Have questions, comments, or feedback? Send us a message and we'll get back to you as soon as possible!
                </p>

                <form className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block font-medium text-xs sm:text-sm mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 sm:p-2.5 border border-gray-300 bg-white rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block font-medium text-xs sm:text-sm mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 sm:p-2.5 border border-gray-300 bg-white rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your email address"
                            required
                        />
                    </div>

                    {/* Subject Field */}
                    <div>
                        <label htmlFor="subject" className="block font-medium text-xs sm:text-sm mb-1">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full p-2 sm:p-2.5 border border-gray-300 bg-white rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Subject of your message"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block font-medium text-xs sm:text-sm mb-1">Message</label>
                        <textarea
                            id="message"
                            className="w-full p-2 sm:p-2.5 border border-gray-300 bg-white rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                            placeholder="Your message..."
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 text-xs sm:text-sm rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
