import React from "react";
import "./../assets/styles/syllabus.css";
import { CCBanner } from "../components/CCBanner";

export const CCSyllabus = () => {
  const settings = require("./../assets/pageSettings.json")["syllabus"];

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