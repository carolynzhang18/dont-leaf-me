import React, { useState, useEffect } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Webcam from "react-webcam";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GrowthStunters from "./components/growth-stunters";
import WateringSchedule from "./components/watering-schedule";

const App: React.FC = () => {
  const [workTime, setWorkTime] = useState(25); // in minutes
  const [working, setWorking] = useState(true); // true if working
  const [counting, setCounting] = useState(false); // true if in countdown

  return (
    <MemoryRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GrowthStunters />} />
        <Route path="/timer" element={<WateringSchedule workTime={workTime} setWorkTime={setWorkTime} working={working} setWorking={setWorking} counting={counting} setCounting={setCounting}></WateringSchedule>} />
      </Routes>
      <Footer />
    </MemoryRouter>
  );
};

export default App;

{
  /* <Header /> */
}
{
  /* <FaceDetector /> */
}

{
  /* <GrowthStunters /> */
}
{
  /* <WateringSchedule />
      <Footer /> */
}
{
  /* <Webcam width={150} /> */
}
