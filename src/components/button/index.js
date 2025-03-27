import React from "react";
import "./button.css";
const Button = ({
  text = <p>Get In Touch</p>,
  round = "full",
  pxy = "px-4 py-3",
  bold = "font-bold",
  border = "border-4",
  hovertext = "hover:text-white",
}) => {
  return (
    <button
      className={`relative text-md tracking-wider ${bold} ${pxy} ${border} border-[#FFD700] rounded-${round} shadow-lg text-[#FFD700] transition duration-300 ease-in-out overflow-hidden before:absolute before:top-0 before:left-1/2 before:right-1/2 before:bottom-0 before:bg-[#FFD700] before:opacity-0 before:transition-all before:duration-300 hover:before:left-0 hover:before:right-0 hover:before:opacity-100 active:scale-90 z-50 ${hovertext}`}
    >
      {text}
    </button>
  );
};

export default Button;
