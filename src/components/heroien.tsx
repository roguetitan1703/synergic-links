import React from "react";
import { Buttonnew } from ".";
import { Link } from "react-router-dom";
const Heroien = () => {
  return (
    <div className="fixed -right-[80px] top-2/3 -translate-y-[80px] z-50 hover:-right-[70px] transition-all duration-300 ease-in-out animate-bounceHorizontal">
      <Link to={"/consultation"}>
        <Buttonnew
          text={<p>Book Consultation</p>}
          pxy="px-6 py-3 "
          bold="font-semibold"
          round=""
          hovertext="hover:text-black -rotate-90 "
        />
      </Link>
    </div>
  );
};

export default Heroien;
