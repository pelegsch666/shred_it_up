import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import StyledFonts from './components/styles/fonts/StyledFonts';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <StyledFonts />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);



