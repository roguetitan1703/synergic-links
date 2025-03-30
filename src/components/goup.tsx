import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Added FontAwesome import
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Added arrow icon

const Goupyadown = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-10 right-10 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <button
        onClick={scrollToTop}
        className="
          bg-accent
          hover:bg-accent-hover
          text-textDark
          font-bold
          py-3
          px-5
          rounded-full
          shadow-lg
          hover:shadow-xl
          hover:scale-105
          transition
          duration-300
        "
      >
        <FontAwesomeIcon icon={faArrowUp} />{" "}
        {/* Replaced text arrow with FontAwesome icon */}
      </button>
    </div>
  );
};

export default Goupyadown;
