import React from "react";
import UtilityBlock from "../../UtilityBlock/UtilityBlock";
import s from "./ModalUtility.module.css";
import seeting from "../../../img/seeting.png";
import { useDispatch } from "react-redux";
import { ProfileUtilityAction } from "../../../base/Reducers/UserReducer";
import { useEffect, useState } from "react";
const ModalUtility = () => {
    let dispatch = useDispatch();
    let [showWindow, setWindow] = useState(false);
    if (showWindow)
        dispatch(ProfileUtilityAction(true))
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
            <div className={s.moduleIcon}>
                <div className={s.icon_back} onClick={e => setWindow(true)}>
                    <img alt="" src={seeting}  />
                </div>
                <p>Настройки</p>
            </div>
            {showWindow ? <div className={s.Cancel_Record_full}>
        {showWindow ? <div className="background" onClick={e => {setWindow(false)
                        dispatch(ProfileUtilityAction(false))}}></div> : ""}
                <div className={s.Cancel_Record_block}>
                    <div className={s.Cart_close + " " + s.black} onClick={e => {
                        setWindow(false)
                        dispatch(ProfileUtilityAction(false))
                    }}>
                        &times;
                    </div>
                    <div className={s.UnityTitle}>
                        <h1>Настройки</h1>
                    </div>
                    <UtilityBlock />
                </div>
            </div> : ""}
        </div>
    )
}
export default ModalUtility;