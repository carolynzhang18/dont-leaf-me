import React from "react";
import "./App.css";
import Webcam from "react-webcam";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GrowthStunters from "./components/growth-stunters";
import FaceDetector from "./components/FaceDetector";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <FaceDetector />
      <GrowthStunters />
      <Footer />
      <Webcam width={150} />
      <Footer/>
    </>
  );
};

export default App;
