import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  Route } from "react-router-dom";
import { Timer } from './Components/Pages/Timer';
import { Home } from './Components/Pages/Home';
import { ProviderWrapper } from './Components/Templates/ProviderWrapper';


function App() {
  return (<ProviderWrapper>
              <Route path="/" element={<Home />} />
              <Route path="timer" element={<Timer />} />
          </ProviderWrapper>);
}

export default App;
