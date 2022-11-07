import {useState,useEffect} from 'react'
import "../styles/Slider.scss"
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import {BsliderData} from "../components/Bslider-data.js"

const Slider = () => {
    const [currentSlide, setCurrentSlide]=useState(0);
    const slideLength=BsliderData.length;
    const autoScroll=true;
    let slideInterval;
    let intervalTime=5000;
    const nextSlide=()=>{
        setCurrentSlide(currentSlide === slideLength-1 ?0:currentSlide+1);
    };
    const prevSlide=()=>{
        setCurrentSlide(currentSlide ===0?slideLength-1:currentSlide-1);
    };
    function auto(){
        slideInterval=setInterval(nextSlide,intervalTime);
    }
    // slideLength= 1 2 3
    // currentSlide= 0 1 2
    useEffect(()=>{
        setCurrentSlide(0)
    },[])
    useEffect(()=>{
        if(autoScroll){
            auto();
        }
        return ()=> clearInterval(slideInterval);
    },[currentSlide])
  return (
    <div className="slider">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>
        {BsliderData.map((slide,index)=>{
            return(
                <div className={index===currentSlide ? "slide current":"slide"}key={index}>
                    {index===currentSlide && (
                        <div>
                        <img src={slide.image} alt="slide"></img>
                        <div className="content">  
                        <h1>{slide.heading}</h1>
                        <h2>{slide.desc}</h2>
                        <hr></hr>

                        </div>
                       
                        </div>
                         
                    )}
                    
                </div>
            )
        })}


    </div>
   
    
  )
 
}

export default Slider
