import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./../assets/styles/home.css";
import CCContext, { CCContextType } from "../model/CCContext";

interface CCHomeProps {
  course: string;
}

export const CCHome = (props: CCHomeProps) => {
  const activeCourse = props.course;

  const settings = require(`./../assets/pageSettings_${activeCourse}.json`);
  const navigate = useNavigate();
  const {
    setCourse,
    setPageId
  } = useContext(CCContext) as CCContextType;

  function gotoTarget(pageId: string) {
    setCourse(activeCourse);
    setPageId(pageId);
    navigate(`./${settings[pageId].template}`);
  }

  return (
  <div className="app">
    <div className="app-header">
      <img src={ settings.image } className="app-logo" alt=""/>
      <h1>{ settings.title }</h1>
      <h2>{ settings.subtitle }</h2>
      <ul>
        { settings.targetPages.map((pageId: string, i:number) =>
            <li className="app-option-entry" key={i}
              onClick={ () => gotoTarget(pageId)}>{ settings[pageId].title }</li>      
        )}
      </ul>
    </div>
    <div className="editor-comment">
      רשימת הכניסות בעמוד זה ותוכן העמודים האחרים מוגדרים בקובץ קונפיגורציה. סוגי הדפים והמבנה שלהם מוגדר מראש ומגדיר את גבולות ההתאמה האישית
    </div>
  </div>
)}