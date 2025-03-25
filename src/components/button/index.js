import React from "react";
import "./button.css";
const Button = () => {
  return (
    <button className="relative text-lg tracking-wider uppercase font-bold px-8 py-3 border-4 border-[#ff0072] rounded-full shadow-lg text-[#ff0072] transition duration-300 ease-in-out overflow-hidden before:absolute before:top-0 before:left-1/2 before:right-1/2 before:bottom-0 before:bg-[#ff0072] before:opacity-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:right-0 hover:before:opacity-100 active:scale-90">
      Get In Touch
    </button>
  );
};

export default Button;
