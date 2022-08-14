import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import { useParams } from "react-router";
import "../Select.css";
import { DoctorMyName } from "../../../base/Reducers/doctorReducer";
const SelectLogin = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const specialization = useSelector(state => state.doctorSpec.specialization_id);
  const page = useSelector(state => state.doctorSpec.page);
  const sort = useSelector(state => state.doctorSpec.sort);
  const config = useSelector((state) => state.config.config);
  const [isShown, setIsShown] = useState(false);
  const [Showtext, setShowText] = useState("...");
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  useEffect(() => {
    if (props.selectType == "sort" && Showtext == "...")
      setShowText("По популярности");
  }, []);
  useEffect(() => {
    if (props.array[0]) {
      if (props.selectType == "specialization") {
        let filt = props.array.filter(el => el.branch_id == params.id);
        setShowText(filt[0].title)
      }

    }
  }, [props.array]);
  const handleClickChange = (changeEvent) => {
    setShowText(changeEvent.target.title);
    if (props.selectType == "specialization") {
      dispatch(props.func(page, Number(changeEvent.target.value), sort));
      dispatch(DoctorMyName(changeEvent.target.title));
    }

    if (props.selectType == "sort")
      dispatch(props.func(page, specialization, changeEvent.target.value));
  }
  let arrayItems = props.array.map(el =>
    <label htmlFor={el.branch_id} key={el.branch_id}>
      <input type="radio" name="main-categories" title={el.title} id={el.branch_id} value={el.branch_id} onChange={handleClickChange} />
      {el.title}
    </label>)
  return (
    <div id="Select-hide" onClick={handleClick} >
      <div className="Select_content">
        <p style={{border: ` 1px solid ${config?.config.colors.color6}`,
      color:config?.config.colors.color2}}>{Showtext}</p>
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