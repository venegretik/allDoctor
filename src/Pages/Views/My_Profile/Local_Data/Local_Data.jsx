import React from "react";
import s from '../My_Profile.module.css';
import pen from '../../img/pen.png'
const Local_Data = () => {
    return (
        <div className={s.My_content}>
                <div className={s.My_content_title}>
                    <h1>Личные данные</h1>
                </div>
                <div className={s.My_content_container}>
                    <div className={s.My_content_top}>
                        <div className={s.My_content_top_image}>
                            <img src="https://api.telemed.dev-h.ru/images/profiles/profile.png" alt="" />
                        </div>
                        <div className={s.My_content_top_content}>
                            <div className={s.My_content_top_title}>
                                <h1>Смирнов Владислав Владимирович</h1>
                                <img src={pen} alt="" />
                            </div>
                            <p>+7 (999) 123-56-96</p>
                        </div>
                    </div>
                    <div className={s.My_content_bottom}>
                        <span>
                            <p>Дата рождения:</p>
                            <p> 27.05.1987</p>
                        </span>
                        <span>
                            <p>Электронная почта:</p>
                            <p>smirnoff@yandex.ru</p>
                        </span>
                        <span>
                            <p>Пол:</p>
                            <p>Мужской</p>
                        </span>
                        <span>
                            <p>Баланс:</p>
                            <p>2400₽</p>
                        </span>
                    </div>
                </div>
            </div>
    )
}
export default Local_Data;