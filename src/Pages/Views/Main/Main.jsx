import React from "react";
import s from "./Main.module.css";
import { Link } from "react-router-dom";
import ConsultationReady from "../../../Components/Consultation_ready/ConsultationReady";
import DoctorsOnDuty from "../../../Components/DoctorsOnDuty/DoctorsOnDuty";
import SliderArrow from "../../../Components/Sliders/SliderArrow/SliderArrow";
import SliderDots from "../../../Components/Sliders/SliderDots/SliderDots";
import SectionsMedicine from "../../../Components/SectionsMedicine/SectionsMedicine";
import Chat from "../../../Components/Chat/Chat";
const Main = (props) => {
  return (
    <div>
      <div className={s.Container + " Container"}>
        <ConsultationReady props={props} />
        <DoctorsOnDuty />
        <SliderArrow />
      </div>
      <SliderDots />
      <div className={s.Container + " Container"}>
        <SectionsMedicine />
      </div>
      <Chat />
    </div>
  );
};
export default Main;
