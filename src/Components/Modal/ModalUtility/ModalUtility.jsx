import React from "react";
import UtilityBlock from "../../UtilityBlock/UtilityBlock";
import s from "./ModalUtility.module.css";
import seeting from "../../../img/seeting.png";
import { useEffect, useState, useRef } from "react";
const ModalUtility = () => {
    let [showWindow, setWindow] = useState(false);
    return (
        <div>
            <div onClick={e => setWindow(true)}>
                <div className={s.icon_back}>
                    <img src={seeting} alt="" />
                </div>
                <p>Настройки</p>
            </div>
            {showWindow ? <div className={s.Cancel_Record_full}>

                <div className={s.Cancel_Record_block}>
                    <div className={s.Cart_close + " " + s.black} onClick={e => setWindow(false)}>
                        +
                    </div>
                    <UtilityBlock />
                </div>
            </div> : ""}
        </div>
    )
}
export default ModalUtility;