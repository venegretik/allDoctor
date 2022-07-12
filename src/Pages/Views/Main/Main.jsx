import React from "react";
import s from './Main.module.css';
import star from '../../../img/Rating_Star.png'
import { Link } from 'react-router-dom';
import ConsultationReady from "../../../Components/Consultation_ready/ConsultationReady";
import './Slider.css'
const Main = (props) => {
  return (
    <div>
      <div className={s.Container}>
        <ConsultationReady props={props} />
        <section>
          <div className={s.Container_list}>
            <div className={s.Title_list}>
              <h1 className={s.Font_size40}>Дежурные врачи</h1>
            </div>
            <div className={s.Doctor_list}>
              <div className={s.Doctor}>
                <div className={s.Doctor_avatar}>
                  <div className={s.Doctor_avatar_img}>
                    <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt="" />
                  </div>
                  <div className={s.Doctor_avatar_info + " " + s.black}>
                    <ul>
                      <li><img src={star} alt="" /></li>
                      <li><img src={star} alt="" /></li>
                      <li><img src={star} alt="" /></li>
                      <li><img src={star} alt="" /></li>
                      <li><img src={star} alt="" /></li>
                    </ul>
                    <p className={s.Font_size14}>79% пациентов рекомендуют врача</p>
                    <p className={s.Font_size14}>28 отзывов</p>
                  </div>
                </div>
                <div className={s.Doctor_info + " " + s.black}>
                  <p className={s.Doctor_skills + " " + s.Font_size14}>Терапевт</p>
                  <h2 className={s.Font_size24}>Смирнов Владислав Владимирович</h2>
                  <p className={s.Font_size14}>Стаж 19 лет • Врач высшей категории • Кандидат медицинских наук</p>
                </div>
              </div>
              <div className={s.Doctor}>
                <div className={s.Doctor_avatar}>
                  <div className={s.Doctor_avatar_img}>
                    <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt="" />
                  </div>
                  <div className={s.Doctor_avatar_info + " " + s.black}>
                    <ul>
                      <li><img src={star} alt="" /></li>
                      <li><img src={star} alt="" /></li>
                      <li><img src={star} alt="" /></li>
                      <li><img src={star} alt="" /></li>
                      <li><img src={star} alt="" /></li>
                    </ul>
                    <p className={s.Font_size14}>79% пациентов рекомендуют врача</p>
                    <p className={s.Font_size14}>28 отзывов</p>
                  </div>
                </div>
                <div className={s.Doctor_info + " " + s.black}>
                  <p className={s.Doctor_skills}>Терапевт</p>
                  <h2 className={s.Font_size24}>Смирнов Владислав Владимирович</h2>
                  <p className={s.Font_size14}>Стаж 12 лет • Врач высшей категории</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container1">
          <div className="arrows">
            <a href="" className="left_arrow"></a>
            <a href="" className="right_arrow"></a>
          </div>
          <div className="slider">
            <div className="slider__wrapper">
              <div className="slider__items">
                <div className="slider__item">
                  <img src="https://api.telemed.dev-h.ru/images/icons/pain/zubi.svg" alt="" />
                  <b>Проблемы с зубами</b>
                </div>
                <div className="slider__item">
                  <img src="https://api.telemed.dev-h.ru/images/icons/pain/zubi.svg" alt="" />
                  <b>Проблемы с зубами</b>
                </div>
                <div className="slider__item">
                  <img src="https://api.telemed.dev-h.ru/images/icons/pain/zubi.svg" alt="" />
                  <b>Проблемы с зубами</b>
                </div>
                <div className="slider__item">
                  <img src="https://api.telemed.dev-h.ru/images/icons/pain/zubi.svg" alt="" />
                  <b>Проблемы с зубами</b>
                </div>
                <div className="slider__item">
                  <img src="https://api.telemed.dev-h.ru/images/icons/pain/zubi.svg" alt="" />
                  <b>Проблемы с зубами</b>
                </div>
              </div>
            </div>
          </div>

        </div>
        <section className={s.medicine + " " + s.container}>
          <h2 className={s.medicine_title + " " + s.Font_size40}>Разделы медицины</h2>
          <div className={s.medicine_cards}>
            <Link to="/doctor-list">
              <div className={s.card_item}>
                <img src="https://api.telemed.dev-h.ru/images/icons/departments/dermatolog.svg" alt="" />
                <div className={s.card_text_wrapper}>
                  <div className={s.card_title}>Дерматолог</div>
                  <div className={s.card_subtitle}>Специалист по кожным заболеваниям</div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>

  )
}
export default Main;