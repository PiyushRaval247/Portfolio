import "./Heroimage.css";
import Intro from "../assets/im.jpg"
import React from 'react'
import { Link } from "react-router-dom";

export const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img  className="into-img" src={Intro} alt="Intro"/>
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1> React Devloper</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}
export default Heroimage;