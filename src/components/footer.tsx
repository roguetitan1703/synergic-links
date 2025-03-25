import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { baseCompanyNames } from "../devdata/constants/company";
const loghai = require("../devdata/assets/logoastheup.png");

const Footer = () => {
  const clientsRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const scrollClients = () => {
      if (clientsRef.current) {
        clientsRef.current.scrollLeft += 0.5;
        if (
          clientsRef.current.scrollLeft >=
          clientsRef.current.scrollWidth / 2
        ) {
          clientsRef.current.scrollLeft = 0;
        }
      }
      animationFrameRef.current = requestAnimationFrame(scrollClients);
    };

    animationFrameRef.current = requestAnimationFrame(scrollClients);

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  const companyNames = [...baseCompanyNames, ...baseCompanyNames];

  const socialLinks = [
    { icon: faTwitter, href: "#", name: "Twitter" },
    { icon: faYoutube, href: "#", name: "YouTube" },
    { icon: faLinkedin, href: "#", name: "LinkedIn" },
    { icon: faFacebook, href: "#", name: "Facebook" },
  ];

  const officeAddresses = [
    // Array for office address data
    {
      title: "UK OFFICE",
      addressLines: [
        "164 Forum House Empire Way",
        "Wembley Park HA9",
        "OHL United Kingdom.",
      ],
      phone: "+44 79122 04910",
      email: "sales@synergiclinks.com",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223793.93149182128!2d-0.3955122061352763!3d51.50872720297123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487613d51fd9b3ef%3A0x630a759cb228db65!2sForum%20House!5e0!3m2!1sen!2sin!4v1742705880027!5m2!1sen!2sin",
    },
    {
      title: "INDIA OFFICE",
      addressLines: [
        "1st Floor, Arya Society",
        "Kishor Suryawanshi Marg",
        "Nashik 422004",
        "Maharashtra India.",
      ],
      phone: "+91 955255966",
      email: "sales@synergiclinks.com",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36190.4532679536!2d73.7640961701465!3d20.024810562107863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0034c13db5%3A0x274894862334ede1!2sKishor%20suryvanshi%20marg%2C%20omkar%20nagar%20nashik!5e0!3m2!1sen!2sin!4v1742706748337!5m2!1sen!2sin",
    },
    {
      title: "SINGAPORE OFFICE",
      addressLines: ["21 Fort Road 439089", "Singapore."],
      phone: "+65 8376 3397",
      email: "sales@synergiclinks.com",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32290.10433047998!2d103.86072964689944!3d1.2843238605852405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1844a254b1d5%3A0x2fff1d1c1c388006!2s21%20Fort%20Rd%2C%20Singapore%20439089!5e0!3m2!1sen!2sin!4v1742706658929!5m2!1sen!2sin",
    },
  ];

  const footerLinks = [
    // Example footer links - update as needed
    { text: "Home", href: "/" },
    { text: "About Us", href: "/aboutus" },
    { text: "Blogs", href: "/blogs" },
    { text: "Clients", href: "/clients" },
    { text: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="relative z-50 bottom-0 left-0 w-full bg-dark-layer-0/65 text-dark-text-secondary font-sans py-12 md:py-16">
      {/* 1. Clients Slideshow Section (unchanged) */}
      <div className="mb-12 overflow-hidden">
        <p className="text-sm text-dark-text-secondary mb-2 text-center">
          Trusted by Leading Companies
        </p>
        <div
          className="whitespace-nowrap py-4 overflow-x-hidden"
          ref={clientsRef}
        >
          {companyNames.map((name, index) => (
            <span
              key={index}
              className="inline-block px-6 text-lg text-dark-text-primary"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="h-px w-full bg-dark-layer-2 mt-4"></div> {/* Divider */}
      </div>
      {/* 2. Office Addresses Section (NEW) */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {officeAddresses.map((office, index) => (
          <div key={index} className="bg-dark-layer-1 rounded-md p-6">
            <div className="relative h-60">
              <iframe
                src={office.mapSrc}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-dark-text-primary mb-2"
              size="lg"
            />
            <h4 className="text-lg font-semibold text-dark-text-primary mb-3">
              {office.title}
            </h4>
            {office.addressLines.map((line, lineIndex) => (
              <p
                key={lineIndex}
                className="text-sm text-dark-text-secondary mb-1"
              >
                {line}
              </p>
            ))}
            <p className="text-sm text-dark-text-secondary mb-1">
              {office.phone}
            </p>
            <p className="text-sm text-dark-text-secondary">{office.email}</p>
          </div>
        ))}
      </div>
      {/* 3. Links & Branding Section (MODIFIED) */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Left - Logo and Name */}
        <div className="flex items-center mb-4 md:mb-0">
          <a
            href="/"
            className="flex items-center font-bold text-lg text-dark-text-primary"
          >
            <img src={loghai} alt="loghai" className="h-8 w-auto mr-2" />
            {/* Synergy Links */} {/* Removed text logo */}
          </a>
        </div>

        {/* Middle - Navigation Links (NEW in this section) */}
        <div className="hidden md:flex space-x-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-dark-text-secondary hover:text-light-base transition-colors duration-200"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Right - Social Links (Moved to the right) */}
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-dark-text-secondary hover:text-light-base transition-colors duration-200"
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
      <div className="h-px w-full bg-dark-layer-2 mt-4"></div> {/* Divider */}
      {/* 4. Copyright Section (unchanged) */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm mt-8">
        {/* Left - Copyright Text */}
        <div className="mb-2 md:mb-0 text-white">
          © {new Date().getFullYear()} Synergy Links. All Rights Reserved.
        </div>

        {/* Right - Privacy & Terms Links */}
        <div className="flex space-x-4">
          <a
            href="/privacy-policy"
            className="hover:text-light-base transition-colors duration-200 text-white"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="hover:text-light-base transition-colors duration-200 text-white"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
