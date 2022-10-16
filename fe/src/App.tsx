import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Timer } from './Pages/Timer';
import { Home } from './Pages/Home';
import { ProviderWrapper } from './Templates/ProviderWrapper';


function App() {
  return (<ProviderWrapper>
              <Route path="/" element={<Home />} />
              <Route path="timer" element={<Timer />} />
          </ProviderWrapper>);
}

export default App;
