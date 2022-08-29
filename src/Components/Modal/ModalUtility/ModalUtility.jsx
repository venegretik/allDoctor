import React from "react";
import UtilityBlock from "../../UtilityBlock/UtilityBlock";
import s from "./ModalUtility.module.css";
import seeting from "../../../img/seeting.png";
import { useDispatch } from "react-redux";
import { ProfileUtilityAction } from "../../../base/Reducers/UserReducer";
import { useEffect, useState } from "react";
const ModalUtility = (props) => {
    let dispatch = useDispatch();
    return (
        <div>
            <div>
                <div className={s.Cancel_Record_block}>
                    <div className={s.Cart_close + " " + s.black} onClick={e => {
                        props.setWindow(false)
                        dispatch(ProfileUtilityAction(false))
                    }}>
                        &times;
                    </div>
                    <div className={s.UnityTitle}>
                        <h1>Настройки</h1>
                    </div>
                    <UtilityBlock />
                </div>
            </div>
        </div>
    )
}
export default ModalUtility;