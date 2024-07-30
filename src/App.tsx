import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { CCHome } from './pages/CCHome';
import { CCPlan } from './templates/CCPlan';
import { CCSyllabus } from './templates/CCSyllabus';
import { CCProvider } from './model/CCContext';

import courses from "./assets/courseList.json";
import { CCLanding } from './pages/CCLanding';
import { Course } from './model/CCModel';

function App() {
  return(
    <CCProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={`/`} element={<CCLanding />} />
          { courses.map((course: Course, i) => 
            <Route path={`/${course.id}`} element={<CCHome course={course.id} key={`course_${i}`}/>} />
          )}
          { courses.map((course: Course, i) => 
            <Route path={`/${course.id}/plan`} element={<CCPlan />} key={`plan_${i}`} />
          )}
          { courses.map((course: Course, i) => 
            <Route path={`/${course.id}/syllabus`} element={<CCSyllabus key={`syllabus_${i}`} />} />
          )}
        </Routes>
      </BrowserRouter>
    </CCProvider>
  )
}

export default App;
