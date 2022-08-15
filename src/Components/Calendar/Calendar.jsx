import React from "react";
import s from './Calendar.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosRecordingCalculator } from "../../base/asyncActions/getReviews";
import { Link, Navigate } from "react-router-dom";
import Loader from "../Loading/Loader";
import { axiosConsultationCalendar } from "../../base/asyncActions/getConsultation";
import { getPuymentInfo } from "../../base/asyncActions/Payment";
import Button from "../Button/Button";
import { consultationModalAction } from "../../base/Reducers/ConsultationReducer";
const Calendar = (props) => {
    const config = useSelector((state) => state.config.config);
    const dispatch = useDispatch(),
        [DateStr, setDate] = useState(""),
        [RedPayment, setRedPayment] = useState(false),
        [slot_id, setId] = useState(0),
        [Slot, setSlot] = useState([]),
        calendar = useSelector((state) => state.recording.calendar),
        callendarDay = (date) => {
            const days = ["Вc.", "Пн.", "Вт", "Ср.", "Чт.", "Пт.", "Сб."],
                now = new Date(date);
            return days[now.getDay()]
        }
    let slots = [];
    let keyNum = 0;
    useEffect(() => {
        dispatch(axiosRecordingCalculator());
    }, [])
    let Modal = async () => {
        let status = await dispatch(axiosConsultationCalendar(props.usId, slot_id, DateStr))
        
        if (status) {
            dispatch(consultationModalAction(status));
        }
    }
    let OnCheck = async () => {
        let status = await dispatch(getPuymentInfo(props.usId, slot_id));
        
        if (status.status === true)
            setRedPayment(true)
        else
            dispatch(axiosRecordingCalculator());
    }
    useEffect(() => {
        if (calendar[0]) {
            setDate(calendar[0].date);
            if (!slots[0]) {
                slots = [...calendar[0].slots]
                setSlot(slots)
            }
        }
    }, [calendar]);
    let slotsFunc = (el) => {
        setDate(el.date);
        setSlot(el.slots);
    }
    slots = Slot.map(
        el => !el.available ? <div className={s.Calendar_rasp + " " + s.colorUnactive} style={{background: config?.config.colors.color3}} key={el.slot_id}>
            <p className={s.Font_size16}>{new Date(el.time).toLocaleString(
                "ru",
                {
                    hour: "numeric",
                    minute: "numeric"
                }
            )}</p>
        </div> : slot_id === el.slot_id ? <div className={s.Calendar_rasp + " " + s.colorDefault} style={{background: config?.config.colors.color7}} key={el.slot_id} onClick={e => setId(el.slot_id)}>
            <p className={s.Font_size16}>{new Date(el.time).toLocaleString(
                "ru",
                {
                    hour: "numeric",
                    minute: "numeric"
                }
            )}</p>
        </div> :
            <div className={s.Calendar_rasp + " " + s.colorOnClick} key={el.slot_id} style={{background: config?.config.colors.color10}} onClick={e => setId(el.slot_id)}>
                <p className={s.Font_size16}>{new Date(el.time).toLocaleString(
                    "ru",
                    {
                        hour: "numeric",
                        minute: "numeric"
                    }
                )}</p>
            </div>
    )
    let call = calendar.map(el => <li key={++keyNum}>
        <p>{callendarDay(el.date)}</p>
        <b style={DateStr === el.date ? {background: config?.config.colors.color7} : {}} className={s.Calendar_active} onClick={e => slotsFunc(el)}>{new Date(el.date).toLocaleString(
            "ru",
            {
                day: "numeric",
            }
        )}</b>
    </li>);


    return (
        slots[0] ? <div className={s.Calendar_full} style={{color: config?.config.colors.color2}}>
            {RedPayment === true ? <Navigate to={"../payment/" + props.usId + "/" + slot_id} /> : false}
            <div>
                <p className={s.Font_size14 + " " + s.gray} style={{color: config?.config.colors.color4}}>Выберите дату и время для записи:</p>
            </div>
            <div className={s.Calendar_main}>
                <ul className={s.Font_size14}>
                    {call}
                </ul>
            </div>
            <div>
                <p className={s.Font_size14 + " " + s.gray} style={{color: config?.config.colors.color4}}>Онлайн-расписание на 25 марта:</p>
            </div>
            <div className={s.Calendar_rasp_top}>
                {slots}
            </div>
            <div className={s.Calendar_button}>
                {props.type_el === "popup" ?
                    <div onClick={e => Modal()}><Button
                        className={s.Injoy1 + " " + s.Font_size14}
                        type={'submit'}
                        class={'btn blue'}
                        text={'Перенести'}
                    /></div>
                    : !slot_id && !props.usId ?
                        <div><Button
                            className={s.Injoy1 + " " + s.Font_size14}
                            type={'submit'}
                            
                            class={'btn blue'}
                            text={'записаться'}
                        /></div> :
                        //<Link to={"../payment/" + props.usId + "/" + slot_id}>
                        <div onClick={e=>{
                            if(slot_id)
                            OnCheck()
                        }} ><Button
                            className={s.Injoy1 + " " + s.Font_size14}
                            type={'submit'}
                            class={'btn blue'}
                            text={'записаться'}
                        /></div> 
                    //</Link>
                }
            </div>
        </div> : <Loader />
    )
}
export default Calendar;