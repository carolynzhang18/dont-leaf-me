import React from "react";
import "./App.css";
import styled from "styled-components";
import Webcam from "react-webcam";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <>
      Hello World
      <Webcam width={150} />
      <Footer/>
    </>
  );
};

export default App;
