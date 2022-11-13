import Sweeping from "./components/Sweeping";
import Alternate from "./components/Alternate";
import Legato from "./components/Legato";
import Timer from "./components/Timer";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Welcome from "./components/Welcome";
import StyledFormWrapper from "./components/styles/styled-components/StyledFormWrapper"
import sharedStylesApp from "./components/styles/styled-components/sharedStylesApp";
import StyledHeader from "./components/styles/styled-components/StyledHeader"

const GlobalStyle = createGlobalStyle`
html{
  height: fit-content;
  
}
body{
  font-family: 'Gemini Moon';
  background: linear-gradient(to right, #fffbd5, #b20a2c);
  height: fit-content;
  margin: 0;
  color: #555;
  
 }

button:hover {
  color: whitesmoke;
  transition-duration: 1000ms;
  background-color: #b20a2c;
  border-radius: 70%;
}
li:hover{
  font-size: 50px;
  
}
`;




function App() {
  return (
    <>
      <GlobalStyle />

      <StyledHeader>Shred It up</StyledHeader>
      <Navbar />

      <StyledFormWrapper>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sweeping" element={<Sweeping />} />
          <Route path="/alternate" element={<Alternate />} />
          <Route path="/legato" element={<Legato />} />
        </Routes>
      </StyledFormWrapper>
    </>
  );
}

export default App;
