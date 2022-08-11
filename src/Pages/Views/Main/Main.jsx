import React from "react";
import s from "./Main.module.css";
import { Link } from "react-router-dom";
import ConsultationReady from "../../../Components/Consultation_ready/ConsultationReady";
import DoctorsOnDuty from "../../../Components/DoctorsOnDuty/DoctorsOnDuty";
import { useEffect } from "react";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
import SliderArrow from "../../../Components/Sliders/SliderArrow/SliderArrow";
import SliderDots from "../../../Components/Sliders/SliderDots/SliderDots";
import SectionsMedicine from "../../../Components/SectionsMedicine/SectionsMedicine";
import Chat from "../../../Components/Chat/Chat";
import { useSelector, useDispatch } from "react-redux";
const Main = (props) => {
  let dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getConfigHeaderAction("Главная"));
  }, []);
  const config = useSelector((state) => state.config.config);
  return (
    <div>
      <div className={s.Container + " Container"}>
        <ConsultationReady props={props} />
        <DoctorsOnDuty />
        {config.module.symptoms ? <SliderArrow /> : ""}
      </div>
      {config.module.slider ? <SliderDots /> : ""}
      <div className={s.Container + " Container"}>
        <SectionsMedicine />
      </div>
      <Chat />
    </div>
  );
};
export default Main;
