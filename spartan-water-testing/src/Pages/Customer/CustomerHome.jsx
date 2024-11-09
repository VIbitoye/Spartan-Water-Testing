// src/pages/CustomerHome.jsx
import React from 'react';
import { RiTestTubeLine, RiFlaskLine } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { MdWaterDrop } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FiThermometer, FiTarget } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi"; // New icon for Technicians
import { BiSupport } from "react-icons/bi"; // New icon for Support/Customer Service
import ATSDR from '../../assets/ATSDR.png';
import CDC from '../../assets/CDC.jpg';
import EPA from '../../assets/EPA.png';
import NSF from '../../assets/NSF.png';
import AWWA from '../../assets/AWWA.png';
import UN from '../../assets/UN.jpg';
import USGS from '../../assets/USGS.jpg';
import waterTest from '../../assets/waterTest.png';
import technician from '../../assets/technician.svg';
import { Link } from 'react-router-dom';

function CustomerHome() {
  const items = [
    { icon: <RiTestTubeLine className="text-white text-4xl md:text-5xl lg:text-7xl" />, label: "Lab Testing" },
    { icon: <MdWaterDrop className="text-white text-4xl md:text-5xl lg:text-7xl" />, label: "Water Analysis" },
    { icon: <GoChecklist className="text-white text-4xl md:text-5xl lg:text-7xl" />, label: "Quality Assurance" },
    { icon: <RiFlaskLine className="text-white text-4xl md:text-5xl lg:text-7xl" />, label: "Sample Collection" },
    { icon: <AiOutlineSafetyCertificate className="text-white text-4xl md:text-5xl lg:text-7xl" />, label: "Certified Quality" },
    { icon: <FiThermometer className="text-white text-4xl md:text-5xl lg:text-7xl" />, label: "Temperature Testing" }
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-t from-indigo-300 to-pink-100">

      {/* Hero Section */}
      <div className="relative bg-indigo-500 2xl:my-5 md:my-10 text-white py-6 sm:py-8 md:py-16 rounded-3xl mx-auto max-w-screen-xl px-4 sm:px-6 flex flex-col md:flex-row items-center overflow-hidden shadow-xl animate-fadeIn">
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-20 rounded-3xl pointer-events-none" />
        <div className="relative flex flex-col items-center md:items-start md:w-1/2 space-y-3 sm:space-y-4 z-10 text-center mx-10 md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Quality Testing.</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Quality Speed.</h2>
          <p className="text-xs sm:text-sm md:text-base max-w-md">
            Order a water testing kit and have your sources analyzed by high-end engineers and analysts. Find out more about our comprehensive testing services.
          </p>
          <button
            onClick={scrollToPricing}
            className="px-4 sm:px-6 py-1.5 sm:py-2 md:px-8 md:py-3 bg-gray-100 text-indigo-600 text-xs sm:text-sm md:text-lg rounded-lg font-semibold transition-transform transform hover:scale-105 hover:bg-gray-200 hover:shadow-lg duration-300"
          >
            Buy A Kit
          </button> 
        </div>
        <div className="relative mt-4 md:mt-0 md:w-1/2 z-10">
          <img src={waterTest} alt="Technician conducting water test" className="rounded-xl shadow-lg object-cover w-full h-44 sm:h-48 md:h-64 lg:h-72" />
        </div>
      </div>

      {/* Our Testing Kits Section */}
      <div className="flex flex-col md:flex-row items-center bg-indigo-500 rounded-3xl my-8 sm:my-10 md:my-24 p-4 sm:p-6 md:p-10 max-w-6xl mx-auto shadow-lg space-y-6 md:space-y-0 md:space-x-10 animate-fadeIn">
        <div className="flex-1 text-center md:text-left text-white space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Testing Kits</h2>
          <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed">
            Our basic and advanced testing kits provide a variety of services. We include contaminants testing and online reports for varying authorities. Our technicians analyze chemicals, lead, chlorine, minerals, and more.
          </p>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-white/30 backdrop-blur-md rounded-lg p-3 sm:p-4 shadow-lg border border-white/10">
              {item.icon}
              <p className="text-xs sm:text-sm font-medium text-center mt-1 sm:mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Principles Section */}
      <div className="flex flex-col items-center justify-center my-8 sm:my-10 md:my-16 animate-fadeIn">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">We value our customers.</h2>
        <p className="text-gray-600 mt-3 sm:mt-4 mb-8 sm:mb-10 text-center text-xs sm:text-sm md:text-base">
          We believe that your satisfaction is number one. <br />
          That's why we focus on these three principles.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-6 space-y-4 sm:space-y-6 md:space-y-0 max-w-4xl">
          {/* Technicians */}
          <div className="flex flex-col items-center p-4 sm:p-6 shadow-lg border-gray-300 border text-center bg-white/70 backdrop-blur-md rounded-lg border border-white/20 w-full max-w-xs">
            <HiOutlineUserGroup className="text-4xl sm:text-5xl md:text-6xl text-indigo-500 my-3 sm:my-4" />
            <h3 className="text-black text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">Technicians</h3>
            <p className="text-xs sm:text-sm text-black">Our skilled technicians ensure the highest level of quality and safety in every test we conduct.</p>
          </div>

          {/* Accuracy */}
          <div className="flex flex-col items-center p-4 sm:p-6 shadow-lg border-gray-300 border text-center bg-white/70 backdrop-blur-md rounded-lg border border-white/20 w-full max-w-xs">
            <FiTarget className="text-4xl sm:text-5xl md:text-6xl text-indigo-500 my-3 sm:my-4" />
            <h3 className="text-black text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">Accuracy</h3>
            <p className="text-xs sm:text-sm text-black">We use precise and advanced methodologies to deliver accurate test results every time.</p>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col items-center p-4 sm:p-6 shadow-lg border-gray-300 border text-center bg-white/70 backdrop-blur-md rounded-lg border border-white/20 w-full max-w-xs">
            <BiSupport className="text-4xl sm:text-5xl md:text-6xl text-indigo-600 my-3 sm:my-4" />
            <h3 className="text-black text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">Customer Service</h3>
            <p className="text-xs sm:text-sm text-black">Our support team is dedicated to providing a seamless experience for every customer.</p>
          </div>
        </div>
      </div>

      {/* Research Partners Section */}
      <div className="flex flex-col items-center text-gray-800 capitalize justify-center my-20 px-4 animate-fadeIn">
        <p className="mb-8 text-center font-normal text-lg sm:text-2xl">Testing based on research from organizations including</p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7 gap-x-16">
          <img className="w-16 sm:w-20 h-20 sm:h-12 object-contain" src={ATSDR} alt="ATSDR Logo" />
          <img className="w-16 sm:w-20 h-20 sm:h-12 object-contain" src={AWWA} alt="AWWA Logo" />
          <img className="w-16 sm:w-20 h-20 sm:h-12 object-contain" src={CDC} alt="CDC Logo" />
          <img className="w-16 sm:w-20 h-20 sm:h-12 object-contain" src={EPA} alt="EPA Logo" />
          <img className="w-16 sm:w-20 h-20 sm:h-12 object-contain" src={NSF} alt="NSF Logo" />
          <img className="w-16 sm:w-20 h-20 sm:h-12 object-contain" src={UN} alt="UN Logo" />
          <img className="w-16 sm:w-20 h-20 sm:h-12 object-contain" src={USGS} alt="USGS Logo" />
        </div>
      </div>

      {/* Pricing Cards Section */}
      <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 my-3">Here are our starter kits.</h2>
      <div id="pricing-section" className="flex flex-col items-center space-y-6 my-10 md:my-16 animate-fadeIn">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Basic Kit Card */}
          <div className="w-full max-w-xs rounded-lg overflow-hidden shadow-lg border-gray-300 border text-center bg-white">
            <div className="bg-indigo-500 text-white p-6">
              <RiTestTubeLine className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-lg font-semibold">Basic Kit</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-xs mb-4">
                This kit is for testing chemicals, lead, and chlorine. You also get an online report.
              </p>
              <div className="text-center mb-4">
                <p className="text-gray-500 line-through text-sm">$199.99</p>
                <p className="text-xl font-bold text-gray-800">$149.00</p>
              </div>
              <Link to="/shop/kit/672d7ba0c81d69cfdaa0f512" className="px-4 py-2 bg-indigo-500 hover:text-white text-white rounded-lg font-thin hover:bg-indigo-700 transition duration-300">
                View
              </Link>
            </div>
          </div>

          {/* Advanced Kit Card */}
          <div className="w-full max-w-xs rounded-lg overflow-hidden shadow-lg border-gray-300 border text-center bg-white">
            <div className="bg-indigo-500 text-white p-6">
              <RiFlaskLine className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-lg font-semibold">Advanced Kit</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-xs mb-4">
                This kit is recommended for those who want an in-depth report with more contaminant testing.
              </p>
              <div className="text-center mb-4">
                <p className="text-gray-500 line-through text-sm">$299.99</p>
                <p className="text-xl font-bold text-gray-800">$229.99</p>
              </div>
              <Link to="/shop/kit/672d7ba0c81d69cfdaa0f513" className="px-4 py-2 bg-indigo-500 text-white hover:text-white rounded-lg font-thin hover:bg-indigo-700 transition duration-300">
                View
              </Link>
            </div>
          </div>
        </div>

        {/* See More Kits Link */}
        <Link to="/shop" className="mt-10 text-indigo-600 hover:text-indigo-700 hover:underline text-lg cursor-pointer transition duration-300 transform hover:scale-105">
          View more kits
        </Link>
      </div>



      {/* Informative Cards Section */}
      <div className="text-center my-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Test Your Water.</h2>
        <h3 className="text-lg md:text-2xl font-light text-gray-800 mb-8">Here's Why.</h3>
        <p className="text-gray-800 text-base sm:text-lg max-w-xl mx-auto mb-10">
          We'd like to think that scientific research is significant. <br />
          How about you?
        </p>
        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-6 md:space-y-0 md:space-x-6">
          {/* Metals in Water Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col justify-center border-gray-300 border text-center">
            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Metals in Water</h4>
            <p className="text-xs text-gray-500 mb-4">Testing for 31 Types of Metals and Other Contaminants</p>
            <p className="text-gray-600 text-sm mb-6">
              We test for 31 metals, 12 physical properties, 7 in-organics, pesticides, herbicides, and more.
            </p>
            <button className="mt-4 px-4 py-2 bg-indigo-500 hover:text-white text-white rounded-lg font-thin hover:bg-indigo-700 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Research Highlights Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col justify-center border-gray-300 border text-center">
            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Research Highlights</h4>
            <p className="text-xs text-gray-500 mb-4">Key Areas of Study and Impact</p>
            <p className="text-gray-600 text-sm mb-6">
              Effects of Lead in Fetal Development, Lead and Chlorine Deposits, and more.
            </p>
            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg font-thin hover:bg-indigo-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHome;
