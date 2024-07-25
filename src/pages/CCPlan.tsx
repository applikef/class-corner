import React, { useContext } from "react";
import "./../assets/styles/plan.css";
import { CCBanner } from "../components/CCBanner";
import CCContext, { CCContextType } from "../model/CCContext";

export const CCPlan = () => {
  const {
    course
  } = useContext(CCContext) as CCContextType;

  const settings = require(`./../assets/pageSettings_${course}.json`)["plan"];
  
  return (
  <div className="cc-page">
    <CCBanner/>
    <h1>
      { settings.title }
    </h1>
    { settings.entries.map((entry:any, i:number) =>
      <div className="cc-plan-plan-entry" key={i}>
        <div className="cc-plan-step-title">{entry.title}</div>
        <div>תאריך יעד: {entry.targetDate}</div>
        <div><a href={entry.detailsUrl} target="_blank" rel="noreferrer">משימות</a></div>
      </div>
    )}
    <br></br>
    <div className="editor-comment">
    המשימות מגיעות בקובצי WORD ו-PDF שנמצאים על Google Drive עליהם נעשה share שמאפשר למי שניגש דרך לינק לראות אותם
    </div>
  </div>
)}