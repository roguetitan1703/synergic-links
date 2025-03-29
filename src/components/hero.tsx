import React from "react";
import { Link } from "react-router-dom";
import { Buttonnew } from ".";
const heroback = require("../devdata/assets/hbackn.jpg");

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-fadeIn"
        style={{ backgroundImage: `url(${heroback})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 animate-slideUp">
        {/* Optional Tag/Pill */}
        <div className="bg-accent text-darkBg font-bold px-4 py-1 rounded-full text-sm inline-block mb-4">
          Enterprise-Grade Solutions
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-textLight max-w-4xl leading-snug mb-4">
          Empowering Digital Transformation with Expert Database Engineering
        </h1>
        <p className="text-textLight text-base md:text-lg max-w-2xl mb-8">
          Scalable, Secure, and Smart Database Solutions for Your Business
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <Link to="/contact">
            <button className="bg-accent hover:bg-accent-hover text-darkBg font-semibold py-3 px-6 rounded-full focus:outline-none transition duration-300">
              Get Started
            </button>
          </Link>
          <a href="#servicesCarousel">
            <Buttonnew
              text={<p>Explore Services</p>}
              round="full"
              pxy="px-5 py-3"
              bold={"font-semibold"}
              border={"border-2"}
              hovertext={"hover:text-black"}
            />
          </a>
        </div>

        {/* Quick Service Tags */}
        <div className="mt-8 flex flex-wrap justify-center space-x-4 text-sm bg-darkBg/30 py-2 px-4 rounded-xl">
          <span className="text-accent border-l-2 border-accent pl-2">
            Database Dev
          </span>
          <span className="text-accent border-l-2 border-accent pl-2">
            Security & Compliance
          </span>
          <span className="text-accent border-l-2 border-accent pl-2">
            Performance Optimization
          </span>
          <span className="text-accent border-l-2 border-r-2 border-accent px-2">
            Cloud Integrations
          </span>
        </div>
      </div>

      {/* Subtle Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
