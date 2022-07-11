import React from "react";
import s from './ReplaceData.module.css';
import upload from '../../../../img/upload.png'
const ReplaceData = () => {
    return (
        <div>
            <div className={s.Profile_data}>
                <div className={s.Profile_data_download_img}>
                    <img src="https://api.telemed.dev-h.ru/images/profiles/profile.png" alt="" />
                    <img src={upload} alt=""  className={s.upload}/>
                </div>
                <b className={s.Font_size24}>Смирнов Владислав Владимирович</b>
            </div>
            <div className={s.Profile_replace_tel}>
                <p className={s.Font_size16}>Телефон</p>
                <div className={s.Profile_replace_tel_data}>
                    <p className={s.Font_size16}>+7 999 156 46 75</p>
                    <p className={s.Profile_replace_tel_link + " " + s.Font_size14}>Изменить</p>
                </div>
            </div>
            <div className={s.Profile_replace_tel}>
                <p className={s.Font_size16}>Телефон</p>
                <div className={s.Profile_replace_tel_data}>
                    <p className={s.Font_size16}>+7 999 156 46 75</p>
                    <p className={s.Profile_replace_tel_link + " " + s.Font_size14}>Изменить</p>
                </div>
            </div>
            <form action="">

            </form>
        </div>
    )
}
export default ReplaceData;