import React from "react";
import s from './Modal_calendar.module.css';
import Calendar from "../../Calendar/Calendar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const ModalCalendar = (props) => {
    let statusModal = useSelector((state) => state.consultation.statusModal)
    useEffect(() => {
        if (statusModal)
            props.setWindow(false);
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statusModal])
    return (
        <div>
            <div className={s.Cancel_Record_block}>
                <div className={s.Cart_close + " " + s.black} onClick={e => props.setWindow(false)}>
                    &times;
                </div>
                <div>
                    <h1 className={s.title + " title_config"}>Перенести запись</h1>
                </div>
                <Calendar promocode={props.promocode} use_balance={props.use_balance} doctor_id={props.doctor_id ? props.doctor_id : ""} type_el="popup" />
            </div>
        </div>
    )
}
export default ModalCalendar;