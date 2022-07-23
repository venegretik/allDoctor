import React from "react";
import s from './Consultation.module.css';
import ConsultationReady from "../../../Components/Consultation_ready/ConsultationReady";
import ConsultationNext from "../../../Components/Consultation_Components/ConsultationNext";
import ConsultationHistory from "../../../Components/Consultation_Components/ConsultationHistory";
import Chat from "../../../Components/Chat/Chat";
const Consultation = () => {
    return (
        <div className={s.My_consultation}>
            <div className={s.Consultation_title}>
                <h1>Предстоящая консультация</h1>
            </div>
            <ConsultationReady />
            <ConsultationNext />
            <ConsultationHistory />
            <Chat />
        </div>
    )
}
export default Consultation;