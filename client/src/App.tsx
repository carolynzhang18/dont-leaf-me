import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Webcam from "react-webcam";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GrowthStunters from "./components/growth-stunters";
import WateringSchedule from "./components/watering-schedule";

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GrowthStunters />} />
        <Route path="/timer" element={<WateringSchedule />} />
      </Routes>
      <Footer />
    </MemoryRouter>
  );
};

export default App;
