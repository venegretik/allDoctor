import React from "react";
import s from "./ModalContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import arrow from "../../img/arrow-left.png";
import { getConfigModalStatus } from "../../base/Reducers/configReducer";
import RequestMoney from "./Request_money/RequestMoney";
import CancelRecord from "./Cancel_record/Cancel_Record";
import { BottomSheet } from 'react-spring-bottom-sheet'
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
    const status = useSelector((state) => state.config.statusModal);
    useEffect(() => {
        setWindow(status);
    }, [status])
    return (
        <div>

            {props.typeModalCont === "CancelRecord" ?
                <div className={s.Cart_close + " " + s.black}
                    onClick={(e) => dispatch(getConfigModalStatus(true))}>
                    &times;
                </div> : props.typeModalCont === "RequestMoney" ?
                    <div className={s.blue + " " + s.Request} onClick={(e) => dispatch(getConfigModalStatus(true))}>
                        <img alt="" src={arrow} />
                        <p className={"blue_config "} >Вывести средства</p>
                    </div> : ""}
            {
                showWindow ? <>
                    {availableScreenWidth <= 480 ? <BottomSheet open={showWindow}
                        onDismiss={() => dispatch(getConfigModalStatus(false))}>
                        {props.typeModalCont === "CancelRecord" ? <CancelRecord {...props} /> : props.typeModalCont === "RequestMoney" ? <RequestMoney {...props} /> : ""}
                    </BottomSheet> : <div className={s.Cancel_Record_full}>
                        <div className={s.background} onClick={() => dispatch(getConfigModalStatus(false))}></div>
                        <div className={s.Cancel_Record_block}>
                            {props.typeModalCont === "CancelRecord" ? <CancelRecord {...props} /> : props.typeModalCont === "RequestMoney" ? <RequestMoney {...props} /> : ""}
                        </div>
                    </div>}
                </> : ""
            }
        </div>
    )
}
export default ModalContainer;