import React, { useState } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FaceDetector from "./components/FaceDetector";
import GrowthStunters from "./components/growth-stunters";
import WateringSchedule from "./components/watering-schedule";

const App: React.FC = () => {
  const [includeFaceDetector, setIncludeFaceDetector] = useState(true);
  setTimeout(() => setIncludeFaceDetector(false), 180000);

  return (
    <MemoryRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GrowthStunters />} />
        <Route path="/timer" element={<WateringSchedule />} />
      </Routes>
      <Footer />
      {includeFaceDetector && <FaceDetector />}
    </MemoryRouter>
  );
};

export default App;
