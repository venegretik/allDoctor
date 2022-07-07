import React from "react";
import s from './Utility.module.css';
import Select_custom from "../../../../Components/Select/Select";
import Cancel_Record from "../../../../Components/Cancel_record/Cancel_Record";
import New_review from "../../../../Components/New_review/New_review";
import Chat from "../../../../Components/Chat/Chat";
const Utility = () => {
    return(
        <div className={s.Utility_full}>
            <div className={s.Utility_title}>
                <h1>Проверка оборудования</h1>
            </div>
            <div className={s.Utility_text}>
                <p>Настройки видео</p>
                <Select_custom />
            </div>
            <div className={s.Utility_Check_video}>
                <div className={s.Utility_Check_video_content}>
                    <img src="" alt="" />
                    <button>Проверить видео</button>
                </div>
            </div>
            <div className={s.Utility_configuration_full}>
                <p className={s.check_volume}>Настройки звука</p>
                <div className={s.Utility_configuration}>
                    <div className={s.Utility_configuration_video}>
                        <p>Устройство ввода</p>
                        <select name="" id=""></select>
                        <input type="text" />
                    </div>
                    <div className={s.Utility_configuration_volume}>
                        <p>Устройство вывода</p>
                        <select name="" id=""></select>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className={s.Utility_volume}>
                <p>Проверка микрофона</p>
                <div>

                </div>
            </div>
            <Chat />
        </div>
    )
}
export default Utility;