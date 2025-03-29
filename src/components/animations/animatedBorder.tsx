import React from "react";

const AnimatedBorderContainer = ({
  children,
  colorgrad = "bg-[conic-gradient(#ffffff_20deg,transparent_120deg)]",
}) => {
  return (
    <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl p-[5px]">
      <div
        className={`animate-rotate absolute inset-0 h-full w-full rounded-full ${colorgrad}`}
      ></div>
      <div
        className={`relative z-20 w-full rounded-[0.60rem] bg-dark-layer-0 opacity-100`}
      >
        {" "}
        {/* Changed background to dark-layer-0 */}
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorderContainer;
