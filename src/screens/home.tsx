import React from "react";
import { Hero, Heroien, CoStar, ServicesCarousel } from "../components";
import services from "../devdata/constants/services";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="mt-16">
        <ServicesCarousel services={services} />
      </div>
      <Heroien />
      <CoStar />
    </>
  );
};

export default Home;
