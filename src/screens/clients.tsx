import React from "react";
import { baseCompanyNames } from "../devdata/constants/company";
import {BreadCrumbs}  from "../components";
const   Clients = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <BreadCrumbs/>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1B3A57] to-[#5E3A9A] p-8 md:p-16">
         <div className="container mx-auto px-4">        
          <h1 className="text-5xl md:text-6xl font-bold text-[#FFD700] text-center mb-4 tracking-wide">
            Our Trusted Clients
          </h1>
          <p className="text-[#EAEAEA] text-center text-lg max-w-2xl mx-auto leading-relaxed">
            We're proud to work with organizations that trust us with their most
            critical database needs
          </p>
        </div>
      </div>

      {/* Clients Grid Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {baseCompanyNames.map((company, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-20 object-contain mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#1B3A57] mb-2 tracking-wide">
                  {company.name}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {company.description ||
                    "Trusted partner in database solutions"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-[#121212] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#FFD700] mb-12 tracking-wide">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <p className="text-gray-600 italic mb-4 leading-relaxed">
                  "SynergicLinks has transformed our database infrastructure,
                  delivering exceptional results that exceeded our
                  expectations."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#5E3A9A] rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-[#1B3A57]">John Doe</p>
                    <p className="text-sm text-gray-500">CTO, Example Corp</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
