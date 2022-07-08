import React from "react";
import { useState } from "react";
import arrow from "../../img/arrow.png";
import "./Select.css";
const Select_ref = () => {};
const SelectCustom = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <div id="Select-hide" onClick={handleClick}>
      <div className="Select_content">
        <p>Акушер</p>
        <img src={arrow} className={isShown ? "Rotate_img" : ""} alt="" />
      </div>
      {isShown && (
        <div id="Select-menu">
          <input type="radio" name="main-categories" id="_1234" value="1234" />
          <label htmlFor="main-categories">fdsw</label>
        </div>
      )}
    </div>
  );
};
export default SelectCustom;
