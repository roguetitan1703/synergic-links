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
      <ServicesCarousel services={services} />

      <Process />
      <Heroien />
      <CoStar />
    </>
  );
};

export default Home;
