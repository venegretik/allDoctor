import React from "react";
import s from './Cancel_Record.module.css';
import { axiosConsultationDelete } from "../../../base/asyncActions/getConsultation";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Cancel_Record = (props) => {
    let dispatch = useDispatch();
    let [showWindow, setWindow] = useState(false);
    let DoctorDelete = (consultation_id) => {
        dispatch(axiosConsultationDelete(consultation_id));
        setWindow(false)
    }
    return (
        <div>
            <div className={s.Cart_close + " " + s.black} onClick={e=>setWindow(true)}>
                +
            </div>
            {showWindow ? <div className={s.Cancel_Record_full}>
                <div className={s.Cancel_Record_block}>
                    <div>
                        <img src="https://api.telemed.dev-h.ru/images/ui/doc3.png" alt="" />
                    </div>
                    <div className={s.Cancel_Record}>
                        <h1>{props.text}</h1>
                        <div className={s.Cancel_Record_button}>
                            <button className={s.buttonActive} onClick={() => { DoctorDelete(props.consultation_id) }}>Да</button>
                            <button className={s.buttonNo} onClick={e=>setWindow(false)}>Нет</button>
                        </div>
                    </div>
                </div>
            </div> : ""}
            
        </div>
    )
}
export default Cancel_Record;