import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CCContext, { CCContextType } from "../model/CCContext";

export const CCBanner = () => {
  const navigate = useNavigate();
  const {
    course
  } = useContext(CCContext) as CCContextType;

  return (
    <div>
      <img src="./../resources/icons/home128.png" className="menu-icon" alt="home" 
        onClick={ () => navigate(`/${course}`)} />
      
      <hr></hr>
    </div>
  )

}