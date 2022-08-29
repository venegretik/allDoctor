import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import { axiosProfileResultSelect } from "../../../base/asyncActions/Profile";
import "../Select.css";
const SelectResult = (props) => {
    let dispatch = useDispatch();
    const [isShown, setIsShown] = useState(false);
    const config = useSelector((state) => state.config.config);
    const [Showtext, setShowText] = useState("Все");
    const handleClick = (event) => {
        setIsShown((current) => !current);
    };
    const handleClickChange = (changeEvent) => {
        setShowText(changeEvent.target.title);
        dispatch(axiosProfileResultSelect(1,changeEvent.target.value));
    }
    let arrayItems = props.array.map(el =>
        <label htmlFor={el.branch_id} key={el.branch_id}>
          <input type="radio" name="main-categories" title={el.title} id={el.branch_id} value={el.branch_id} onChange={handleClickChange} />
          {el.title}
        </label>)
    return (
        <div id="Select-hide" onClick={handleClick}>
        {isShown ? <div className="background"></div> : ""}
            <div className="Select_content">
                <p style={{border: ` 1px solid ${config?.config.colors.color6}`,
      color:config?.config.colors.color2}}>{Showtext}</p>
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
export default SelectResult;