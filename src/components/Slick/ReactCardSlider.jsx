import React from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import "./Slider.css";
import CPCSEA from "../../assets/CPCSEA.jpg"
import Aalac from "../../assets/Aalac.png"
import DSIR from "../../assets/DSIR.jpg"
import FDA from "../../assets/fda.png"
import psci from "../../assets/PSCI.png"
import ISO from "../../assets/ISO.png"
import nglp from "../../assets/NGLP.png"
import dtl from "../../assets/DTL.png"
import pmda from "../../assets/pmda.jpg"
import eco from "../../assets/ecovadis.png"
const ReactCardSlider = (props) => {
    const slides=[{image:CPCSEA,title:"CPCSEA Certified",description:""},
    {image:Aalac,title:"AAALAC Accredited",description:""},
    {image:DSIR,title:"DSIR Certified",description:""},
    {image:FDA,title:"FDA Certified",description:""},
    {image:psci,title:"USA PSCI Compliance",description:""},
    {image:ISO,title:"ISO 9001, ISO 14001,ISO 18001 Certified",description:""},
    {image:nglp,title:"Complied with GLP",description:""},
    {image:dtl,title:"Approved as Drug Testing Laboratory",description:""},
    {image:pmda,title:"Certified By Japan's top Pharma Giant",description:""},
    {image:eco,title:"Numero Uno in Business Sustainability",description:""}



];
    const slideLeft=()=>{
        var slider=document.getElementById("slider");
        slider.scrollLeft=slider.scrollLeft-500;
    }
    const slideRight=()=>{
        var slider=document.getElementById("slider");
        slider.scrollLeft=slider.scrollLeft+500;
    }
  return (
    <div id="main-slider-container">
        <AiOutlineArrowLeft size={20} className="arrow prev" onClick={slideLeft}/>
        <div id="slider">
           {  slides.map((slide,index)=>{
                return(
                   <div className="slider-card" key={index}>
                       <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`}}></div>
                        <p className="slider-card-title">{slide.title}</p>
                        <p className="slider-card-description">{slide.description}</p>
                       
                   </div>
                )
             }
             )
            }
        </div>
        <AiOutlineArrowRight size={20} className="arrow next" onClick={slideRight}/>
    </div>
  )
}

export default ReactCardSlider