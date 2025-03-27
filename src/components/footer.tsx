import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { baseCompanyNames } from "../devdata/constants/company";
const loghai = require("../devdata/assets/newlogo.png");

const Footer = () => {
  const socialLinks = [
    { icon: faTwitter, href: "#", name: "Twitter" },
    { icon: faYoutube, href: "#", name: "YouTube" },
    { icon: faLinkedin, href: "#", name: "LinkedIn" },
    { icon: faFacebook, href: "#", name: "Facebook" },
  ];

  const websitePages = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/aboutus" },
    { text: "Blogs", href: "/blogs" },
    { text: "Clients", href: "/clients" },
    { text: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="z-50 bottom-0 left-0 w-full relative bg-textDark text-textLight">
      {/* Trusted by Companies Section */}
      <div className="bg-white py-6">
        <p className="text-center text-primary text-sm font-semibold mb-4">
          Trusted by Leading Companies
        </p>
        <div className="flex justify-between items-center flex-wrap w-full px-8">
          {baseCompanyNames.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="h-10 transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
      {/* Footer Main Section */}
      <div className="w-full relative flex justify-center h-[260px]">
        <div className="w-2/3 relative text-white ">
          {/* Left Section - Logo & Contact */}
          <div className="w-full md:w-1/3 flex flex-col items-start space-y-4 text-left absolute">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src={loghai} alt="Logo" className="h-20 w-auto" />
            </a>
            {/* Contact Section */}
            <div>
              <p className="font-semibold text-accent">Contact Us</p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-accent"
                />
                support@synergiclinks.com
              </p>
              <p>📞 +44 79122 04910 (UK)</p>
              <p>📞 +91 95525 55966 (India)</p>
              <p>📞 +65 8376 3397 (Singapore)</p>
            </div>
          </div>

          {/* Center Section - Website Map */}
          <div className="w-full md:w-1/3 text-center mt-6 md:mt-0 absolute">
            <p className="mb-2 font-semibold text-accent">Website Map</p>
            <div className="flex flex-wrap justify-center gap-4">
              {websitePages.map((page, index) => (
                <a
                  key={index}
                  href={page.href}
                  className="text-textLight hover:text-accent transition-colors duration-200"
                >
                  {page.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Social Links */}
          <div className="w-full md:w-1/3 flex flex-col items-end text-right mt-6 md:mt-0 absolute">
            <p className="mb-2 font-semibold text-accent">
              Join the Conversation
            </p>
            <div className="flex justify-end space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-textLight hover:text-accent transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    size="lg"
                    aria-label={link.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-2 flex justify-between px-[260px] ">
        {/* Links aligned to the left */}
        <div className="flex space-x-4">
          <a
            href="/privacy-policy"
            className="text-textLight hover:text-accent transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-textLight hover:text-accent transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="/terms-and-conditions"
            className="text-textLight hover:text-accent transition-colors duration-200"
          >
            Terms and Conditions
          </a>
          <a
            href="/ai-use-policy"
            className="text-textLight hover:text-accent transition-colors duration-200"
          >
            AI Use Policy
          </a>
        </div>

        {/* Copyright text aligned to the right */}
        <div className="text-textLight">
          SynergicLinks &copy; 2025. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
