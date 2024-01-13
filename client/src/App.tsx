import React from "react";
import "./App.css";
import styled from "styled-components";

const App: React.FC = () => {
  return <AppContainer className="App">Hello World</AppContainer>;
};

const AppContainer = styled.div`
  color: white;
  text-align: center;
`;

export default App;
