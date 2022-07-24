import React from "react";
import s from './Chat.module.css';
import chat from '../../img/chat.png'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosConsultationChat } from "../../base/asyncActions/getConsultation";
const Chat = () => {
    let dispatch = useDispatch();
    let [showWindow, setWindow] = useState(false);
    return (
        <div>
            <div className={s.Chat_icon}>
                <img src={chat} alt="" onClick={e=> setWindow(true)}/>
                {showWindow ?<div className={s.Chat_full}>
                    <div className={s.Cart_slose} onClick={e=> setWindow(false)}>
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
export default Chat;