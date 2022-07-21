import React from "react";
import s from '../../Pages/Views/Consultation/Consultation.module.css';
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Stars from "../Stars/Stars";
import Loader from "../Loading/Loader";
import {axiosConsultationDelete, axiosConsultation} from '../../base/asyncActions/getConsultation'
import { axiosConsultationPuy } from "../../base/asyncActions/getConsultation";
import { Navigate } from "react-router-dom";
import Cancel_Record from "../Modal/Cancel_record/Cancel_Record";
const ConsultationNext = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(axiosConsultation());
    }, [])
    const onClickPuy = async () => {
        const response = await dispatch(axiosConsultationPuy());
        
        if (!response.is_paid) {
          <Navigate to={response.payment_url}/>
        }
      };
    let consultation = useSelector((state) => state.consultation.consultation);
   
    
    return(
        <div>
            {consultation.map(
            el => <div className={s.Doctor_full} key={el.consultation_id}>
                {el.can_cancel ? <Cancel_Record consultation_id={el.consultation_id} text={"Вы действительно хотите отменить запись?"}/> : ""}
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
                        {el.paid ? <button className={s.Injoy1} onClick={onClickPuy}>Оплатить</button> : el.can_reschedule ? <button className={s.Injoy1} >Перенести</button> : ""}
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}
export default ConsultationNext;