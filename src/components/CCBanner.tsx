import React from "react";
import { useNavigate } from "react-router-dom";

export const CCBanner = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src="./resources/icons/home128.png" className="menu-icon" alt="home" 
        onClick={ () => navigate("/")} />
      
      <hr></hr>
    </div>
  )

}