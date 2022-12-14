import React from "react";
import s from '../../Pages/Views/Consultation/Consultation.module.css';
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Stars from "../Stars/Stars";
import Loader from "../Loading/Loader";
import ModalContainer from "../Modal/ModalContainer";
import { axiosConsultationDelete, axiosConsultation } from '../../base/asyncActions/getConsultation'
import { axiosConsultationPuy } from "../../base/asyncActions/getConsultation";
import { Navigate } from "react-router-dom";
import Button from "../Button/Button";
const ConsultationNext = () => {
    let dispatch = useDispatch();
    let [statusDoc, setStatus] = useState(false);
    const config = useSelector((state) => state.config.config);
    const PuyFunc = async (id) => {
        const response = await dispatch(axiosConsultationPuy(id));
        if (response.is_paid === false) {
            window.location.href = response.payment_url
        }
    };
    useEffect(() => {
        async function fetchMyAPI() {
            let statusDoctor = await dispatch(axiosConsultation());
            setStatus(statusDoctor.status);
        }
        fetchMyAPI()
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
            {statusDoc ? consultation.map(
                el => <div className={s.Doctor_full + " black_config"} key={el.consultation_id}>
                    {el.can_cancel ? <ModalContainer typeModalCont="CancelRecord" consultation_id={el.consultation_id} type_modal="cons" text={"Вы действительно хотите отменить запись?"} func={axiosConsultationDelete} /> : ""}
                    <div className={s.Doctor_full1}>
                        <div className={s.Doctor}>
                            <div className={s.Doctor_infos}>
                                <div className={s.Doctor_avatar}>
                                    <div className={s.Doctor_avatar_img}>
                                        <img alt="" src={el.doctor.photo} />
                                        {el.doctor.is_online && <div className={s.DoctorOnline + " green_config"}></div>}
                                    </div>
                                    <div className={s.Doctor_avatar_info + " " + s.black}>
                                        <Stars num={el.doctor.rate} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.Doctor_info + " " + s.black}>
                                <p className={"gray_config"} style={{ color: config?.config.colors.color4 }}>{el.doctor.specialization.join(" • ")}</p>
                                <h2 className={s.Font_size24}>{el.doctor.firstname + " " + el.doctor.lastname + " " + el.doctor.secondname}</h2>
                                <p className={s.Staj}>{el.doctor.regalia.join(" • ")}</p>
                                <div className={s.Doctor_buy}>
                                    <p className={"gray_config"} style={{ color: config?.config.colors.color4 }}>Стоимость консультации:</p>
                                    <p className={s.buy}>{el.price} ₽</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.Consultation_info}>
                            <div className={s.Consultation_info_text}>
                                <p className={"gray_config"} style={{ color: config?.config.colors.color4 }}>Консультация состоится:</p>
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
                            </div> : el.can_reschedule ? <ModalContainer usId={el.consultation_id} typeModalCont="ModalCalendar" /> : ""}
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
                        </div> : el.can_reschedule ? <ModalContainer typeModalCont="ModalCalendar" usId={el.consultation_id}/> : el.is_paid ? <div onClick={e => PuyFunc(el.doctor.doctor_id)}>
                            <Button type="button" class="btn orange" text="Оплатить" />
                        </div> : ""}
                    </div>
                </div>
            ) : <Loader />}
        </div>
    )
}
export default ConsultationNext;