import React from "react";
import "../css/index.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Faq } from "../pages/Faq";
import { Smsf } from "./Smsf";
import { Services } from "./Services";

export const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<></>} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/smsf" element={<Smsf />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};
