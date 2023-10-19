import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimage2 from '../Components/Heroimage2';
import { AboutContent } from '../Components/AboutContent';
export const About = () => {
  return (
    <div>
       <Navbar/>
       <Heroimage2 heading="ABOUT." text="Im a friendly Front-End Developer" />
       <AboutContent/>
      <Footer/>
    </div>
  )
}
export default About;