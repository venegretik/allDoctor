import React from "react";
import s from './Chat.module.css';
import chat from '../../img/chat.png'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosConsultationChat } from "../../base/asyncActions/getConsultation";
const Chat = () => {
    let dispatch = useDispatch();
    const config = useSelector((state) => state.config.config);
    let [showWindow, setWindow] = useState(false);
    let [chatShow, setChat] = useState(false);
    let num = 0;
    let itemChat = config?.module.chat.reasons.map(el => <li key={num++}>{el}</li>);
    return (
        config.module.chat ?
            <div>
                <div className={s.Chat_icon}>
                    <img src={chat} alt="" onClick={e => setWindow(true)} />
                    {showWindow ? <div className={s.Chat_full}>
                        <div className={s.Cart_slose} onClick={e => setWindow(false)}>
                            x
                        </div>

                        {chatShow ? <div className={s.Chat_message}>
                            <div className={s.Chat_message_title}>
                                <img src="https://api.telemed.dev-h.ru/images/ui/doc3.png" alt="" />
                                <div>
                                    <b className={s.Font_size14}>Смирнов Владислав Владимирович</b>
                                    <p className={s.Font_size14}>В сети</p>
                                </div>
                            </div>
                            <div className={s.main_message}>

                            </div>
                            <div className={s.message_send}>
                                <div>
                                    <input type="text" placeholder="Написать сообщение..." />
                                </div>
                            </div>
                        </div> : <div className={s.Chat_list}>
                            <ul>
                                {itemChat}
                            </ul>
                            <button onClick={e => {
                                dispatch(axiosConsultationChat())
                                setChat(true);
                            }}>начать чат</button>
                        </div>}
                    </div> : ""}
                </div>

            </div> : ""
    )
}
export default Chat;