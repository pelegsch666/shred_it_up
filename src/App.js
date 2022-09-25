import Sweeping from './components/Sweeping';
import Alternate from './components/Alternate';
import Legato from './components/Legato';
import Timer from './components/Timer';
import styled, {createGlobalStyle,css} from 'styled-components';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
html{
  height: fit-content;
}
body{
  font-family: 'Gemini Moon';
  background: linear-gradient(to right, #8e0e00, #1f1c18);;
  height: fit-content;
  margin: 0;
  color: #555;
}

`
const sharedStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box;
`
const StyledFormWrapper = styled.div`
display: flex;
justify-content: center;

height: 100vh;
padding: 0 20px;
`
const StyledHeader = styled.h1`
display: flex;
justify-content: center;
font-family: 'FLAMES';
font-size: 60px;
`




function App() {
  
  
  return (
    <>
    <GlobalStyle/>
    
    <StyledHeader>Save my BPM</StyledHeader>
    <Navbar/>
    
    <StyledFormWrapper>
    <Routes>
    <Route path='/' element={<Sweeping />}/>
    <Route path='/alternate' element={<Alternate />}/>
    <Route path='/legato' element={<Legato />} />
    </Routes>
    

    </StyledFormWrapper>
    </>
    
    
  );
}

export default App;
