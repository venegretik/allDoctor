import React from "react";
import s from './InfoModal.module.css';
import { useEffect, useState } from "react";
import info from '../../img/info.png';
import { createPopper } from '@popperjs/core';
const InfoModal = (props) => {
    let [isShown, setIsShown] = useState(false);
    useEffect(() => {
        if (isShown) {
            const popcorn = document.querySelector('.' + props.classtwo);
            const tooltip = document.querySelector('.' + props.class);
            createPopper(popcorn, tooltip, {
                placement: 'right-start',
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShown])
    return (
        <div>
            <div className={s.infoFull}>
                <img src={info} alt="" className={props.classtwo} aria-describedby={props.class} onClick={e => setIsShown(isShown = !isShown)} />

                {isShown ? <div>
                    <div ></div>
                    <div className={s.infoText + " " + props.class} role={props.class}>
                        <p>{props.text}</p>
                        <div id="arrow" data-popper-arrow></div>
                    </div>
                </div> : ""}

            </div>
        </div>
    )
}
export default InfoModal;