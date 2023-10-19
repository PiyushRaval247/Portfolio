import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom';
import Im5 from "../assets/im5.jpg"
import Im4 from "../assets/im4.jpg"
export const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who Am I ?</h1>
            <p>hello guys</p>
            <Link to="/contact" className='btn'>Contact</Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={Im5} className='img' alt='IM5'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={Im4} className='img' alt='IM4'/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default AboutContent;