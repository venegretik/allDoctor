import React, { useState, useEffect } from "react";
import s from "./Consultation.module.css";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loading/Loader";
import { getConsultationUpcoming } from "../../base/asyncActions/getMainPageInfo";
import Button from "../../Components/Button/Button";
import { axiosConsultationDelete } from "../../base/asyncActions/getConsultation";
import Stars from "../Stars/Stars";
import Cancel_Record from "../Modal/Cancel_record/Cancel_Record";
import { Link } from "react-router-dom";
import { axiosConsultationStart, axiosConsultationPuy } from "../../base/asyncActions/getConsultation";
import ModalCalendar from "../Modal/Modal_calendar/Modal_calendar";
const ConsultationReady = (props) => {
  const dispatch = useDispatch();
  const [ConsultationUpcoming, setConsultationUpcoming] = useState(false);
  const asyncCons = async () => {
    const response = await dispatch(getConsultationUpcoming());
    if (response.status) {
      setConsultationUpcoming(response.data);
    }
  };
  const PuyFunc = async (id) => {
    const response = await dispatch(axiosConsultationPuy(id));
    if (response.is_paid == false) {
      window.location.href = response.payment_url
    }
  };
  useEffect(() => {
    asyncCons();
  }, []);
  return (
    <section>
      {ConsultationUpcoming ? (
        <div className={s.Doctor_cart}>
          {ConsultationUpcoming.can_cancel ? <Cancel_Record consultation_id={ConsultationUpcoming.consultation_id} text={"Вы действительно хотите отменить запись?"} typeModal={""} func={axiosConsultationDelete}/> : ""}
          <div className={s.Doctor_avatar}>
            <div className={s.Doctor_avatar_img}>
              <img src={ConsultationUpcoming.doctor.photo} alt="" />
              {ConsultationUpcoming.doctor.is_online && <div className={s.DoctorOnline}></div>}
            </div>
            <div className={s.Doctor_avatar_info}>
              <Stars num={ConsultationUpcoming.doctor.rate} />
              <p className={s.Font_size14}>
                {ConsultationUpcoming.doctor.recomends}% пациентов рекомендуют
                врача
              </p>
              <Link to={"/recording/" + ConsultationUpcoming.doctor.doctor_id + "/Reviews"}>
                <p className={s.Font_size14 + " " + s.blueLink}>
                  {ConsultationUpcoming.doctor.reviews} отзывов
                </p>
              </Link>
            </div>
          </div>
          <div className={s.Doctor_info}>
            <div className={s.Doctor_skills}>
              {ConsultationUpcoming.doctor.specialization
                ? ConsultationUpcoming.doctor.specialization.map(
                  (spec, key) => {
                    return (
                      <p key={key}>
                        {spec}
                        <span>•</span>
                      </p>
                    );
                  }
                )
                : ""}
            </div>
            <h2 className={s.Font_size24}>{`
              ${ConsultationUpcoming.doctor.firstname} 
              ${ConsultationUpcoming.doctor.lastname} 
              ${ConsultationUpcoming.doctor.secondname}
            `}</h2>
            <div className={`${s.Font_size14} ${s.regalia_block}`}>
              {ConsultationUpcoming.doctor.regalia
                ? ConsultationUpcoming.doctor.regalia.map((regalia, key) => {
                  return (
                    <p key={key}>
                      {regalia}
                      <span>•</span>
                    </p>
                  );
                })
                : ""}
            </div>
            <div className={s.Data}>
              <div className={s.Data_consultation}>
                <img src="" alt="" />
                <p className={s.Font_size16}>
                  {new Date(ConsultationUpcoming.datetime).toLocaleString(
                    "ru",
                    {
                      month: "numeric",
                      year: "numeric",
                      day: "numeric",
                    }
                  )}
                </p>
              </div>
              <div className={s.Data_time}>
                <img src="" alt="" />
                <p className={s.Font_size16}>
                  {new Date(ConsultationUpcoming.datetime).toLocaleString(
                    "ru",
                    {
                      minute: "numeric",
                      hour: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
            {
              ConsultationUpcoming.can_start ? <Link to="../video" onClick={e => dispatch(axiosConsultationStart(ConsultationUpcoming.doctor.doctor_id))}>
                <Button type="button" class="btn orange" text="Начать" />
              </Link> : ConsultationUpcoming.can_reschedule ? <ModalCalendar />
                : ConsultationUpcoming.is_paid ? <div onClick={e => PuyFunc(ConsultationUpcoming.doctor.doctor_id)}>
                  <Button type="button" class="btn orange" text="Оплатить" />
                </div> : ConsultationUpcoming.can_reschedule ? <ModalCalendar /> : ""
            }
          </div>
        </div>
      ) : (
        <div style={{ margin: "60px auto", maxWidth: "600px" }}>
          <Loader />
        </div>
      )}
    </section>
  );
};
export default ConsultationReady;
