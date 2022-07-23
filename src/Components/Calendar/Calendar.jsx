import React from "react";
import s from './Calendar.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosRecordingCalculator } from "../../base/asyncActions/getReviews";
import { Link } from "react-router-dom";
import Loader from "../Loading/Loader";
import { axiosConsultationCalendar } from "../../base/asyncActions/getConsultation";
const Calendar = (props) => {
    const dispatch = useDispatch(),
        [DateStr, setDate] = useState(""),
        [slot_id, setId] = useState(0),
        [Slot, setSlot] = useState([]),
        calendar = useSelector((state) => state.recording.calendar),
        callendarDay = (date) => {
            const days = ["Вc.", "Пн.", "Вт", "Ср.", "Чт.", "Пт.", "Сб."],
                now = new Date(date);
            return days[now.getDay()]
        }
    let slots = [];
    useEffect(() => {
        dispatch(axiosRecordingCalculator());
    }, [])
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
        el => !el.available ? <div className={s.Calendar_rasp + " " + s.colorUnactive} key={el.slot_id}>
            <p className={s.Font_size16}>{new Date(el.time).toLocaleString(
                "ru",
                {
                    hour: "numeric",
                    minute: "numeric"
                }
            )}</p>
        </div> : slot_id == el.slot_id ? <div className={s.Calendar_rasp + " " + s.colorDefault} key={el.slot_id} onClick={e => setId(el.slot_id)}>
            <p className={s.Font_size16}>{new Date(el.time).toLocaleString(
                "ru",
                {
                    hour: "numeric",
                    minute: "numeric"
                }
            )}</p>
        </div> :
            <div className={s.Calendar_rasp + " " + s.colorOnClick} key={el.slot_id} onClick={e => setId(el.slot_id)}>
                <p className={s.Font_size16}>{new Date(el.time).toLocaleString(
                    "ru",
                    {
                        hour: "numeric",
                        minute: "numeric"
                    }
                )}</p>
            </div>
    )
    let call = calendar.map(el => <li >
        <p>{callendarDay(el.date)}</p>
        <b className={DateStr == el.date ? s.Calendar_active : ""} onClick={e => slotsFunc(el)}>{new Date(el.date).toLocaleString(
            "ru",
            {
                day: "numeric",
            }
        )}</b>
    </li>);


    return (
        slots[0] ? <div className={s.Calendar_full}>
        <div>
            <p className={s.Font_size14 + " " + s.gray}>Выберите дату и время для записи:</p>
        </div>
        <div className={s.Calendar_main}>
            <ul className={s.Font_size14}>
                {call}
            </ul>
        </div>
        <div>
            <p className={s.Font_size14 + " " + s.gray}>Онлайн-расписание на 25 марта:</p>
        </div>
        <div className={s.Calendar_rasp_top}>
            {slots}
        </div>
        <div className={s.Calendar_button}>
            {props.type_el == "popup" ? <button onClick={e => dispatch(axiosConsultationCalendar(props.usId, slot_id))}>записаться</button> : !slot_id && !props.usId ? <button disabled={!slot_id ? true : false}>записаться</button>:
            <Link to={"../payment/" + props.usId + "/" + slot_id}>
                <button disabled={!slot_id ? true : false}>записаться</button>
            </Link>}
        </div>
    </div> : <Loader />
    )
}
export default Calendar;