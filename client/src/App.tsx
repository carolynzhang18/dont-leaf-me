import React from "react";
import "./App.css";
import styled from "styled-components";
import Webcam from "react-webcam";

const App: React.FC = () => {
  return (<AppContainer className="App">
      Hello World
      <Webcam width={150} />
    </AppContainer>);
};

const AppContainer = styled.div`
  color: white;
  text-align: center;
`;

export default App;
