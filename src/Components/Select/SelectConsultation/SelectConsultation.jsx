import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import "../Select.css";
const SelectConsultation = (props) => {
  const dispatch = useDispatch();
  const specialization = useSelector(state => state.consultation.specialization_id);
  const date_from = useSelector(state => state.consultation.date_from);
  const date_to = useSelector(state => state.consultation.date_to);
  const [isShown, setIsShown] = useState(false);
  const config = useSelector((state) => state.config.config);
  const [Showtext, setShowText] = useState("...");
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  useEffect(() => {
    if (props.array[0]){
      setShowText(props.array[0].title)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.array])
  const handleClickChange = (changeEvent) => {
    setShowText(changeEvent.target.title);
    if (props.selectType === "specialization")
      dispatch(props.func(1, Number(changeEvent.target.value)));
    if (props.selectType === "sort")
      dispatch(props.func(1, specialization));
    if (props.selectType === "history")
      dispatch(props.func(changeEvent.target.value, 1, date_to, date_from));
  }
  let arrayItems = props.array.map((el, key) =>
    <label htmlFor={el.specialization_id} key={key}>
      <input type="radio" name="main-categories" title={el.title} id={el.specialization_id} value={el.specialization_id} onChange={handleClickChange} />
      {el.title}
    </label>)
  return (
    <div id="Select-hide" onClick={handleClick}>
      {isShown ? <div className="background"></div> : ""}
      <div className="Select_content">
        <p style={{
          border: ` 1px solid ${config?.config.colors.color6}`,
          color: config?.config.colors.color2
        }}>{Showtext}</p>
        <img alt="" src={arrow} className={isShown ? "Rotate_img" : ""}  />
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