import React from "react";
import s from './Modal_calendar.module.css';
import Button from "../../Button/Button";
import Calendar from "../../Calendar/Calendar";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { consultationModalAction } from "../../../base/Reducers/ConsultationReducer";
const ModalCalendar = (props) => {
    let dispatch = useDispatch();
    let [showWindow, setWindow] = useState(false);
    let statusModal = useSelector((state) => state.consultation.statusModal)
    const config = useSelector((state) => state.config.config);
    useEffect(() => {
        if (statusModal)
            setWindow(false);
    }, [statusModal])
    useEffect(() => {
        if (!showWindow) {
            document.body.style.overflow = "auto";
        }
        if (showWindow) {
            document.body.style.overflow = "hidden";
        }
    }, [showWindow])
    return (
        <div>
            <div onClick={e => {
                setWindow(true)
                dispatch(consultationModalAction(false));
            }}>
                {props.type_of === "1" ? <p className={s.link_blue} style={{ color: config?.config.colors.color10 }}>Изменить дату и время приёма</p> : <Button
                    type={'submit'}
                    class={'btn orange'}
                    text={'перенести'}
                />}
            </div>
            {showWindow ? <div className={s.Cancel_Record_full}>
                <div className={s.Cancel_Record_block}>
                    <div className={s.Cart_close + " " + s.black} onClick={e => setWindow(false)}>
                        &times;
                    </div>
                    <div>
                        <h1 className={s.title} style={{ color: config?.config.colors.color2 }}>Перенести запись</h1>
                    </div>
                    <Calendar type_el="popup" />
                </div>
            </div> : ""
            }
        </div>
    )
}
export default ModalCalendar;