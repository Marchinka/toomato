import React from 'react';
import logo from './logo.svg';
import {  Route } from "react-router-dom";
import { TimerPage } from './Components/Pages/TimerPage';
import { Homepage } from './Components/Pages/Homepage';
import { ProviderWrapper } from './Utils/ProviderWrapper';
import './App.css';

function App() {
  return (<ProviderWrapper>
              <Route path="/" element={<Homepage />} />
              <Route path="timer" element={<TimerPage />} />
          </ProviderWrapper>);
}

export default App;
