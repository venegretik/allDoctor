import React from "react";
import s from '../Recording.module.css';
import star from '../../../../img/Rating_Star.png';
const Reviews = () => {
    return (
        <div>
            <div className={s.Doctor_infos}>
                <div className={s.Doctor_avatar}>
                    <div className={s.Doctor_avatar_img}>
                        <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt="" />
                    </div>
                    <div className={s.Doctor_avatar_info + " " + s.black}>
                        <ul>
                            <li><img src={star} alt="" /> </li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className={s.Doctor_info + " " + s.black}>
                    <p className={s.gray  + " " +s.Font_size14}>26 ноября 2021 в 09:21</p>
                    <h2 className={s.Font_size24}>Смирнов Владислав Владимирович</h2>
                    <p className={s.Staj + " " + s.gray + " " +s.Font_size14}>Прошёл консультацию: Ноябрь 2021</p>
                    <div className={s.Doctor_info_content}>
                        <div className={s.Doctor_info_favorite}>
                            <b>Понравилось</b>
                            <p className={s.Font_size14}>Это замечательный врач с большой буквы!</p>
                        </div>
                        <div className={s.Doctor_info_unfavorite}>
                            <b>Не понравилось</b>
                            <p className={s.Font_size14}>Недостатков нет!</p>
                        </div>
                        <div className={s.Doctor_info_message}>
                            <b>Комментарий</b>
                            <p className={s.Font_size14}>
                                {
                                    `
Мой лечащий врач обнаружил у меня одну синехию (спайку), для ее удаления требовалось оперативное вмешательство. Я обратилась в клинику "Доктор Плюс" к хирургу Р. З. Халилову. Он все подробно объяснил, что необходимо для проведения такой операции, все расписал на бумаге и записал на операцию. Буквально недели через 2 он провел операцию. Почитав отзывы о его работе, я была уверена, что все будет хорошо. После операции Р. З. Халилов вызвал к себе, прошелся по протоколу операции, показал фото всего процесса. Хочу выразить данному доктору огромную благодарность, после этой операции я забеременела, и скоро на свет появится мой долгожданный ребенок!
                                        `
                                }
                            </p>
                            <div className={s.Doctor_message}>
                                <div className={s.Doctor_message_avatar}>
                                    <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png   " alt="" />
                                </div>
                                <div className={s.Doctor_message_content}>
                                    <b className={s.Font_size24}>Смирнов Владислав Владимирович</b>
                                    <p className={s.gray + " " +s.Font_size14}>26 ноября 2021 в 09:21</p>
                                    <p className={s.Font_size14}>Благодарим Вас за прекрасный отзыв!
                                        Желаем Вам легкой беременности и здоровья Вам и Вашим близким!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.Reviews_buttons_full}>
                <div className={s.Reviews_buttons}>
                    <button className={s.Show_more + " " +s.Font_size14}>Показать ещё</button>
                    <button className={s.Reviews_send + " " +s.Font_size14}>Оставить отзыв</button>
                </div>
            </div>
        </div>
    )
}
export default Reviews;