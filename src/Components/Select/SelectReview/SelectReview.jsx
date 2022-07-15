import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import "../Select.css";
const SelectReview = (props) => {
    const [isShown, setIsShown] = useState(false);
    const [Showtext, setShowText] = useState("...");
    const handleClick = (event) => {
        setIsShown((current) => !current);
    };
    const handleClickChange = (changeEvent) => {
        setShowText(changeEvent.target.title);
        debugger
    }
    let arrayItems = props.array.map(el =>
        <label htmlFor={el.consultation_id} key={el.consultation_id}>
          <input type="radio" name="main-categories" title={el.datetime} id={el.consultation_id} value={el.consultation_id} onChange={handleClickChange} />
          {el.datetime}
        </label>)
    return (
        <div id="Select-hide" onClick={handleClick}>
            <div className="Select_content">
                <p>{Showtext}</p>
                <img src={arrow} className={isShown ? "Rotate_img" : ""} alt="" />
            </div>
            {isShown && (
                <div id="Select-menu" >
                    {arrayItems}
                </div>
            )}
        </div>
    );
}
export default SelectReview;