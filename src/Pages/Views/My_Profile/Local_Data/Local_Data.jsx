import React from "react";
import s from '../My_Profile.module.css';
import pen from '../../../../img/pen.png'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { axiosProfile } from "../../../../base/asyncActions/Profile";
const Local_Data = () => {
    let dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    useEffect(() => {
        dispatch(axiosProfile());
      }, []);
    return (
        <div className={s.My_content}>
                <div className={s.My_content_title}>
                    <h1>Личные данные</h1>
                </div>
                <div className={s.My_content_container}>
                    <div className={s.My_content_top}>
                        <div className={s.My_content_top_image}>
                            <img src={profile.photo} alt="" />
                        </div>
                        <div className={s.My_content_top_content}>
                            <div className={s.My_content_top_title}>
                                <h1>{profile.firstname + " " + profile.lastname + " " + profile.secondname}</h1>
                                <img src={pen} alt="" />
                            </div>
                            <p>{profile.phone}</p>
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