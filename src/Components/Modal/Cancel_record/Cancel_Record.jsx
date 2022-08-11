import React from "react";
import s from './Cancel_Record.module.css';
import { axiosConsultationDelete } from "../../../base/asyncActions/getConsultation";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Cancel_Record = (props) => {
    let dispatch = useDispatch();
    let [showWindow, setWindow] = useState(false);
    let DoctorDelete = (consultation_id) => {
        dispatch(props.func(consultation_id));
        setWindow(false)
    }
    return (
        <div>
            <div className={s.Cart_close + " " + s.black} onClick={e=>setWindow(true)}>
                +
            </div>
            {showWindow ? <div className={s.Cancel_Record_full}>
                <div className={s.Cancel_Record_block}>
                    <div className={s.ImgNone}>
                        <img src="https://api.telemed.dev-h.ru/images/ui/doc3.png" alt="" />
                    </div>
                    <div className={s.Cancel_Record}>
                        <h1 className={s.Font_size40}>{props.text}</h1>
                        {props.typeModal == "record" ? <p className={s.Font_size16}>После удаления врача он не будет иметь доступ к вашей медицинской карте</p>: ""}
                        <div className={s.Cancel_Record_button}>
                            <button className={s.buttonActive + " " + s.Font_size16} onClick={() => { DoctorDelete(props.consultation_id) }}>Да</button>
                            <button className={s.buttonNo + " " + s.Font_size16} onClick={e=>setWindow(false)}>Нет</button>
                        </div>
                    </div>
                </div>
            </div> : ""}
            
        </div>
    )
}
export default Cancel_Record;