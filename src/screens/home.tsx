import React from "react";
import {
  Hero,
  Heroien,
  CoStar,
  ServicesCarousel,
  Process,
} from "../components";
import services from "../devdata/constants/services";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="">
        <ServicesCarousel services={services} />
      </div>
      <Process />
      <Heroien />
      <CoStar />
    </>
  );
};

export default Home;
