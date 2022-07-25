import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import "../Select.css";
const SelectConsultation = (props) => {
  const dispatch = useDispatch();
  const specialization = useSelector(state => state.consultation.specialization_id);
  const date_from = useSelector(state => state.consultation.date_from);
  const date_to = useSelector(state => state.consultation.date_to);
  const page = useSelector(state => state.consultation.page);
  const [isShown, setIsShown] = useState(false);
  const [Showtext, setShowText] = useState("Педиатр");
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const handleClickChange = (changeEvent) => {
    setShowText(changeEvent.target.title);
    if (props.selectType == "specialization")
      dispatch(props.func(page, Number(changeEvent.target.value)));
    if (props.selectType == "sort")
      dispatch(props.func(page, specialization));
    if (props.selectType == "history")
      dispatch(props.func(changeEvent.target.value, page, date_to, date_from));
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
export default SelectConsultation;