import React from 'react'
import logo from '../assets/logo.png'
function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
<div className="bg-indigo-600 text-white hover:text-white ">
    <div 
        onClick={scrollToTop} 
        className="bg-indigo-700 cursor-pointer flex items-center justify-center w-full h-6 md:h-10 text-xs 2xl:text-base">
    
        Back to Top
    </div>
  <div className="container mx-auto flex flex-col md:flex-row justify-center items-center 2xl:space-x-56 md:space-x-40 space-y-6 md:space-y-0 text-center md:text-left">
    {/* Logo Section */}
    <div className="flex flex-col items-center">
      <img src={logo} alt="Spartan Logo" className="h-40 w-40 mb-2" /> {/* Replace with your logo path */}
    </div>

    {/* Links Section */}
    <div className="flex flex-col md:flex-row md:space-x-12">
      {/* About Column */}
      <div>
        <h3 className="text-md font-bold mb-2">About</h3>
        <ul className="space-y-1 text-sm font-thin">
          <li><a href="#careers" className="hover:underline font-thin text-white hover:text-white">Careers</a></li>
          <li><a href="#privacy" className="hover:underline font-thin text-white hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Support Column */}
      <div>
        <h3 className="text-md font-bold mb-2">Support</h3>
        <ul className="space-y-1 text-sm font-thin">
          <li><a href="#contact" className="hover:underline font-thin text-white hover:text-white">Contact Us</a></li>
          <li><a href="#portal" className="hover:underline font-thin text-white hover:text-white">Customer Portal</a></li>
        </ul>
      </div>

      {/* Social Column */}
      <div>
        <h3 className="text-md font-bold mb-2">Social</h3>
        <ul className="space-y-1 text-sm font-thin">
          <li><a href="#linkedin" className="hover:underline font-thin text-white hover:text-white">LinkedIn</a></li>
          <li><a href="#instagram" className="hover:underline font-thin text-white hover:text-white">Instagram</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center text-sm font-thin mt-6">
    Victor Ibitoye © 2024
  </div>
</div>

  )
}

export default Footer