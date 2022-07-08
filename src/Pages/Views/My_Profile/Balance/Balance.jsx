import React from "react";
import s from './Balance.module.css';
import pen from '../../../../img/pen.png'
const Balance = () => {
    return (
        <div className={s.Balance}>
            <div className={s.Balance_title}>
                <h1>Баланс: 2400₽</h1>
            </div>
            <div className={s.Balance_add}>
                <input type="text" name="" id="" />
                <button>пополнить</button>
            </div>
            <div className={s.Balance_friend}>
                <input type="checkbox" id="Register_checkbox" className={s.custom_checkbox} />
                <label htmlFor="Register_checkbox"></label>
                <p>Пополнить другу</p>
            </div>
            <div className={s.Input_friend}>
                <input type="text" />
                <div className={s.Remove_balance}>
                    <img src="" alt="" />
                    <p>Вывести средства</p>
                </div>
            </div>
            <div className={s.Referal}>
                <div className={s.Referal_title}>
                    <h1>Реферальный код</h1>
                </div>
                <input type="text" />
            </div>
            <div className={s.History}>
                <div className={s.History_title}>
                    <h1>
                        История
                    </h1>
                </div>
                <div className={s.History_content_full}>
                    <div className={s.History_data}>
                        <p>29 марта 2022</p>
                    </div>
                    <div className={s.History_content}>
                        <p>Консультация</p>
                        <div className={s.History_content_text}>
                            <b>Белкина Ирина Николаевна</b>
                            <b>-1500₽</b>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Balance;