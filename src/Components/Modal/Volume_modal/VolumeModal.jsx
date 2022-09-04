import React from "react";
import s from "./VolumeModal.module.css";
import { useState } from "react";
import volume from "../../../img/volume_down.png";
import { useDispatch, useSelector } from "react-redux";
import { ProfileAudioAction } from "../../../base/Reducers/UserReducer";
const ModalUnityChat = () => {
    let dispatch = useDispatch();
    let VolumeShow = useSelector((state) => state.profile.VolumeShow);
    return (
        <div className={s.VolumeModal}>
            <li onClick={(e) => {
                dispatch(ProfileAudioAction(VolumeShow ? false : true))
            }}>
            <div className={s.icon_back}>
                <img alt="" src={volume} />
            </div>
            <p>Громкость</p>
        </li>
            {
        VolumeShow ? <div className={s.VolumeModalInput}>
            <div className={s.VolumeModalBlock}>
                <input type="range" min="0" max="100" orient="vertical"></input>
                <img alt="" src={volume} />
            </div>
        </div> : ""
    }
        </div >
    );
}
export default ModalUnityChat;