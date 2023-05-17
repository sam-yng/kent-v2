import React from "react";
import "../css/index.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "../components/Nav";

export const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/about" element={<></>} />
      </Routes>
    </>
  );
};
