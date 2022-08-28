import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import { useParams } from "react-router";
import "../Select.css";
import { DoctorMyName } from "../../../base/Reducers/doctorReducer";
import { getConfigHeaderAction, getConfigTitleAction } from "../../../base/Reducers/configReducer";
const SelectLogin = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const specialization = useSelector(state => state.doctorSpec.specialization_id);
  const sort = useSelector(state => state.doctorSpec.sort);
  const config = useSelector((state) => state.config.config);
  const [isShown, setIsShown] = useState(false);
  const [Showtext, setShowText] = useState("...");
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  useEffect(() => {
    if (props.selectType === "sort" && Showtext === "...")
      setShowText("По популярности");
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (props.array[0] && Showtext === "...") {
      if (props.selectType === "specialization") {
        if(Number(params.spec_id) === 0){
          setShowText('Все');
          dispatch(DoctorMyName('Все'));
          dispatch(getConfigHeaderAction('Все'));
          dispatch(getConfigTitleAction('Все'));
        }
        else{
          let filt = props.array.filter(el => el.specialization_id === Number(params.spec_id));
          setShowText(filt[0].title)
          dispatch(getConfigTitleAction(filt[0]?.title));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.array]);
  const handleClickChange = (changeEvent) => {
    setShowText(changeEvent.target.title);
    if (props.selectType === "specialization") {
      dispatch(props.func(1 , specialization, sort, changeEvent.target.value));
      window.history.pushState("", "", "/doctor-list/" + params.id +"/" + changeEvent.target.value); 
      dispatch(DoctorMyName(changeEvent.target.title));
      dispatch(getConfigHeaderAction(changeEvent.target.title));
      dispatch(getConfigTitleAction(changeEvent.target.title));
    }

    if (props.selectType === "sort")
      dispatch(props.func(1 , specialization, changeEvent.target.value));
  }
  let arrayItems = props.array?.map((el, key) =>
    <label htmlFor={el.branch_id ? el.branch_id :el.specialization_id} key={key}>
      <input type="radio" name="main-categories" title={el.title} id={el.branch_id ? el.branch_id :el.specialization_id} value={el.branch_id ? el.branch_id :el.specialization_id} onChange={handleClickChange} />
      {el.title}
    </label>)
  return (
    <div id="Select-hide" onClick={handleClick} >
    {isShown ? <div className="background"></div> : ""}
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