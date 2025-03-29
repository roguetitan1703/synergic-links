import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import exp from "constants";
import React from "react";

const CursorGlow = () => {
  return (
    <div className="z-9999">
      <MouseTrail
        // strokeColor={"#FF8541"}
        strokeColor={"#FFD700"} // Deep Gold
        // lag={0.85}
        // lineDuration={1000}
        lineWidthStart={10}
      />
    </div>
  );
};

export default CursorGlow;
