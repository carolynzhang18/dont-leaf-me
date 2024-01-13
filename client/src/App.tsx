import React from "react";
import "./App.css";
import styled from "styled-components";
import Webcam from "react-webcam";

const App: React.FC = () => {
  return (
    <>
      Hello World
      <Webcam width={150} />
    </>
  );
};

export default App;
