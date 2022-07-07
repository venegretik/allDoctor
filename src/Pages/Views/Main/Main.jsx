import React from "react";
import s from './Main.module.css';
import star from '../../../img/Rating_Star.png'
import { Link } from 'react-router-dom';
const Main = (props) => {
  console.log(props.message)
  return (
    <div>
      <div className={s.Container}>
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
              <button className={s.Injoy}  onClick={props.LoginAuthThunkCreator}>Присоединиться</button>
            </div>
          </div>
        </section>
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