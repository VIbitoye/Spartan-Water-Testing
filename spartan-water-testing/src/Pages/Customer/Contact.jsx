// src/pages/ContactPage.jsx
import React, { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, such as sending data to the server
        console.log('Form data submitted:', formData);
        alert('Message sent successfully!');
        // Optionally reset the form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen flex justify-center items-start  bg-gray-50 pt-4 pb-8 sm:pt-6 sm:pb-10 text-black">
            <div className="max-w-md w-full bg-white p-4 sm:p-6 md:p-8 2xl:mt-4 md:-mt-4 rounded-xl shadow-lg border border-gray-100">
                <h1 className="text-center text-base sm:text-lg md:text-xl font-medium mb-4">Contact Us</h1>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Have questions, comments, or feedback? Send us a message and we'll get back to you as soon as possible!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block font-medium text-xs sm:text-sm mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
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
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
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
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                            placeholder="Subject of your message"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block font-medium text-xs sm:text-sm mb-1">Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 md:p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-sm md:text-xs"
                            placeholder="Your message..."
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="block bg-blue-500 text-center w-full py-2 rounded font-light text-white hover:text-white hover:bg-blue-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
