import React from "react";
import s from './Consultation.module.css';
import star from '../../../img/Rating_Star.png';
import ConsultationReady from "../../../Components/Consultation_ready/ConsultationReady";
import SelectCustom from "../../../Components/Select/Select";
import Download from '../../../img/Download.png';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectConsultation from "../../../Components/Select/SelectConsultation/SelectConsultation";
import { axiosBranch } from "../../../base/asyncActions/getDoctors";
import { axiosConsultation, axiosConsultationHistory,axiosConsultationDelete } from "../../../base/asyncActions/getConsultation";
import Stars from "../../../Components/Stars/Stars";
const Consultation = () => {
    let dispatch = useDispatch();
    let consultation = useSelector((state) => state.consultation.consultation);
    const branch = useSelector(state => state.doctorSpec.branch_array);
    let consultationHistory = useSelector((state) => state.consultation.consultationHistory);
    useEffect(() => {
        dispatch(axiosConsultation());
        dispatch(axiosBranch());
        dispatch(axiosConsultationHistory());
    }, [])
    let DoctorDelete = (consultation_id) =>{
        dispatch(axiosConsultationDelete(consultation_id));
    }
    let history = consultationHistory.map(
        el => <div className={s.Doctor_full} key={el.consultation_id}>
            <div className={s.Doctor}>
                <div className={s.Doctor_infos}>
                    <div className={s.Doctor_avatar}>
                        <div className={s.Doctor_avatar_img}>
                            <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt="" />
                        </div>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <Stars num={el.doctor.rate} />
                        </div>
                    </div>
                </div>
                <div className={s.Doctor_info + " " + s.black}>
                    <p className={s.gray + " " + s.Font_size14}>{el.doctor.specialization.join(" • ")}</p>
                    <h2 className={s.Font_size24}>{el.doctor.firstname + " " + el.doctor.lastname + " " + el.doctor.secondname}</h2>
                    <p className={s.Staj + " " + s.Font_size14}>{el.doctor.regalia.join(" • ")}</p>
                    <div className={s.Doctor_buy}>
                        <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
                        <p className={s.buy}>{el.price} ₽</p>
                    </div>
                    <div className={s.Doctor_buy}>
                        <p className={s.gray + " " + s.Font_size14}>Консультация состоялась:</p>
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
                </div>
            </div>
            <div className={s.Download_file}>
                <div className={s.Download_img}>
                    <img src={Download} alt="" />
                </div>
                <div className={s.Download_text}>
                    <p className={s.Font_size14}>Скачать заключение врача</p>
                </div>
            </div>
        </div>
    )
    let consult = consultation.map(
        el => <div className={s.Doctor_full} key={el.consultation_id}>
            {el.can_cancel ? <div className={s.Cart_close + " " + s.black} onClick={() =>{DoctorDelete(el.consultation_id)}}>
                +
            </div> : ""}

            <div className={s.Doctor_full1}>
                <div className={s.Doctor}>
                    <div className={s.Doctor_infos}>
                        <div className={s.Doctor_avatar}>
                            <div className={s.Doctor_avatar_img}>
                                <img src={el.doctor.photo} alt="" />
                            </div>
                            <div className={s.Doctor_avatar_info + " " + s.black}>
                                <Stars num={el.doctor.rate} />
                            </div>
                        </div>
                    </div>
                    <div className={s.Doctor_info + " " + s.black}>
                        <p className={s.gray}>{el.doctor.specialization.join(" • ")}</p>
                        <h2 className={s.Font_size24}>{el.doctor.firstname + " " + el.doctor.lastname + " " + el.doctor.secondname}</h2>
                        <p className={s.Staj}>{el.doctor.regalia.join(" • ")}</p>
                        <div className={s.Doctor_buy}>
                            <p className={s.gray}>Стоимость консультации:</p>
                            <p className={s.buy}>{el.price} ₽</p>
                        </div>
                    </div>
                </div>
                <div className={s.Consultation_info}>
                    <div className={s.Consultation_info_text}>
                        <p className={s.gray}>Консультация состоится:</p>
                        <p>{new Date(el.datetime).toLocaleString(
                            "ru",
                            {
                                month: "long",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric"
                            }
                        )}</p>
                    </div>
                    {el.paid ? <button className={s.Injoy1}>Оплатить</button> : el.can_reschedule ? <button className={s.Injoy1}>Оплатить</button> : ""}
                </div>
            </div>
        </div>
    )
    return (

        <div className={s.My_consultation}>
            <div className={s.Consultation_title}>
                <h1>Предстоящая консультация</h1>
            </div>
            <ConsultationReady />
            {consult}
            <div className={s.History}>
                <div className={s.History_title}>
                    <h1>История</h1>
                </div>
                <div className={s.History_select}>
                    <div className={s.History_special}>
                        <p className={s.Font_size14}>Специализация</p>
                        <SelectConsultation array={branch} selectType={"specialization"} func={axiosConsultationHistory}/>
                    </div>
                    <div className={s.History_date}>
                        <p className={s.Font_size14}>Специализация</p>
                        <SelectCustom />
                    </div>
                </div>
            </div>
            {history}
            <div className={s.Show_more}>
                <button>
                    показать ещё
                </button>
            </div>
        </div>
    )
}
export default Consultation;