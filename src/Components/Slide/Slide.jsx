import React from "react";
import s from './Slide.module.css';
const Slide = () => {
    return (
        <input type="range" min="1" max="100" className={s.slider} id="myRange" />
    )
}
export default Slide;