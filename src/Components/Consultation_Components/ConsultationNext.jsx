import React from "react";
import s from '../../Pages/Views/Consultation/Consultation.module.css';
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Stars from "../Stars/Stars";
import Loader from "../Loading/Loader";
import ModalCalendar from "../Modal/Modal_calendar/Modal_calendar";
import { axiosConsultationDelete, axiosConsultation } from '../../base/asyncActions/getConsultation'
import { axiosConsultationPuy } from "../../base/asyncActions/getConsultation";
import { Navigate } from "react-router-dom";
import Button from "../Button/Button";

import CancelRecord from "../Modal/Cancel_record/Cancel_Record";
const ConsultationNext = () => {
    let dispatch = useDispatch();
    const config = useSelector((state) => state.config.config);
    const PuyFunc = async (id) => {
        const response = await dispatch(axiosConsultationPuy(id));
        if (response.is_paid === false) {
          window.location.href = response.payment_url
        }
      };
    useEffect(() => {
        dispatch(axiosConsultation());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onClickPuy = async () => {
        const response = await dispatch(axiosConsultationPuy());

        if (!response.is_paid) {
            <Navigate to={response.payment_url} />
        }
    };
    let consultation = useSelector((state) => state.consultation.consultation);


    return (
        <div>
            {consultation[0] ? consultation.map(
                el => <div className={s.Doctor_full} key={el.consultation_id} style={{color: config?.config.colors.color2}}>
                    {el.can_cancel ? <CancelRecord consultation_id={el.consultation_id} text={"Вы действительно хотите отменить запись?"} func={axiosConsultationDelete} /> : ""}
                    <div className={s.Doctor_full1}>
                        <div className={s.Doctor}>
                            <div className={s.Doctor_infos}>
                                <div className={s.Doctor_avatar}>
                                    <div className={s.Doctor_avatar_img}>
                                        <img src={el.doctor.photo} alt="" />
                                        {el.doctor.is_online && <div style={{background: config?.config.colors.color8}} className={s.DoctorOnline}></div>}
                                    </div>
                                    <div className={s.Doctor_avatar_info + " " + s.black}>
                                        <Stars num={el.doctor.rate} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.Doctor_info + " " + s.black}>
                                <p className={s.gray} style={{color: config?.config.colors.color4}}>{el.doctor.specialization.join(" • ")}</p>
                                <h2 className={s.Font_size24}>{el.doctor.firstname + " " + el.doctor.lastname + " " + el.doctor.secondname}</h2>
                                <p className={s.Staj}>{el.doctor.regalia.join(" • ")}</p>
                                <div className={s.Doctor_buy}>
                                    <p className={s.gray} style={{color: config?.config.colors.color4}}>Стоимость консультации:</p>
                                    <p className={s.buy}>{el.price} ₽</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.Consultation_info}>
                            <div className={s.Consultation_info_text}>
                                <p className={s.gray} style={{color: config?.config.colors.color4}}>Консультация состоится:</p>
                                <p className={s.buy}>{new Date(el.datetime).toLocaleString(
                                    "ru",
                                    {
                                        month: "long",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "numeric"
                                    }
                                )}</p>
                            </div>
                            {el.paid ? <div onClick={onClickPuy}>
                                <Button
                                    className={s.Injoy1 + " " + s.Font_size14}
                                    type={'submit'}
                                    class={'btn orange'}
                                    text={'Оплатить'}
                                />
                            </div> : el.can_reschedule ? <ModalCalendar /> : ""}
                        </div>
                    </div>
                    <div className={s.ButtonMobile}>
                        {el.paid ? <div onClick={onClickPuy}>
                            <Button
                                className={s.Injoy1 + " " + s.Font_size14}
                                type={'submit'}
                                class={'btn orange'}
                                text={'Оплатить'}
                            />
                        </div> : el.can_reschedule ? <ModalCalendar /> :el.is_paid ? <div onClick={e => PuyFunc(el.doctor.doctor_id)}>
                  <Button type="button" class="btn orange" text="Оплатить" />
                </div>: ""}
                    </div>
                </div>
            ) : <Loader />}
        </div>
    )
}
export default ConsultationNext;