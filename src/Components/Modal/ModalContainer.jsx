import React from "react";
import s from "./ModalContainer.module.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import arrow from "../../img/arrow-left.png";
import seeting from "../../img/seeting.png";
import Button from "../Button/Button";
import { consultationModalAction } from "../../base/Reducers/ConsultationReducer";
import ModalUtility from "./ModalUtility/ModalUtility";
import { ProfileUtilityAction } from "../../base/Reducers/UserReducer";
import RequestMoney from "./Request_money/RequestMoney";
import CancelRecord from "./Cancel_record/Cancel_Record";
import ModalCalendar from "./Modal_calendar/Modal_calendar";
import { BottomSheet } from 'react-spring-bottom-sheet'
import ChangeLogin from "./Change_login/Change_login";
import 'react-spring-bottom-sheet/dist/style.css'
const ModalContainer = (props) => {
    let dispatch = useDispatch();
    let [showWindow, setWindow] = useState(false);
    const availableScreenWidth = window.screen.availWidth;
    useEffect(() => {
        if (!showWindow) {
            document.body.style.overflow = "auto"
        }
        if (showWindow) {
            document.body.style.overflow = "hidden"
        }
    }, [showWindow])
    return (
        <div>

            {props.typeModalCont === "CancelRecord" ?
                <div className={s.Cart_close + " " + s.black}
                    onClick={(e) => setWindow(true)}>
                    &times;
                </div> : props.typeModalCont === "RequestMoney" ?
                    <div className={s.blue + " " + s.Request} onClick={(e) => setWindow(true)}>
                        <img alt="" src={arrow} />
                        <p className={"blue_config "} >Вывести средства</p>
                    </div> : props.typeModalCont === "ChangeLogin" ? <p
                        onClick={() => setWindow(true)}
                        className={s.Profile_replace_tel_link + " " + s.Font_size14 + " blue_config"}
                    >
                        Изменить
                    </p> : props.typeModalCont === "ModalCalendar" ? <div onClick={e => {
                        setWindow(true)
                        dispatch(consultationModalAction(false));
                    }}>
                        {props.type_of === "1" ? <p className={s.link_blue + " " + s.Font_size14 + " blue_config"}>Изменить дату и время приёма</p> : <Button
                            type={'submit'}
                            class={'btn orange'}
                            text={'перенести'}
                        />}
                    </div> : props.typeModalCont === "ModalUtility" ?
                        <div className={s.moduleIcon}>
                            <div className={s.icon_back} onClick={e => {setWindow(true)
        dispatch(ProfileUtilityAction(true))}}>
                                <img alt="" src={seeting} />
                            </div>
                            <p>Настройки</p>
                        </div> : ""}
            {
                showWindow ? <>
                    {availableScreenWidth <= 480 ? <BottomSheet open={showWindow}
                        onDismiss={() => setWindow(false)}>
                        {props.typeModalCont === "CancelRecord" ? <CancelRecord {...props} setWindow={setWindow} /> : props.typeModalCont === "RequestMoney" ? <RequestMoney {...props} setWindow={setWindow} /> : props.typeModalCont === "ChangeLogin" ? <ChangeLogin {...props} setWindow={setWindow} /> : props.typeModalCont === "ModalCalendar" ? <ModalCalendar {...props} setWindow={setWindow} /> : ""}
                    </BottomSheet> : <div className={s.Cancel_Record_full}>
                        <div className={s.background} onClick={() => {setWindow(false)
                        dispatch(ProfileUtilityAction(false))}}></div>
                        <div className={s.Cancel_Record_block}>
                            {props.typeModalCont === "CancelRecord" ? <CancelRecord {...props} setWindow={setWindow} /> : props.typeModalCont === "RequestMoney" ? <RequestMoney {...props} setWindow={setWindow} /> : props.typeModalCont === "ChangeLogin" ? <ChangeLogin {...props} setWindow={setWindow} /> : props.typeModalCont === "ModalCalendar" ? <ModalCalendar {...props} setWindow={setWindow} /> : props.typeModalCont === "ModalUtility" ? <ModalUtility {...props} setWindow={setWindow} /> : ""}
                        </div>
                    </div>}
                </> : ""
            }
        </div>
    )
}
export default ModalContainer;