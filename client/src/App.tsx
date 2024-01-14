import React from "react";
import "./App.css";
import styled from "styled-components";
import Webcam from "react-webcam";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GrowthStunters from "./components/growth-stunters";
import FaceDetector from "./components/FaceDetector";
import WateringSchedule from "./components/growth-stunters/watering-schedule";

const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* <FaceDetector /> */}

      <GrowthStunters />
      <WateringSchedule />
      <Footer />
      {/* <Webcam width={150} /> */}
    </>
  );
};

export default App;
