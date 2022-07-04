import React from "react";
import s from './Post_review.module.css';
import star from '../img/Rating_Star.png';
const Post_rewiew = () => {
    return (
        <div className={s.Review_full}>
            <div className={s.Review_title}>
                <h1>Оставить отзыв</h1>
            </div>
            <div className={s.Doctor_infos}>
                <div className={s.Doctor_avatar}>
                    <div className={s.Doctor_avatar_img}>
                        <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt="" />
                    </div>
                </div>
                <div className={s.Doctor_info + " " + s.black}>
                    <p className={s.gray}>Терапевт</p>
                    <h2>Смирнов Владислав Владимирович</h2>
                    <p className={s.Staj}>Стаж 19 лет • Врач высшей категории • Кандидат медицинских наук</p>
                </div>
            </div>
            <div className={s.Grade}>
                <ul>
                    <li>
                        <b>Тщательное обследование</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <ul>
                                <li><img src={star} alt="" /> </li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <b>Эффективность лечения</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <ul>
                                <li><img src={star} alt="" /> </li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <b>Отношение к пациенту</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <ul>
                                <li><img src={star} alt="" /> </li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <b>Информирование пациента</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <ul>
                                <li><img src={star} alt="" /> </li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <b>Посоветуете ли Вы врача?</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <ul>
                                <li><img src={star} alt="" /> </li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={s.Rewiew_add}>
                <div className={s.select_consultation}>
                    <p>Выберите консультацию</p>
                    <select name="" id=""></select>
                </div>
                <div className={s.select_consultation + " " + s.select_margin}>
                    <p>Ваша история</p>
                    <input type="text" placeholder="Расскажите, как обратились к врачу, как прошла консультация, помогло ли лечение"/>
                </div>
                <div className={s.select_consultation + " " + s.select_margin}>
                    <p>Понравилось</p>
                    <input type="text" placeholder="Здесь можно указать главные плюсы"/>
                </div>
                <div className={s.select_consultation + " " + s.select_margin}>
                    <p>Не понравилось</p>
                    <input type="text" placeholder="Какие недостатки вы отметили?"/>
                </div>
                <div className={s.otziv}>
                    <button>Оставить отзыв</button>
                </div>
            </div>
        </div>
    )
}
export default Post_rewiew;