import React from "react";
import s from './InfoModal.module.css';
import { useEffect, useState } from "react";
import info from '../../img/info.png';
const InfoModal = (props) => {
    let [isShown, setIsShown] = useState(false);
    return (
        <div>
            <div className={s.infoFull}>
                <img src={info} alt="" onClick={e => setIsShown(isShown = !isShown)} />
                {isShown ? <div className={s.infoText}>
                    <p>{props.text}</p>
                </div> : ""}

            </div>
        </div>
    )
}
export default InfoModal;