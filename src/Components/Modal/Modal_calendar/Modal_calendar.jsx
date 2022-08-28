import React from "react";
import s from './Modal_calendar.module.css';
import Button from "../../Button/Button";
import Calendar from "../../Calendar/Calendar";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { consultationModalAction } from "../../../base/Reducers/ConsultationReducer";
import { BottomSheet } from 'react-spring-bottom-sheet'
const ModalCalendar = (props) => {
    let dispatch = useDispatch();
    let [showWindow, setWindow] = useState(false);
    let statusModal = useSelector((state) => state.consultation.statusModal)
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
    const availableScreenWidth = window.screen.availWidth;
    return (
        <div>
            <div onClick={e => {
                setWindow(true)
                dispatch(consultationModalAction(false));
            }}>
                {props.type_of === "1" ? <p className={s.link_blue + " blue_config"}>Изменить дату и время приёма</p> : <Button
                    type={'submit'}
                    class={'btn orange'}
                    text={'перенести'}
                />}
            </div>
            {showWindow ? <>
                {availableScreenWidth <= 480 ? <BottomSheet open={showWindow}
                    onDismiss={() => setWindow(false)}>
                    <div>
                        <div className={s.Cancel_Record_block}>
                            <div className={s.Cart_close + " " + s.black} onClick={e => setWindow(false)}>
                                &times;
                            </div>
                            <div>
                                <h1 className={s.title + " title_config"}>Перенести запись</h1>
                            </div>
                            <Calendar type_el="popup" />
                        </div>
                    </div>
                </BottomSheet> : <div className={s.Cancel_Record_full}>
        {showWindow ? <div className="background" onClick={e => setWindow(false)}></div> : ""}
                    <div className={s.Cancel_Record_block}>
                        <div className={s.Cart_close + " " + s.black} onClick={e => setWindow(false)}>
                            &times;
                        </div>
                        <div>
                            <h1 className={s.title + " title_config"}>Перенести запись</h1>
                        </div>
                        <Calendar doctor_id = {props.doctor_id ? props.doctor_id : ""} type_el="popup" />
                    </div>
                </div>}

            </> : ""
            }
        </div>
    )
}
export default ModalCalendar;