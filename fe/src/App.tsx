import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Timer } from './Pages/Timer';
import { Home } from './Pages/Home';


function App() {
  return (<BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="timer" element={<Timer />} />
            </Routes>
          </BrowserRouter>);
}

export default App;
