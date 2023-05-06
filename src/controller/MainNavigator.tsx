import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/home/Home";
import { Footer } from "../view/footer/Footer";
import { Header } from "../view/header/Header";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/header" element={<Header />} /> */}
        <Route path="footer" element={<Footer />} />
      </Routes>
    </div>
  );
}
export default MainNavigator;
