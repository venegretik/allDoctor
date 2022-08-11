import React from "react";
import s from "./Video.module.css";
import videoImage from "../../../img/video_photo.png";
import volume from "../../../img/volume_down.png";
import close from "../../../img/close.png";
import micro_off from "../../../img/mic_off.png";
import videocam from "../../../img/videocam_off.png";
import seeting from "../../../img/seeting.png";
import ModalUtility from "../../../Components/Modal/ModalUtility/ModalUtility";
import cup from "../../../img/cup.png";
import message from "../../../img/chat_message.png";
const Video = () => {
    return (
        <div className={s.VideoFull + " " + s.Container + " Container"}>
            <div className={s.VideoTitle}>
                <h1>Белкина Ирина Николаевна</h1>
                <p>Акушер • Гинеколог • Гинеколог-эндокринолог</p>
                <p>Стаж 12 лет • Врач высшей категории • 728 консультаций</p>
            </div>
            <div className={s.VideoBlock}>
                <div className={s.VideoBlockImage}>
                    <img src={videoImage} alt="" />
                    <ul className={s.videoDesctop}>
                        <li>
                            <div className={s.icon_back}>
                                <img src={volume} alt="" />
                            </div>
                            <p>Громкость</p>
                        </li>
                        <li>
                            <div className={s.icon_back}>
                                <img src={micro_off} alt="" />
                            </div>
                            <p>Выключить микрофон</p>
                        </li>
                        <li>
                            <div className={s.icon_back}>
                                <img src={videocam} alt="" />
                            </div>
                            <p>Выключить камеру</p>
                        </li>
                        <li>
                            <div className={s.icon_back + " " + s.icon_close}>
                            <img src={close} alt="" />
                            </div>
                            <p>Завершить</p>
                        </li>
                        <li>
                            <ModalUtility />
                        </li>
                    </ul>
                    <ul className={s.videoMobile}>
                        <li>
                            <div className={s.icon_back}>
                                <img src={volume} alt="" />
                            </div>
                            <p>Громкость</p>
                        </li>
                        <li>
                            <div className={s.icon_back}>
                                <img src={micro_off} alt="" />
                            </div>
                            <p>Выключить микрофон</p>
                        </li>
                        <li>
                            <div className={s.icon_back}>
                                <img src={videocam} alt="" />
                            </div>
                            <p>Выключить камеру</p>
                        </li>
                        <li>
                            <div className={s.icon_back + " " + s.icon_close}>
                            <img src={close} alt="" />
                            </div>
                            <p>Завершить</p>
                        </li>
                    </ul>
                </div>
                <div className={s.VideoChat}>
                    <div className={s.VideoChatMessage}>
                        <div className={s.MessageDoctor}>
                            <span >
                                <p className={s.VideoChatDoctor}>Значимость этих проблем настолько очевидна, что укрепление и развитие внутренней структуры способствует подготовке и реализации приоритизации разума над эмоциями.</p>
                            </span>
                            <p>12:15</p>
                        </div>
                        <span>

                            <div className={s.MessageDoctorMy}>
                                <span >
                                    <p className={s.VideoChatMy}>Здравствуйте</p>
                                </span>
                                <p>12:15</p>
                            </div>
                        </span>
                    </div>
                    <div className={s.MessageText}>
                        <img src={cup} alt="" />
                        <div className={s.MessageImg}>
                        <input type="text" placeholder="Введите текст сообщения..." />
                        <img src={message} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Video;