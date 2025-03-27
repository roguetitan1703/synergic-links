import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, TestA, TestO, Design, GetinTouch, Aboutus } from "./screens";

export const Naves = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/contact" element={<GetinTouch />} />
      <Route path="/consultation" element={<GetinTouch active="services" />} />
      <Route path="/partner" element={<GetinTouch active="detailed" />} />

      <Route path="/testa" element={<TestA />} />
      <Route path="/testo" element={<TestO />} />
      <Route path="/design" element={<Design />} />
    </Routes>
  );
};
