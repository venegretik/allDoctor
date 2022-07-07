import React from "react";
import s from './My_Profile.module.css';
import star from '../../../img/Rating_Star.png';
import pen from '../../../img/pen.png'
import Balance from './Balance/Balance'
import Med_Cart from "./Med_Cart/Med_Cart";
import Result from "./Result/Result";

const My_Profile = () => {
    return (
        <div className={s.My_Profile}>
            <div className={s.Left_Position}>
                <ul>
                    <li>
                        <p>Личные данные</p>
                    </li>
                    <li>
                        <p>Уведомления</p>
                    </li>
                    <li>
                        <p>Баланс</p>
                    </li>
                    <li>
                        <p>Проверка оборудования</p>
                    </li>
                    <li>
                        <p>Анкета</p>
                    </li>
                    <li>
                        <p>Медицинская карта</p>
                    </li>
                    <li>
                        <p>Результаты использований</p>
                    </li>
                </ul>
            </div>
            <Result />
        </div>
    )
}
export default My_Profile;