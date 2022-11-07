import React from "react";

import "../styles/About.css";
import Footer from "../components/FooterI"
import Slider from "../components/Slick/ReactCardSlider"
import SliderB from "./BSlider.js"
function About() {
  return (
    <div className="about">
      <h1>Accreditions at our Partner Anthem Biosciences</h1>
      <div className="slid"><Slider/></div>
      <div className="aboutBottom">
        
       <SliderB/>
       

        
      </div>
      <Footer/>
    </div>
    
  );
}

export default About;
