import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import { reviewCosultationAction } from "../../../base/Reducers/reviewsReducer";
import "../Select.css";
const SelectModule = (props) => {
    let dispatch = useDispatch();
    const [isShown, setIsShown] = useState(false);
    const config = useSelector((state) => state.config.config);
    const [Showtext, setShowText] = useState("Не найдено");
    const handleClick = (event) => {
        setIsShown((current) => !current);
    };
    const handleClickChange = (changeEvent) => {
        setShowText(changeEvent.target.title);
    }
    useEffect(() => {
        if(props.array[0]){
            if(!props.array[0].label == "")
            setShowText(props.array[0].label)
        }
    }, [props.array]);
    let arrayItems = props.array.map(el =>
        <label htmlFor={el.deviceId} key={el.deviceId}>
            <input type="radio" name="main-categories" title={el.label} id={el.deviceId} value={el.deviceId}  onChange={handleClickChange}/>
            {el.label}
        </label>)
    return(
        <div id="Select-hide1" onClick={handleClick}>
            <div className="Select_content">
                <p style={{border: ` 1px solid ${config?.config.colors.color6}`,
      color:config?.config.colors.color2}}>{Showtext}</p>
                <img src={arrow} className={isShown ? "Rotate_img" : ""} alt="" />
            </div>
            {isShown && (
                <div id="Select-menu" >
                    {props.array[0] ? arrayItems :""}
                </div>
            )}
        </div>
    )
}
export default SelectModule;