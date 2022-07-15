import React from "react";
import './Stars.css'
import { useState } from "react";
import star from '../../../img/Rating_Star.png';
import { useDispatch } from "react-redux";
const StarComponent = (props) => {
    let dispatch = useDispatch()
    const handleChange = (changeEvent) =>{
        dispatch(props.func(Number(changeEvent.target.title)));
        console.log(changeEvent.target.title);
    }
    return (
        <fieldset className="rate">
            <input type="radio" id="rating10" name="rating" value="5" /><label htmlFor="rating10" title="5" onClick={handleChange}></label>
            <input type="radio" id="rating9" name="rating" value="4.5" /><label className="half" htmlFor="rating9" title="4.5" onClick={handleChange}></label>
            <input type="radio" id="rating8" name="rating" value="4" /><label htmlFor="rating8" title="4" onClick={handleChange}></label>
            <input type="radio" id="rating7" name="rating" value="3.5" /><label className="half" htmlFor="rating7" title="3.5" onClick={handleChange}></label>
            <input type="radio" id="rating6" name="rating" value="3" /><label htmlFor="rating6" title="3" onClick={handleChange}></label>
            <input type="radio" id="rating5" name="rating" value="2.5" /><label className="half" htmlFor="rating5" title="2.5" onClick={handleChange}></label>
            <input type="radio" id="rating4" name="rating" value="2" /><label htmlFor="rating4" title="2" onClick={handleChange}></label>
            <input type="radio" id="rating3" name="rating" value="1.5" /><label className="half" htmlFor="rating3" title="1.5" onClick={handleChange}></label>
            <input type="radio" id="rating2" name="rating" value="1" /><label htmlFor="rating2" title="1" onClick={handleChange}></label>
            <input type="radio" id="rating1" name="rating" value="0.5" /><label className="half" htmlFor="rating1" title="0.5" onClick={handleChange}></label>
        </fieldset>
    )
}
export default StarComponent;