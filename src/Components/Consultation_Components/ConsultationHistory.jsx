import React from "react";
import s from '../../Pages/Views/Consultation/Consultation.module.css';
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Stars from "../Stars/Stars";
import Loader from "../Loading/Loader";
import Button from "../Button/Button";
import { axiosConsultationHistory, axiosConsultationDelete, consultationHistoryCons } from '../../base/asyncActions/getConsultation';
import { axiosBranch } from "../../base/asyncActions/getDoctors";
import SelectConsultation from "../Select/SelectConsultation/SelectConsultation";
import SelectCalendar from "../Select/SelectCalendar/SelectCalendar";
const ConsultationHistory = () => {
    let branch = useSelector(state => state.consultation.spec_array);
    const page = useSelector(state => state.consultation.page);
    const date_from = useSelector(state => state.consultation.date_from);
    const date_to = useSelector(state => state.consultation.date_to);
    let [statusDoc, setStatus] = useState(false);
    const totalPage = useSelector(state => state.consultation.totalPage);
    let specialization_id = useSelector(state => state.consultation.specialization_id);
    let consultationHistory = useSelector((state) => state.consultation.consultationHistory);
    let dispatch = useDispatch();
    useEffect(() => {
        async function fetchMyAPI() {
            dispatch(axiosBranch());
                let statusDoctor = await dispatch(axiosConsultationHistory());
                setStatus(statusDoctor.status);
        }
        fetchMyAPI()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let DoctorDelete = (consultation_id) => {
        dispatch(axiosConsultationDelete(consultation_id));
    }

    let history = consultationHistory.map(
        (el, key) => <div className={s.Doctor_full + " black_config"} key={key}>
            {el.can_cancel ? <div className={s.Cart_close} onClick={() => { DoctorDelete(el.consultation_id) }}>
                +
            </div> : ""}

            <div className={s.Doctor_full1 + " " + s.Download_Doctor}>
                <div className={s.Doctor}>
                    <div className={s.Doctor_infos}>
                        <div className={s.Doctor_avatar}>
                            <div className={s.Doctor_avatar_img}>
                                <img alt="" src={el.doctor.photo} />
                                {el.doctor.is_online && <div className={s.DoctorOnline + " green_config"}></div>}
                            </div>
                            <div className={s.Doctor_avatar_info}>
                                <Stars num={el.doctor.rate} />
                            </div>
                        </div>
                    </div>
                    <div className={s.Doctor_info + " " + s.black}>
                        <p className={s.gray + " gray_config"}>{el.doctor.specialization.join(" • ")}</p>
                        <h2 className={s.Font_size24}>{el.doctor.firstname + " " + el.doctor.lastname + " " + el.doctor.secondname}</h2>
                        <p className={s.Staj}>{el.doctor.regalia.join(" • ")}</p>
                        <div className={s.Doctor_buy}>
                            <p className={s.gray + " gray_config"}>Стоимость консультации:</p>
                            <p className={s.buy}>{el.price} ₽</p>
                        </div>
                        <div className={s.Consultation_info_text}>
                            <p className={s.gray + " gray_config"}>Консультация состоится:</p>
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
                    <a href={el.file} rel="noreferrer" target="_blank" download>
                        <div className={s.Download_file + " opacityBlue"}>
                            <div className={s.Download_img}>
                                <img alt="" src="https://api.telemed.dev-h.ru/images/ui/download_guy.svg" />
                            </div>
                            <div className={s.Download_text + " blue_config"}>
                                <p className={s.Font_size14}>Скачать заключение врача</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
    return (
        <div>
            <div className={s.History}>
                <div className={s.History_title + " title_config"}>
                    <h1>История</h1>
                </div>
                <div className={s.History_select + " black_config"}>
                    <div className={s.History_special}>
                        <p className={s.Font_size14 + " gray_config"}>Специализация</p>
                        <SelectConsultation array={branch} selectType={"history"} func={consultationHistoryCons} />
                    </div>
                    <div className={s.History_date}>
                        <p className={s.Font_size14 + " gray_config"}>Дата приёма</p>
                        <SelectCalendar />
                    </div>
                </div>
            </div>
            {!statusDoc ? (
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