import React, { useContext } from "react";
import "./../assets/styles/syllabus.css";
import { CCBanner } from "../components/CCBanner";
import CCContext, { CCContextType } from "../model/CCContext";

export const CCSyllabus = () => {
  const {
    course
  } = useContext(CCContext) as CCContextType;

  const settings = require(`./../assets/pageSettings_${course}.json`)["syllabus"];
  
  return(
    <div className="cc-page">
      <CCBanner/>
      <div className="editor-comment">
        תוכן עמוד זה מגיע מקובץ HTML שייכתב ע"י המורה
      </div>
      <iframe title="syllabus content" className="cc-syllabus-content"
          src={`${window.location.origin}/${settings.content}`}/>
    </div>
  )
}