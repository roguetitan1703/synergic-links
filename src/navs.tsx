import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  TestA,
  TestO,
  Design,
  GetinTouch,
  Aboutus,
  ServiceLanding,
  Clients,
} from "./screens";
import { Database, Security, Support } from "./screens/services";
export const Naves = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/contact" element={<GetinTouch />} />
      <Route path="/consultation" element={<GetinTouch active="services" />} />
      <Route path="/partner" element={<GetinTouch active="detailed" />} />
      <Route path="/services" element={<ServiceLanding />} />
      <Route path="/services/Database-Development" element={<Database />} />
      <Route path="/services/Database-Support" element={<Support />} />
      <Route path="/services/Security-Compliance" element={<Security />} />

      <Route path="/testa" element={<TestA />} />
      <Route path="/testo" element={<TestO />} />
      <Route path="/design" element={<Design />} />
    </Routes>
  );
};
