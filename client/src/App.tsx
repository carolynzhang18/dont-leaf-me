import React from "react";
import "./App.css";
import Webcam from "react-webcam";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GrowthStunters from "./components/growth-stunters";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <GrowthStunters />
      <Footer />
      <Webcam width={150} />
    </>
  );
};

export default App;
