import React from "react";
import s from "./Video.module.css";
import videoImage from "../../../img/video_photo.png";
import volume from "../../../img/volume_down.png";
import micro_off from "../../../img/mic_off.png";
import videocam from "../../../img/videocam_off.png";
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
                    <ul>
                        <li>
                            <div className={s.icon_back}>
                                <img src={volume} alt="" />
                            </div>
                            <p>Громкость</p>
                        </li>
                        <li>
                            <div className={s.icon_back}>
                                <img src={volume} alt="" />
                            </div>
                            <p>Выключить микрофон</p>
                        </li>
                        <li>
                            <div className={s.icon_back}>
                                <img src={volume} alt="" />
                            </div>
                            <p>Выключить камеру</p>
                        </li>
                        <li>
                            <div className={s.icon_back}>
                                <img src={volume} alt="" />
                            </div>
                            <p>Завершить</p>
                        </li>
                        <li>
                            <div className={s.icon_back}>
                                <img src={volume} alt="" />
                            </div>
                            <p>Настройки</p>
                        </li>
                    </ul>
                </div>
                <div className={s.VideoChat}>
                    <div className={s.VideoChatMessage}>
                        <p className={s.VideoChatDoctor}>Значимость этих проблем настолько очевидна, что укрепление и развитие внутренней структуры способствует подготовке и реализации приоритизации разума над эмоциями.</p>
                        <p className={s.VideoChatMy}>Здравствуйте</p>
                    </div>
                    <div className={s.MessageText}>
                        <input type="text" placeholder="Введите текст сообщения..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Video;