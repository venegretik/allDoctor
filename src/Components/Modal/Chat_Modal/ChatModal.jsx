import React from "react";
import s from './ChatModal.module.css';
import chat from '../../../img/Chat_icon.svg';
import chatMessage from '../../../img/chat_message.png'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosConsultationChat } from "../../../base/asyncActions/getConsultation";
import {BottomSheet} from 'react-spring-bottom-sheet'
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
            {showWindow ? <>
                {availableScreenWidth <= 480 ? <BottomSheet open={showWindow}
                    onDismiss={() => setWindow(false)}>
                    <div>
                        <div className={s.Cart_slose + " black_config"} onClick={e => setWindow(false)}>
                            &times;
                        </div>

                        {chatShow ? <div className={s.Chat_message}>
                            <div className={s.Chat_message_title}>
                                <img src="https://api.telemed.dev-h.ru/images/ui/doc3.png" alt="" />
                                <div className={s.GreenDot}></div>
                                <div className={s.ChatText + " black_config"}>
                                    <b className={s.Font_size14}>Смирнов Владислав Владимирович</b>
                                    <p className={s.Font_size14}>В сети</p>
                                </div>
                            </div>
                            <div className={s.main_message + " black_config"}>
                                <div className={s.main_messageText}>
                                    <p className={s.Font_size14  + " gray_config"}>В сети</p>
                                    <div className={s.MessageDoctor}>
                                        <span >
                                            <p className={s.MessageText} style={{ background: config?.config.colors.color11 }}>Здравствуйте, чем мы можем Вам помочь?</p>
                                        </span>
                                        <p className={"gray_config"}>12:15</p>
                                    </div>
                                    <div className={s.MessageMe} >
                                        <span >
                                            <p className={s.MessageText} style={{ background: config?.config.colors.color3 }}>Здравствуйте, чем мы можем Вам помочь?</p>
                                        </span>
                                        <p className={"gray_config"}>12:15</p>
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
                    </div>
                </BottomSheet> : <div className={s.Chat_full}>
                    <div className={s.Chat_close} onClick={e => setWindow(false)}>

                    </div>
                    <div className={s.Cart_slose + " black_config"} onClick={e => setWindow(false)}>
                        &times;
                    </div>

                    {chatShow ? <div className={s.Chat_message}>
                        <div className={s.Chat_message_title}>
                            <img src="https://api.telemed.dev-h.ru/images/ui/doc3.png" alt="" />
                            <div className={s.GreenDot}></div>
                            <div className={s.ChatText + " black_config"}>
                                <b className={s.Font_size14}>Смирнов Владислав Владимирович</b>
                                <p className={s.Font_size14 + " gray_config"}>В сети</p>
                            </div>
                        </div>
                        <div className={s.main_message + " black_config"}>
                            <div className={s.main_messageText}>
                                <p className={s.Font_size14 + " gray_config"}>В сети</p>
                                <div className={s.MessageDoctor}>
                                    <span >
                                        <p className={s.MessageText} style={{ background: config?.config.colors.color11 }}>Здравствуйте, чем мы можем Вам помочь?</p>
                                    </span>
                                    <p className="gray_config">12:15</p>
                                </div>
                                <div className={s.MessageMe} >
                                    <span >
                                        <p className={s.MessageText} style={{ background: config?.config.colors.color3 }}>Здравствуйте, чем мы можем Вам помочь?</p>
                                    </span>
                                    <p className="gray_config">12:15</p>
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
                </div>} </> : ""}
        </div>

    )
}
export default ChatModal;