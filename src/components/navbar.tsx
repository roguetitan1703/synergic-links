import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
import { Buttonnew } from ".";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menus = [
    {
      title: "About Us",
      links: [
        { name: "About Us", description: "Who we are", href: "/about" },
        {
          name: "Our Clients",
          description: "Our happy partners",
          href: "/clients",
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          name: "Database Development",
          description: "Custom solutions",
          href: "/services/dev",
        },
        {
          name: "Database Support",
          description: "24/7 assistance",
          href: "/services/support",
        },
        {
          name: "Security & Compliance",
          description: "Stay secure",
          href: "/services/security",
        },
      ],
    },
    {
      title: "Get in Touch",
      links: [
        {
          name: "Contact Us",
          description: "Reach out to us",
          href: "/contact",
        },
        {
          name: "Schedule Consultation",
          description: "Book a free session",
          href: "/consultation",
        },
        {
          name: "Sign Up as Partner",
          description: "Join us",
          href: "/partner",
        },
      ],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !event.target?.closest(".dropdown-trigger")
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {/* NAVBAR */}
      <nav className="bg-gradient-to-r from-primary to-secondary text-textLight py-4 px-6 flex justify-between items-center shadow-md">
        {/* Left: Logo */}
        <div className="text-2xl font-bold">
          <span className="text-accent">Synergic</span>Links
        </div>

        {/* Middle: Navigation */}
        <ul className="flex space-x-6">
          <li className="hover:text-accent cursor-pointer transition duration-300">
            <Link to="/">Home</Link>
          </li>
          {menus.map((menu, index) => (
            <li key={index} className="relative flex items-center">
              <button
                className={`dropdown-trigger flex items-center gap-1 transition duration-300 ${
                  openMenu === index ? "text-accent" : "hover:text-accent"
                }`}
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
              >
                {menu.title}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-sm ml-1 transition-transform duration-300 ${
                    openMenu === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Right: Appointment Button */}
        <Link to="/appointment">
          {/* <button className="bg-accent hover:bg-accent-hover text-darkBg px-4 py-2 rounded-md font-bold transition duration-300">
            Make an Appointment
          </button> */}
          <Buttonnew
            text={<p>Make an Appointment</p>}
            round="lg"
            pxy="px-4 py-1"
          />
        </Link>
      </nav>

      {/* DROPDOWN PANEL - Rendered outside the navbar */}
      {openMenu !== null && (
        <div
          ref={dropdownRef}
          className="dropdown-menu absolute left-0 top-full w-full z-50 bg-gradient-to-r from-primary to-secondary shadow-lg transform origin-top animate-slideDown p-6 border-t border-accent"
        >
          <div className="grid grid-cols-3 gap-6">
            {menus[openMenu].links.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                onClick={() => setOpenMenu(null)}
                className="group flex items-center gap-4 p-3 pl-6 transition duration-300 hover:bg-darkBg hover:scale-105 rounded-md"
              >
                {/* Vertical accent bar */}
                <div className="w-1 bg-accent h-full"></div>
                <div>
                  <h4 className="text-lg font-bold group-hover:text-accent">
                    {link.name}
                  </h4>
                  <p className="text-sm text-textLight  group-hover:opacity-100 transition duration-300">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Slide-down animation keyframes */}
      <style>{`
        @keyframes slideDown {
          0% {
            transform: scaleY(0);
            opacity: 0;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
