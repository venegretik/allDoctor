import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import { reviewCosultationAction } from "../../../base/Reducers/reviewsReducer";
import "../Select.css";
const SelectReview = (props) => {
    let dispatch = useDispatch();
    const [isShown, setIsShown] = useState(false);
    const config = useSelector((state) => state.config.config);
    const [Showtext, setShowText] = useState("Выберите текст");
    const handleClick = (event) => {
        setIsShown((current) => !current);
    };
    const handleClickChange = (changeEvent) => {
        setShowText(new Date(changeEvent.target.title).toLocaleString(
            "ru",
            {
                month: "short",
                year: "numeric",
                day: "numeric",
            }
        ));
        dispatch(reviewCosultationAction(changeEvent.target.value));
    }
    let arrayItems = props.array.map(el =>
        <label htmlFor={el.consultation_id} key={el.consultation_id}>
            <input type="radio" name="main-categories" title={el.datetime} id={el.consultation_id} value={el.consultation_id} onChange={handleClickChange} />
            {new Date(el.datetime).toLocaleString(
                "ru",
                {
                    month: "short",
                    year: "numeric",
                    day: "numeric",
                }
            )}
        </label>)
    return (
        <div id="Select-hide" onClick={handleClick}>
        {isShown ? <div className="background"></div> : ""}
            <div className="Select_content">
                <p style={{border: ` 1px solid ${config?.config.colors.color6}`,
      color:config?.config.colors.color4}}>{Showtext}</p>
                <img alt="" src={arrow} className={isShown ? "Rotate_img" : ""}  />
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