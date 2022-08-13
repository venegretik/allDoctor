import React from "react";
import s from '../../Pages/Views/Consultation/Consultation.module.css';
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Stars from "../Stars/Stars";
import Loader from "../Loading/Loader";
import Button from "../Button/Button";
import { axiosConsultationHistory, axiosConsultationDelete, consultationHistoryCons } from '../../base/asyncActions/getConsultation';
import { axiosBranch } from "../../base/asyncActions/getDoctors";
import SelectConsultation from "../Select/SelectConsultation/SelectConsultation";
import SelectCalendar from "../Select/SelectCalendar/SelectCalendar";
import { Link } from "react-router-dom";
const ConsultationHistory = () => {
    const branch = useSelector(state => state.doctorSpec.branch_array);
    const page = useSelector(state => state.consultation.page);
    const date_from = useSelector(state => state.consultation.date_from);
    const date_to = useSelector(state => state.consultation.date_to);
    const config = useSelector((state) => state.config.config);
    const totalPage = useSelector(state => state.consultation.totalPage);
    let specialization_id = useSelector(state => state.consultation.specialization_id);
    let consultationHistory = useSelector((state) => state.consultation.consultationHistory);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(axiosBranch());
        if(!consultationHistory[0])
        dispatch(axiosConsultationHistory());
    }, [])
    let DoctorDelete = (consultation_id) => {
        dispatch(axiosConsultationDelete(consultation_id));
    }
    
    let history = consultationHistory.map(
        el => <div className={s.Doctor_full} key={el.consultation_id} style={{color: config?.config.colors.color2}}>
            {el.can_cancel ? <div className={s.Cart_close + " " + s.black} onClick={() => { DoctorDelete(el.consultation_id) }}>
                +
            </div> : ""}

            <div className={s.Doctor_full1}>
                <div className={s.Doctor}>
                    <div className={s.Doctor_infos}>
                        <div className={s.Doctor_avatar}>
                            <div className={s.Doctor_avatar_img}>
                                <img src={el.doctor.photo} alt="" />
                                {el.doctor.is_online && <div className={s.DoctorOnline}></div>}
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
                    </div>
                </div>
                <div className={s.Consultation_info}>
                    <Link to={el.file} target="_blank" download>
                        <div className={s.Download_file}>
                            <div className={s.Download_img}>
                                <img src="https://api.telemed.dev-h.ru/images/ui/download_guy.svg" alt="" />
                            </div>
                            <div className={s.Download_text}>
                                <p className={s.Font_size14} style={{color: config?.config.colors.color10}}>Скачать заключение врача</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
    return (
        <div>
            <div className={s.History}>
                <div className={s.History_title}>
                    <h1>История</h1>
                </div>
                <div className={s.History_select}>
                    <div className={s.History_special}>
                        <p className={s.Font_size14}>Специализация</p>
                        <SelectConsultation array={branch} selectType={"history"} func={consultationHistoryCons} />
                    </div>
                    <div className={s.History_date}>
                        <p className={s.Font_size14}>Дата приёма</p>
                        <SelectCalendar />
                    </div>
                </div>
            </div>
            {!history[0] ? (
                <Loader />
            ) : (history)}
            <div className={s.Show_more + " " + s.Message_button_margin} onClick={e => {
                if (page < totalPage)
                    dispatch(axiosConsultationHistory(specialization_id, page + 1, date_to, date_from))
            }}>
                <Button
                    className={s.Reviews_send + " " + s.Font_size14}
                    type={'submit'}
                    class={'btn white'}
                    text={'Показать ещё'}
                />
            </div>
        </div>
    )
}
export default ConsultationHistory;