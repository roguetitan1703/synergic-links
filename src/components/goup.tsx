import React, { useEffect, useState } from "react";

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
          bg-[#FFD700]
          hover:bg-[#ffdf4d]
          text-[#121212]
          font-bold
          py-3
          px-6
          rounded-full
          shadow-lg
          hover:shadow-xl
          transition
          duration-300
        "
      >
        ↑
      </button>
    </div>
  );
};

export default Goupyadown;
