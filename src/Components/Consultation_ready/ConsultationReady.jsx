import React, { useState, useEffect } from "react";
import s from "./Consultation.module.css";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loading/Loader";
import { getConsultationUpcoming } from "../../base/asyncActions/getMainPageInfo";
import Button from "../../Components/Button/Button";
import { axiosConsultationDelete } from "../../base/asyncActions/getConsultation";
import Stars from "../Stars/Stars";
import CancelRecord from "../Modal/Cancel_record/Cancel_Record";
import { Link } from "react-router-dom";
import {
  axiosConsultationStart,
  axiosConsultationPuy,
} from "../../base/asyncActions/getConsultation";
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
    if (response.is_paid === false) {
      window.location.href = response.payment_url;
    }
  };
  useEffect(() => {
    asyncCons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section>
      {ConsultationUpcoming ? (
        <div className={s.Doctor_cart + " white_config BackgroundBlue"}>
          {ConsultationUpcoming.can_cancel ? (
            <CancelRecord
              consultation_id={ConsultationUpcoming.consultation_id}
              text={"Вы действительно хотите отменить запись?"}
              typeModal={""}
              func={axiosConsultationDelete}
            />
          ) : (
            ""
          )}
          <div className={s.Doctor_avatar}>
            <div className={s.Doctor_avatar_img}>
              <img src={ConsultationUpcoming.doctor.photo} alt="" />
              {ConsultationUpcoming.doctor.is_online && (
                <div className={s.DoctorOnline}></div>
              )}
            </div>
            <div className={s.Doctor_avatar_info}>
              <Stars num={ConsultationUpcoming.doctor.rate} />
              <p className={s.Font_size14 + " white_config"}>
                {ConsultationUpcoming.doctor.recomends}% пациентов рекомендуют
                врача
              </p>
              <Link
                to={
                  "/recording/" +
                  ConsultationUpcoming.doctor.doctor_id +
                  "/Reviews"
                }>
                <p className={s.Font_size14 + " " + s.blueLink} >
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
            <div className={s.Data + " black_config"}>
              <div className={s.Data_time + " BackgroundWhite black_config"}>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00065 8.99647C2.69946 8.99647 0.833984 7.16563 0.833984 4.90717C0.833984 2.64871 2.69946 0.817871 5.00065 0.817871C7.30184 0.817871 9.16732 2.64871 9.16732 4.90717C9.16479 7.1646 7.30079 8.99399 5.00065 8.99647ZM5.00065 1.63573C3.1597 1.63573 1.66732 3.10041 1.66732 4.90717C1.66732 6.71394 3.1597 8.17861 5.00065 8.17861C6.8416 8.17861 8.33398 6.71394 8.33398 4.90717C8.33192 3.10125 6.84074 1.63776 5.00065 1.63573ZM7.08398 5.3161H4.58398V2.86252H5.41732V4.49824H7.08398V5.3161Z"
                    fill="#2E373D"
                  />
                </svg>

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
              <div className={s.Data_consultation  + " BackgroundWhite black_config"}>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.91667 8.99647H2.08333C1.6231 8.99647 1.25 8.63031 1.25 8.17861V2.45359C1.25 2.0019 1.6231 1.63573 2.08333 1.63573H2.91667V0.817871H3.75V1.63573H6.25V0.817871H7.08333V1.63573H7.91667C8.3769 1.63573 8.75 2.0019 8.75 2.45359V8.17861C8.75 8.63031 8.3769 8.99647 7.91667 8.99647ZM2.08333 4.08931V8.17861H7.91667V4.08931H2.08333ZM2.08333 2.45359V3.27145H7.91667V2.45359H2.08333ZM4.58333 7.53005L3.03875 6.01415L3.62792 5.43592L4.58333 6.3736L6.37208 4.61806L6.96125 5.19629L4.58333 7.52964V7.53005Z"
                    fill="#2E373D"
                  />
                </svg>

                <p className={s.Font_size16}>
                  {new Date(ConsultationUpcoming.datetime).toLocaleDateString(
                    "ru",
                    {
                      month: "numeric",
                      year: "2-digit",
                      day: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
            {ConsultationUpcoming.can_start ? (
              <Link
                to="../video"
                onClick={(e) =>
                  dispatch(
                    axiosConsultationStart(
                      ConsultationUpcoming.doctor.doctor_id
                    )
                  )
                }
              >
                <Button
                  style={{ maxWidth: "none" }}
                  type="button"
                  class="btn orange"
                  text="Присоединиться"
                />
              </Link>
            ) : ConsultationUpcoming.can_reschedule ? (
              <ModalCalendar />
            ) : ConsultationUpcoming.is_paid ? (
              <div
                onClick={(e) => PuyFunc(ConsultationUpcoming.doctor.doctor_id)}
              >
                <Button class="btn orange" text="Оплатить" />
              </div>
            ) : ConsultationUpcoming.can_reschedule ? (
              <ModalCalendar />
            ) : (
              ""
            )}
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
