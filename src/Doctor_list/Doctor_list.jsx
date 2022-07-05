import React from "react";
import s from './Doctor_list.module.css';
import star from '../img/Rating_Star.png';

const Doctor_list = () => {
  return (
    <section className={s.Doctor_list}>
      <div className={s.Skill}>
        <div className={s.Skill_title}>
          <h1 className={s.Font_size24}>Дерматолог</h1>
        </div>
        <div className={s.Select_all}>
          <div className={s.Skill_select}>
            <p className={s.Font_size14}>Специализация</p>
            <select name="" id=""></select>
          </div>
          <div className={s.Sort_select}>
            <p className={s.Font_size14}>Сортировка</p>
            <select name="" id=""></select>
          </div>
        </div>
      </div>
      <div className={s.Doctor}>
        <div className={s.Doctor_infos}>
          <div className={s.Doctor_avatar}>
            <div className={s.Doctor_avatar_img}>
              <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt=""/>
            </div>
            <div className={s.Doctor_avatar_info + " " + s.black}>
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
          <div className={s.Doctor_info + " " + s.black}>
            <p className={s.gray}>Терапевт</p>
            <h2 className={s.Font_size24}>Смирнов Владислав Владимирович</h2>
            <p className={s.Staj + " " + s.Font_size14}>Стаж 19 лет • Врач высшей категории • Кандидат медицинских
              наук</p>
            <div className={s.Doctor_buy}>
              <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
              <p className={s.buy}>1500 ₽</p>
            </div>
          </div>
        </div>
        <div className={s.Payment_block}>
          <div className={s.Payment_block_p}>
            <p className={s.gray + " " + s.Font_size14}>Ближайшая запись:</p>
            <p className={s.Font_size14}>Пятница, 25 марта, 11:00</p>
          </div>
          <button>Записаться</button>
        </div>
      </div>
    </section>

  );
}
export default Doctor_list;