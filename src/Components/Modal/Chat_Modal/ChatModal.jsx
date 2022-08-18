import React from "react";
import s from './ChatModal.module.css';
import chat from '../../../img/Chat_icon.png';
import chatMessage from '../../../img/chat_message.png'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosConsultationChat } from "../../../base/asyncActions/getConsultation";
const ChatModal = () => {
    let dispatch = useDispatch();
    const config = useSelector((state) => state.config.config);
    let [showWindow, setWindow] = useState(false);
    let [chatShow, setChat] = useState(false);
    let num = 0;
    const availableScreenWidth = window.screen.availWidth;
    useEffect(() => {
        if (availableScreenWidth <= 480) {

            if (!showWindow) {
                document.body.style.overflow = "auto"
            }
            if (showWindow) {
                document.body.style.overflow = "hidden"
            }

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showWindow])
    let itemChat = config?.module.chat.reasons.map(el => <li key={num++} style={{ color: config?.config.colors.color2, backgroundColor: config?.config.colors.color7 }}>{el}</li>);
    return (
        <div className={s.Chat_icon}>
            <div className={s.Chat_mod} onClick={e => setWindow(true)}>
                <img src={chat} alt="" />
                <p>Чат</p>
            </div>
            {showWindow ? <div className={s.Chat_full}>
                <div className={s.Chat_close} onClick={e => setWindow(false)}>

                </div>
                <div className={s.Cart_slose} onClick={e => setWindow(false)} style={{ color: config?.config.colors.color2 }}>
                    &times;
                </div>

                {chatShow ? <div className={s.Chat_message}>
                    <div className={s.Chat_message_title}>
                        <img src="https://api.telemed.dev-h.ru/images/ui/doc3.png" alt="" />
                        <div className={s.GreenDot}></div>
                        <div className={s.ChatText} style={{ color: config?.config.colors.color2 }}>
                            <b className={s.Font_size14}>Смирнов Владислав Владимирович</b>
                            <p className={s.Font_size14}>В сети</p>
                        </div>
                    </div>
                    <div className={s.main_message} style={{ color: config?.config.colors.color2 }}>
                        <div className={s.main_messageText}>
                            <p className={s.Font_size14}>В сети</p>
                            <div className={s.MessageDoctor}>
                                <span >
                                    <p className={s.MessageText} style={{ background: config?.config.colors.color4 }}>Здравствуйте, чем мы можем Вам помочь?</p>
                                </span>
                                <p>12:15</p>
                            </div>
                            <div className={s.MessageMe} >
                                <span >
                                    <p className={s.MessageText} style={{ background: config?.config.colors.color3 }}>Здравствуйте, чем мы можем Вам помочь?</p>
                                </span>
                                <p>12:15</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.message_send}>
                        <div className={s.message_input}>
                            <input type="text" placeholder="Написать сообщение..." />
                            <img src={chatMessage} className={s.imgAbsol} alt="" />
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
    )
}
export default ChatModal;