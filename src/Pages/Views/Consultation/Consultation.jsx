import React from "react";
import s from './Consultation.module.css';
import ConsultationReady from "../../../Components/Consultation_ready/ConsultationReady";
import ConsultationNext from "../../../Components/Consultation_Components/ConsultationNext";
import ConsultationHistory from "../../../Components/Consultation_Components/ConsultationHistory";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Chat from "../../../Components/Chat/Chat";
const Consultation = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getConfigHeaderAction("Мои записи"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
    return (
        <div className={s.Container + " Container"}>
            <div className={s.My_consultation}>
                <div className={s.Consultation_title}>
                    <h1 className={s.Font_size24}>Предстоящая консультация</h1>
                </div>
                <ConsultationReady />
                <ConsultationNext />
                <ConsultationHistory />
                <Chat />
            </div>
        </div>
    )
}
export default Consultation;