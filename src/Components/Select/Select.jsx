import React from "react";
import { useState } from "react";
import arrow from "../../img/arrow.png";
import "./Select.css";
const SelectCustom = () => {
  const [isShown, setIsShown] = useState(false);
  const [Showtext, setShowText] = useState('Выберите вариант...');
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const handleClickChange = (changeEvent) => {
    console.log(changeEvent.target.value);
  }
  return (
    <div id="Select-hide" onClick={handleClick}>
      <div className="Select_content">
        <p></p>
        <img alt="" src={arrow} className={isShown ? "Rotate_img" : ""}  />
      </div>
      {isShown && (
        <div id="Select-menu">

          <label htmlFor="_1234" value="1234">
            <input type="radio" name="main-categories" id="_1234" value="1234" onChange={handleClickChange}/>
          </label>
        </div>
      )}
    </div>
  );
};
export default SelectCustom;
