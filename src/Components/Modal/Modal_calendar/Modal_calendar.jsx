import React from "react";
import s from './Modal_calendar.module.css';
import Button from "../../Button/Button";
import Calendar from "../../Calendar/Calendar";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { consultationModalAction } from "../../../base/Reducers/ConsultationReducer";
import { BottomSheet } from 'react-spring-bottom-sheet'
const ModalCalendar = (props) => {
    let statusModal = useSelector((state) => state.consultation.statusModal)
    useEffect(() => {
        if (statusModal)
            props.setWindow(false);
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
                <Calendar doctor_id={props.doctor_id ? props.doctor_id : ""} type_el="popup" />
            </div>
        </div>
    )
}
export default ModalCalendar;