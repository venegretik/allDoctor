import React from "react";
import s from './Modal_calendar.module.css';
import Button from "../../Button/Button";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import { useDispatch } from "react-redux";
const ModalCalendar = () => {
    let dispatch = useDispatch();
    let [showWindow, setWindow] = useState(false);
    return (
        <div>
            <div onClick={e => setWindow(true)}>
                <Button
                    type={'submit'}
                    class={'btn blue'}
                    text={'Записаться'}
                />
            </div>
            {showWindow ? <div className={s.Cancel_Record_full}>
                <div className={s.Cancel_Record_block}>
                    <div className={s.Cart_close + " " + s.black} onClick={e => setWindow(false)}>
                        +
                    </div>
                    <div>
                        <h1>Перенести запись</h1>
                    </div>
                    <Calendar type_el= "popup"/>
                </div>
            </div> : ""
            }
        </div>
    )
}
export default ModalCalendar;