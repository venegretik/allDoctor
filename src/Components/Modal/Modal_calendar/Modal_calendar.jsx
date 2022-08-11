import React from "react";
import s from './Modal_calendar.module.css';
import Button from "../../Button/Button";
import Calendar from "../../Calendar/Calendar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const ModalCalendar = () => {
    let [showWindow, setWindow] = useState(false);
    let statusModal = useSelector((state) => state.consultation.statusModal)
    useEffect(() => {
        if (statusModal)
            setWindow(false);
    }, [statusModal])
    return (
        <div>
            <div onClick={e => setWindow(true)}>
                <Button
                    type={'submit'}
                    class={'btn orange'}
                    text={'перенести'}
                />
            </div>
            {showWindow ? <div className={s.Cancel_Record_full}>
                <div className={s.Cancel_Record_block}>
                    <div className={s.Cart_close + " " + s.black} onClick={e => setWindow(false)}>
                        +
                    </div>
                    <div>
                        <h1 className={s.title}>Перенести запись</h1>
                    </div>
                    <Calendar type_el="popup" />
                </div>
            </div> : ""
            }
        </div>
    )
}
export default ModalCalendar;