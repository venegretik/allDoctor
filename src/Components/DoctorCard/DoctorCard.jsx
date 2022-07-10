import React from 'react';
import s from "../../Pages/Views/Main/Main.module.css";
import star from "../../img/Rating_Star.png";

const DoctorCard = (props) => {
  return (
    <>
      <div className={s.Doctor_cart}>
        <div className={s.Cart_close}>
          +
        </div>
        <div className={s.Doctor_avatar}>
          <div className={s.Doctor_avatar_img}>
            <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt=""/>
          </div>
          <div className={s.Doctor_avatar_info}>
            <ul>
              <li><img src={star} alt=""/></li>
              <li><img src={star} alt=""/></li>
              <li><img src={star} alt=""/></li>
              <li><img src={star} alt=""/></li>
              <li><img src={star} alt=""/></li>
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
              <img src="" alt=""/>
              <p className={s.Font_size16}>12.07.22</p>
            </div>
            <div className={s.Data_time}>
              <img src="" alt=""/>
              <p className={s.Font_size16}>09:30</p>
            </div>
          </div>
          <button className={s.Injoy} onClick={props.props.LoginAuthThunkCreator}>Присоединиться</button>
        </div>
      </div>
    </>
  );
};

export {DoctorCard};