import React from "react";
import s from './Payment.module.css';
import star from '../../../img/Rating_Star.png'
const Payment = () => {
    return (
        <div className={s.Payment}>
            <div className={s.Payment_title}>
                <h1>Запись на приём</h1>
            </div>
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
                            <p className={s.Font_size14}>79% пациентов рекомендуют врача</p>
                            <p className={s.Font_size14}>28 отзывов</p>
                        </div>
                    </div>
                    <div className={s.Doctor_info + " " + s.black}>
                        <p className={s.gray + " " + s.Font_size14}>Терапевт</p>
                        <h2>Белкина Ирина Николаевна</h2>
                        <p className={s.Staj + " " + s.Font_size14}>Стаж 12 лет • Врач высшей категории • 728 консультаций</p>
                        <div className={s.Doctor_buy}>
                            <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
                            <p className={s.buy + " " + s.Font_size16}>1500 ₽</p>
                        </div>
                        <div className={s.Doctor_buy}>
                            <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
                            <p className={s.buy + " " + s.Font_size16}>25 марта, 16:00</p>
                        </div>
                        <p className={s.Data_time + " " + s.Font_size14}>Изменить дату и время приёма</p>
                    </div>
                </div>
            </div>
            <div className={s.Summ}>
                <input type="text" placeholder="Промо или реферальный код"/>
            </div>
            <div className={s.Oplata}>
                <p className={s.Font_size24}>Баланс: 1500₽</p>
                <div className={s.Balance}>
                    <input type="checkbox" />
                    <p className={s.Font_size14}>Оплатить с баланса</p>
                </div>
                <span><p className={s.Font_size16}>Списано с баланса: </p><b className={s.Font_size16}>- 400₽</b></span>
                <span><p className={s.Font_size16}>Скидка (PROMO): </p><b className={s.Font_size16}>- 200₽</b></span>
            </div>
            <div className={s.Total_sum}>
                <span className={s.Font_size24}><p>Всего: </p> <b>100₽</b></span>
                <button className={s.Font_size14}>Оплатить</button>
                <p className={s.Font_size14}>Нажимая «Записаться», я принимаю условия пользовательского соглашения и даю согласие на обработку персональных данных.</p>
            </div>
        </div>
    )
}
export default Payment;