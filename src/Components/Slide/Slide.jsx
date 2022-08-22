import React from "react";
import s from './Slide.module.css';
import { useState,useEffect } from "react";
const Slide = () => {
    let [isState, setState] = useState(50);
    let SlideValue = (e) =>{
        setState(e.target.value);
        localStorage.setItem('rangeVolume', e.target.value)
    }
    useEffect(() => {
        let range = localStorage.getItem('rangeVolume');
        range ? setState(isState) : localStorage.setItem('rangeVolume', 50);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    useEffect(() => {
        let range = localStorage.getItem('rangeVolume');
        if (range !== isState)
            setState(range)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isState]);
    return (
        <input type="range" min="1" max="100" onChange={SlideValue} value={isState} className={s.slider}/>
    )
}
export default Slide;