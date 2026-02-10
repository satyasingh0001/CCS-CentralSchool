import { useState, useEffect } from "react";
import styles from "./HeroSlider.module.css";

import slide1 from "../assets/slider/slide1.jpeg";
import slide2 from "../assets/slider/slide2.jpeg";
import slide3 from "../assets/slider/slide3.jpeg";

function HeroSlider(){

  const slides = [slide1, slide2, slide3];
  const [index,setIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setIndex((prev)=> (prev + 1) % slides.length);
    },4000);

    return ()=> clearInterval(interval);
  },[]);

  return(
    <div className={styles.slider}>
      <img src={slides[index]} />
    </div>
  )
}

export default HeroSlider;
