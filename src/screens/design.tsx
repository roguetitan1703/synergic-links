import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faSearch,
  faCog,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const Design = () => {
  return (
    <div className="bg-[#121212] text-[#EAEAEA] min-h-screen font-sans">
      {/* Navigation Bar */}
      <nav className="bg-[#1B3A57] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-[#FFD700] font-bold text-xl">
            Synergy Links
          </a>
          <div className="space-x-4">
            <a
              href="#"
              className="hover:text-[#FFD700] transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-[#FFD700] transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-[#FFD700] transition-colors duration-200"
            >
              Contact
            </a>
            <button className="bg-[#FFD700] hover:bg-[#ffdf4d] text-black font-semibold py-2 px-4 rounded-md transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        {/* Typography Examples */}
        <section className="mb-8">
          <h1 className="text-6xl font-bold mb-2 text-[#FFD700]">
            H1 Heading - Main Title
          </h1>
          <h2 className="text-4xl font-bold mb-2">
            H2 Heading - Section Title
          </h2>
          <p className="text-lg leading-relaxed">
            Body Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        {/* Buttons */}
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Buttons</h2>
          <div className="space-x-4 mb-4">
            <button className="bg-[#FFD700] hover:bg-[#ffdf4d] text-black font-semibold py-2 px-4 rounded-md transition-colors duration-200">
              Primary Button
            </button>
            <button className="bg-[#5E3A9A] hover:bg-[#7144b2] text-white py-2 px-4 rounded-md">
              Secondary Button
            </button>
          </div>
        </section>

        {/* Card Example */}
        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">Service Card</h2>
          <div className="bg-[#1B3A57] rounded-md p-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2 text-[#FFD700]">
              Database Security
            </h3>
            <p className="text-white">
              Your data, fortified with industry-leading encryption.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Design;
