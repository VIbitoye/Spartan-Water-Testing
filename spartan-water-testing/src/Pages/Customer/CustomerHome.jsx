import React from 'react';
import { RiTestTubeLine, RiFlaskLine, RiCustomerService2Line } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { MdWaterDrop, MdOutlinePrecisionManufacturing } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FiThermometer } from "react-icons/fi";
import ATSDR from '../../assets/ATSDR.png';
import CDC from '../../assets/CDC.jpg';
import EPA from '../../assets/EPA.png';
import NSF from '../../assets/NSF.png';
import AWWA from '../../assets/AWWA.png';
import UN from '../../assets/UN.jpg';
import USGS from '../../assets/USGS.jpg';
import waterTest from '../../assets/waterTest.png';
import technician from '../../assets/technician.svg';

function CustomerHome() {
  // Items for landing page
  const items = [
    { icon: <RiTestTubeLine className="text-white text-5xl sm:text-7xl" />, label: "Lab Testing" },
    { icon: <MdWaterDrop className="text-white text-5xl sm:text-7xl" />, label: "Water Analysis" },
    { icon: <GoChecklist className="text-white text-5xl sm:text-7xl" />, label: "Quality Assurance" },
    { icon: <RiFlaskLine className="text-white text-5xl sm:text-7xl" />, label: "Sample Collection" },
    { icon: <AiOutlineSafetyCertificate className="text-white text-5xl sm:text-7xl" />, label: "Certified Quality" },
    { icon: <FiThermometer className="text-white text-5xl sm:text-7xl" />, label: "Temperature Testing" }
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="bg-indigo-600 text-white py-16 rounded-md mx-auto mt-10 max-w-screen-xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Great Quality Testing.</h1>
            <h2 className="text-2xl md:text-4xl font-semibold">Great Quality Speed.</h2>
            <p className="text-sm md:text-base max-w-md text-center md:text-left">
              Order a water testing kit and have your sources analyzed by high-end engineers and analysts. Find out more about our comprehensive testing services.
            </p>
            <button className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-thin hover:bg-gray-200 transition duration-300">
              Buy A Kit
            </button>
          </div>
          
          <div className="w-full md:w-1/2 mt-10 md:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {items.slice(0, 6).map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.icon}
                <p className="text-sm font-medium text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-gray-400 capitalize justify-center my-16 px-4">
        <p className="mb-10 text-center font-thin text-2xl">
          Testing based on research from organizations including
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
          <img className="w-20 h-12 object-contain" src={ATSDR} alt="ATSDR Logo" />
          <img className="w-20 h-12 object-contain" src={AWWA} alt="AWWA Logo" />
          <img className="w-20 h-12 object-contain" src={CDC} alt="CDC Logo" />
          <img className="w-20 h-12 object-contain" src={EPA} alt="EPA Logo" />
          <img className="w-20 h-12 object-contain" src={NSF} alt="NSF Logo" />
          <img className="w-20 h-12 object-contain" src={UN} alt="UN Logo" />
          <img className="w-20 h-12 object-contain" src={USGS} alt="USGS Logo" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-indigo-600 rounded-3xl my-16 p-10 max-w-5xl mx-auto shadow-lg space-y-8 md:space-y-0">
        <div className="flex-1 text-left text-white space-y-4">
          <h2 className="text-3xl font-bold">Our Testing Kits</h2>
          <p className="text-base font-light leading-relaxed">
            Our basic and advanced testing kits provide a variety of services. We include contaminants testing and online reports for varying authorities. Our technicians analyze chemicals, lead, chlorine, minerals, and more.
          </p>
        </div>
        <div className="flex-shrink-0 ml-4">
          <img className="rounded-xl w-full h-60 object-cover" src={waterTest} alt="Worker collecting water sample" />
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20 my-16">
        {/* Basic Kit Card */}
        <div className="w-64 rounded-lg overflow-hidden shadow-xl border-indigo-600 border text-center bg-white">
          <div className="bg-indigo-600 text-white p-6">
            <RiTestTubeLine className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-lg ">Basic Kit</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 text-xs mb-4">This kit is for testing chemicals, lead, and chlorine. You also get an online report.</p>
            <div className="text-center mb-4">
              <p className="text-gray-500 line-through text-sm">$199.99</p>
              <p className="text-xl font-bold text-gray-800">$149.00</p>
            </div>
            <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg font-thin hover:bg-indigo-700 transition duration-300">Add to Cart</button>
          </div>
        </div>

        {/* Advanced Kit Card */}
        <div className="w-64 rounded-lg overflow-hidden shadow-xl border-indigo-600 border text-center bg-white">
          <div className="bg-indigo-600 text-white p-6">
            <RiFlaskLine className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-lg ">Advanced Kit</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 text-xs mb-4">This kit is recommended for those who want an in-depth report with more contaminant testing.</p>
            <div className="text-center mb-4">
              <p className="text-gray-500 line-through text-sm">$299.99</p>
              <p className="text-xl font-bold text-gray-800">$229.99</p>
            </div>
            <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg font-thin hover:bg-indigo-700 transition duration-300">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="text-center my-32 px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Test Your Water.</h2>
          <h3 className="text-2xl font-light text-gray-600 mb-8">Here's Why.</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-20">
            We'd like to think that scientific research is significant. <br />
            How about you?
          </p>

          <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8 ">
          {/* Card 1 - Metals Testing Info */}
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col justify-center shadow-xl border-indigo-600 border text-center bg-white rounded-lg">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Metals in Water</h4>
              <p className="text-xs text-gray-500 mb-4">Testing for 31 Types of Metals and Other Contaminants</p>
              <p className="text-gray-600 text-sm mb-6">
                We test for 31 metals, 12 physical properties, 7 in-organics, pesticides, herbicides, and more. 
                Some of these are aluminum, antimony, arsenic, barium, beryllium, boron, cadmium, calcium, chromium, 
                cobalt, copper, hexavalent chrome, iron, lead, lithium, magnesium, manganese, and molybdenum.
              </p>
            </div>
            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Card 2 - Research Info */}
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col justify-center shadow-xl border-indigo-600 border text-center bg-white rounded-lg">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Research Highlights</h4>
              <p className="text-xs text-gray-500 mb-4">Key Areas of Study and Impact</p>
              <p className="text-gray-600 text-sm mb-6">
                Effects of Lead in Fetal Development <br />
                Lead and Chlorine Deposits in Westchester County <br />
                Concentration of In-Organics in 16 Cities Across America <br />
                Effects of Hexachlorobenzene on Adolescence with Autism <br />
                Alkalinity of Kensico Dam's Water Supply
              </p>
            </div>
            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CustomerHome;
