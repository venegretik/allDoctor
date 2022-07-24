import React from "react";
import s from './ChatModal.module.css';
import chat from '../../../img/Chat_icon.png'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosConsultationChat } from "../../../base/asyncActions/getConsultation";

const ChatModal = () => {
    let dispatch = useDispatch();
    let [showWindow, setWindow] = useState(false);
    return (
        <div>
            <div className={s.Chat_icon}>
                <div className={s.Chat_mod} onClick={e=> setWindow(true)}>
                    <img src={chat} alt="" />
                    <p>Чат</p>
                </div>
                {showWindow ? <div className={s.Chat_full}>
                    <div className={s.Cart_slose} onClick={e => setWindow(false)}>
                        x
                    </div>
                    <div className={s.Chat_list}>
                        <ul>
                            <li>Акне</li>
                            <li>Акне</li>
                            <li>Акне</li>
                            <li>Акне</li>
                        </ul>
                        <button onClick={e =>dispatch(axiosConsultationChat())}>начать чат</button>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>

                        </div>
                    </div>
                </div> : ""}
            </div>

        </div>
    )
}
export default ChatModal;