import React from "react";
import s from "../Chat_Modal/ChatModal.module.css";
import { useEffect, useState } from "react";
import volume from "../../../img/volume_down.png"
import { useSelector } from "react-redux";
import { BottomSheet } from "react-spring-bottom-sheet";
const ModalUnityChat = () => {
    let [showWindow, setWindow] = useState(false);
    useEffect(() => {
        if (!showWindow) {
            document.body.style.overflow = "auto"
        }
        if (showWindow) {
            document.body.style.overflow = "hidden"
        }
    }, [showWindow])
    const config = useSelector((state) => state.config.config);
    return (
        <div className={s.ChatUtility}>
            <li onClick={(e) => setWindow(true)}>
                <div className={s.icon_back}>
                    <img src={volume} alt="" />
                </div>
                <p>Чат</p>
            </li>
            {showWindow ? <BottomSheet open={showWindow}
                onDismiss={() => setWindow(false)}>
                <div className={s.Chat_message}>
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
                            <p className={s.Font_size14} style={{ color: config?.config.colors.color4 }}>В сети</p>
                            <div className={s.MessageDoctor}>
                                <span >
                                    <p className={s.MessageText} style={{ background: config?.config.colors.color11 }}>Здравствуйте, чем мы можем Вам помочь?</p>
                                </span>
                                <p style={{ color: config?.config.colors.color4 }}>12:15</p>
                            </div>
                            <div className={s.MessageMe} >
                                <span >
                                    <p className={s.MessageText} style={{ background: config?.config.colors.color3 }}>Здравствуйте, чем мы можем Вам помочь?</p>
                                </span>
                                <p style={{ color: config?.config.colors.color4 }}>12:15</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.message_send}>
                        <div className={s.message_input}>
                            <input type="text" placeholder="Написать сообщение..." />
                            <img src={"chatMessage"} className={s.imgAbsol} alt="" />
                        </div>
                    </div>
                </div>
            </BottomSheet> : ""}
        </div>
    )
}
export default ModalUnityChat;