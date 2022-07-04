import React from "react";
import s from './Consultation.module.css';
import star from '../img/Rating_Star.png';
import Download from '../img/Download.png'
const Consultation = () => {
    return (

        <div className={s.My_consultation}>
            
            <section>
                <div className={s.Doctor_cart}>
                    <div className={s.Cart_close}>
                        +
                    </div>
                    <div className={s.Doctor_avatar}>
                        <div className={s.Doctor_avatar_img}>
                            <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt="" />
                        </div>
                        <div className={s.Doctor_avatar_info}>
                            <ul>
                                <li><img src={star} alt="" /> </li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                            </ul>
                            <p className={s.Font_size14}>79% пациентов рекомендуют врача</p>
                            <p className={s.Font_size14}>28 отзывов</p>
                        </div>
                    </div>
                    <div className={s.Doctor_info}>
                        <p className={s.Doctor_skills}>Терапевт</p>
                        <h2 className={s.Font_size24}>Смирнов Владислав Владимирович</h2>
                        <p className={s.Font_size14}>Стаж 12 лет • Врач высшей категории</p>
                        <div className={s.Data}>
                            <div className={s.Data_consultation}>
                                <img src="" alt="" />
                                <p className={s.Font_size16}>12.07.22</p>
                            </div>
                            <div className={s.Data_time}>
                                <img src="" alt="" />
                                <p className={s.Font_size16}>09:30</p>
                            </div>
                        </div>
                        <button className={s.Injoy}>Присоединиться</button>
                    </div>
                </div>
            </section>
            <div className={s.Doctor_full}>

                <div className={s.Cart_close + " " + s.black}>
                    +
                </div>
                <div className={s.Doctor_full1}>
                    <div className={s.Doctor}>
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
                        </div>
                        <div className={s.Doctor_info + " " + s.black}>
                            <p className={s.gray}>Терапевт</p>
                            <h2 className={s.Font_size24}>Белкина Ирина Николаевна</h2>
                            <p className={s.Staj}>Стаж 12 лет • Врач высшей категории • 728 консультаций</p>
                            <div className={s.Doctor_buy}>
                                <p className={s.gray}>Стоимость консультации:</p>
                                <p className={s.buy}>1500 ₽</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.Consultation_info}>
                        <div className={s.Consultation_info_text}>
                            <p className={s.gray}>Консультация состоится:</p>
                            <p>25 марта, 16:00</p>
                        </div>
                        <button className={s.Injoy1}>Оплатить</button>
                    </div>
                </div>

            </div>
            <div className={s.History}>
                <div className={s.History_title}>
                    <h1>История</h1>
                </div>
                <div className={s.History_select}>
                    <div className={s.History_special}>
                        <p className={s.Font_size14}>Специализация</p>
                        <select name="" id=""></select>
                    </div>
                    <div className={s.History_date}>
                        <p className={s.Font_size14}>Специализация</p>
                        <select name="" id=""></select>
                    </div>
                </div>
            </div>
            <div className={s.Doctor_full}>
                <div className={s.Doctor}>
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
                    </div>
                    <div className={s.Doctor_info + " " + s.black}>
                        <p className={s.gray + " " + s.Font_size14}>Терапевт</p>
                        <h2 className={s.Font_size24}>Белкина Ирина Николаевна</h2>
                        <p className={s.Staj + " " + s.Font_size14}>Стаж 12 лет • Врач высшей категории • 728 консультаций</p>
                        <div className={s.Doctor_buy}>
                            <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
                            <p className={s.buy}>1500 ₽</p>
                        </div>
                        <div className={s.Doctor_buy}>
                            <p className={s.gray + " " + s.Font_size14}>Консультация состоялась:</p>
                            <p className={s.buy}>25 марта, 16:00</p>
                        </div>
                    </div>
                </div>
                <div className={s.Download_file}>
                    <div className={s.Download_img}>
                        <img src={Download} alt="" />
                    </div>
                    <div className={s.Download_text}>
                        <p className={s.Font_size14}>Скачать заключение врача</p>
                    </div>
                </div>

            </div>
            <div className={s.Show_more}>
                <button>
                    показать ещё
                </button>
            </div>
        </div>
    )
}
export default Consultation;