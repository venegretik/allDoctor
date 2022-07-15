import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import "../Select.css";
const SelectLogin = (props) => {
  const dispatch = useDispatch();
  const specialization = useSelector(state => state.doctorSpec.specialization_id);
  const page = useSelector(state => state.doctorSpec.page);
  const sort = useSelector(state => state.doctorSpec.sort);
  const [isShown, setIsShown] = useState(false);
  const [Showtext, setShowText] = useState("...");
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const handleClickChange = (changeEvent) => {
    setShowText(changeEvent.target.title);
    if (props.selectType == "specialization")
      dispatch(props.func(page, Number(changeEvent.target.value), sort));
    if (props.selectType == "sort")
      dispatch(props.func(page, specialization, changeEvent.target.value));
    
  }
  let arrayItems = props.array.map(el =>
    <label htmlFor={el.branch_id} key={el.branch_id}>
      <input type="radio" name="main-categories" title={el.title} id={el.branch_id} value={el.branch_id} onChange={handleClickChange} />
      {el.title}
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
};
export default SelectLogin;