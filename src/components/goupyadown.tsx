import React, { useEffect, useState } from "react";

const Goupyadown = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Check if we're at the bottom of the page
  const checkIfBottom = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (scrollTop >= documentHeight - windowHeight - 400) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfBottom);
    return () => window.removeEventListener("scroll", checkIfBottom);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <button
        onClick={scrollToBottom}
        className={`
          animate-bounce
          hover:animate-wiggle
          bg-blue-500
          hover:bg-blue-600
          text-white
          font-bold
          py-2
          px-4
          rounded-full
          transition-all
          duration-300
          ${isAtBottom ? "translate-x-52 animate-slide" : ""}
        `}
      >
        {isAtBottom ? "Next Page →" : "Go Down ↓"}
      </button>
    </div>
  );
};

export default Goupyadown;
