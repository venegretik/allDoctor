import React from "react";
import s from "./VolumeModal.module.css";
import { useState } from "react";
import volume from "../../../img/volume_down.png"
const ModalUnityChat = () => {
    let [showWindow, setWindow] = useState(false);
    return (
        <div className={s.VolumeModal}>
            <li onClick={(e) => setWindow(current => current = !current)}>
                <div className={s.icon_back}>
                    <img alt="" src={volume}  />
                </div>
                <p>Громкость</p>
            </li>
            {showWindow ? <div className={s.VolumeModalInput}>
                <div className={s.VolumeModalBlock}>
                    <input type="range" min="0" max="100" orient="vertical"></input>
                    <img alt="" src={volume}  />
                </div>
            </div> : ""}
        </div>
    );
}
export default ModalUnityChat;