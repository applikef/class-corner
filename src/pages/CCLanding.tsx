import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./../assets/styles/home.css";
import CCContext, { CCContextType } from "../model/CCContext";

import courses from "./../assets/courseList.json";
import { Course } from "../model/CCModel";

export const CCLanding = () => {
  const {
    setCourse,
  } = useContext(CCContext) as CCContextType;

  const navigate = useNavigate();

  function gotoCourse(courseId:string) {
    setCourse(courseId);
    navigate(`${courseId}`);
  }

  return (
  <div className="app">
    <div className="app-header">
      <h1>רשימת הקורסים</h1>
      <h2>שנת 2024</h2>
      <ul>
        { courses.map((course: Course, i:number) =>
            <li className="app-option-entry" key={i}
              onClick={ () => gotoCourse(`/${course.id}`)}>{course.title}</li>      
        )}
      </ul>
    </div>
  </div>
)}