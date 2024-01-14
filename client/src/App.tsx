import React from "react";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Webcam from "react-webcam";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TimerPage from "./pages/TimerPage";
import GrowthStunters from "./components/growth-stunters";
import FaceDetector from "./components/FaceDetector";
import WateringSchedule from "./components/growth-stunters/watering-schedule";

const webcam = false;

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timer" element={<TimerPage />} />
      </Routes>
      <Footer />
    </MemoryRouter>
  );
};

export default App;


{/* <Header /> */}
      {/* <FaceDetector /> */}

      {/* <GrowthStunters /> */}
      {/* <WateringSchedule />
      <Footer /> */}
      {/* <Webcam width={150} /> */}