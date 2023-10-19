import "./WorkCard.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="in1" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-detail">
      <p>
        {props.text}
      </p>
      <div className="pro-btns">
          <NavLink to={props.view} className="btn-work">View</NavLink>
         <NavLink to="url.com" className="btn-work">Source</NavLink>
      </div>
    </div>
  </div>
  );
};

export default WorkCard;
