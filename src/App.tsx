import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { CCHome } from './pages/CCHome';
import { CCPlan } from './pages/CCPlan';
import { CCSyllabus } from './pages/CCSyllabus';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<CCHome />} />
        <Route path="/plan" element={<CCPlan />} />
        <Route path="/syllabus" element={<CCSyllabus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
