import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
import { Buttonnew } from ".";
import {
  faLinkedin,
  faWhatsapp,
  faSlackHash,
  faModx,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const topBarLinks = [
    {
      href: "https://www.linkedin.com/company/synergic-links-1/",
      icon: faLinkedin,
    },
    {
      href: "https://api.whatsapp.com/send?phone=+44%2079122%2004910%20&text=Hellos",
      icon: faWhatsapp,
    },
    ...(process.env.NODE_ENV === "development"
      ? [
          {
            href: "/testa",
            icon: faSlackHash,
          },
          {
            href: "/testo",
            icon: faModx,
          },
        ]
      : []),
  ];

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
          href: "/services/Database-Development",
        },
        {
          name: "Database Support",
          description: "24/7 assistance",
          href: "/services/Database-Support",
        },
        {
          name: "Security & Compliance",
          description: "Stay secure",
          href: "/services/Security-Compliance",
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
      <div className="relative w-full px-4 py-1 z-50 hidden md:flex justify-end items-center space-x-6">
        {/* Left side with opacity 100 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-100 clip-slant"></div>

        {/* Right side with opacity 80 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80 "></div>
        {/* Content inside the bar bg-gradient-to-r from-primary to-secondary*/}
        <div className="relative z-10 text-white ">
          <div className="w-full px-6 py-2 z-50 hidden md:flex justify-end items-center space-x-6">
            {topBarLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-textLight hover:text-accent transition-colors duration-300 group"
              >
                <FontAwesomeIcon icon={link.icon} size="lg" />
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="ml-1 h-4 w-4 opacity-70 transition-transform duration-200 rotate-45 group-hover:rotate-90"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-gradient-to-r from-primary to-secondary text-textLight py-2 px-6 flex justify-between items-center shadow-md">
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
        <Link to="/contact">
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
