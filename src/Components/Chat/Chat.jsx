import React from "react";
import s from "./Chat.module.css";
import chat from "../../img/chat.png";
import chatMessage from "../../img/chat_message.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosConsultationChat } from "../../base/asyncActions/getConsultation";
import Button from "../Button/Button";
const Chat = () => {
  let dispatch = useDispatch();
  const config = useSelector((state) => state.config.config);
  let [showWindow, setWindow] = useState(false);
  let [chatShow, setChat] = useState(false);
  let num = 0;
  
  let itemChat = config?.module.chat.reasons.map(el => <li key={num++} style={{ color: config?.config.colors.color2, backgroundColor: config?.config.colors.color7 }} onClick={e =>setChat(true)}><button>{el}</button></li>);
  return config.module.chat ? (
    <div>
    {showWindow ? <div className="background" onClick={e => setWindow(false)}></div> : ""}
      <div className={s.Chat_icon}>
        <img alt="" src={chat} onClick={(e) => setWindow(true)} />
        {showWindow ? (
          <div className={s.Chat_full}>
            <div
              className={s.Cart_slose + " black_config"}
              onClick={(e) => setWindow(false)}
            >
              &times;
            </div>

            {chatShow ? (
              <div className={s.Chat_message}>
                <div className={s.Chat_message_title}>
                  <img alt=""
                    src={config.config.images.notify}
                  />
                  <div className={s.GreenDot}></div>
                  <div
                    className={s.DoctorName + " black_config"}
                  >
                    <b className={s.Font_size14}>
                      Смирнов Владислав Владимирович
                    </b>
                    <p className={s.Font_size14 + " gray_config"}>
                      В сети
                    </p>
                  </div>
                </div>
                <div
                  className={s.main_message + " black_config"}
                  style={{ color: config?.config.colors.color2 }}
                >
                  <div className={s.main_messageText}>
                    <p className={s.Font_size14 + " gray_config"}>
                      В сети
                    </p>
                    <div className={s.MessageDoctor}>
                      <span>
                        <p
                          className={s.MessageText}
                          style={{ background: config?.config.colors.color11 }}
                        >
                          Здравствуйте, чем мы можем Вам помочь?
                        </p>
                      </span>
                      <p className={s.TimeMess + " gray_config"}>12:15</p>
                    </div>
                    <div className={s.MessageMe}>
                      <span>
                        <p
                          className={s.MessageText}
                          style={{ background: config?.config.colors.color3 }}
                        >
                          Здравствуйте, чем мы можем Вам помочь?
                        </p>
                      </span>
                      <p className={s.TimeMess + " gray_config"}>12:15</p>
                    </div>
                  </div>
                </div>
                <div className={s.message_send}>
                  <div className={s.message_input}>
                    <input type="text" placeholder="Написать сообщение..." />
                    <img alt="" src={chatMessage} className={s.imgAbsol} />
                  </div>
                </div>
              </div>
            ) : (
              <div className={s.Chat_list}>
                <ul>{itemChat}</ul>
                <div
                  onClick={(e) => {
                    dispatch(axiosConsultationChat());
                    setChat(true);
                  }}
                >
                  <Button
                    className={s.Font_size16}
                    type={"submit"}
                    class={"btn blue"}
                    text={"начать чат"}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    ""
  );
};
export default Chat;
