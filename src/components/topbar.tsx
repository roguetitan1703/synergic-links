import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const topBarLinks = [
  {
    href: "https://www.linkedin.com/company/synergic-links-1/",
    icon: faLinkedin,
  },
  {
    href: "https://api.whatsapp.com/send?phone=+44%2079122%2004910%20&text=Hellos",
    icon: faWhatsapp,
  },
];

const TopBar = () => {
  return (
    <div className="w-full bg-gradient-to-l from-primary to-secondary bg-opacity-90 px-6 py-2 z-50 hidden md:flex justify-end items-center space-x-6">
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
  );
};

export default TopBar;
