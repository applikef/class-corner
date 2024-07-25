import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { CCHome } from './pages/CCHome';
import { CCPlan } from './pages/CCPlan';
import { CCSyllabus } from './pages/CCSyllabus';
import { CCProvider } from './model/CCContext';

import courses from "./assets/courseList.json";

function App() {
  return(
    <CCProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          { courses.map((course: string) => 
            <Route path={`/${course}`} element={<CCHome course={course}/>} />
          )}
          { courses.map((course: string) => 
            <Route path={`/${course}/plan`} element={<CCPlan />} />
          )}
          { courses.map((course: string) => 
            <Route path={`/${course}/syllabus`} element={<CCSyllabus />} />
          )}
        </Routes>
      </BrowserRouter>
    </CCProvider>
  )
}

export default App;
