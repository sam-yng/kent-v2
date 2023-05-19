import React from "react";
import "../css/index.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<></>} />
      </Routes>
      <Footer />
    </>
  );
};
