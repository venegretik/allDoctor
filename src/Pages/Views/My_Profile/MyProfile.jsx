import React from "react";
import s from './My_Profile.module.css';
import Utility from "./Utility/Utility";
import ReplaceData from "./Replace_Data/ReplaceData";
import Med_Cart from "./Med_Cart/Med_Cart";
import Local_Data from "./Local_Data/Local_Data";
import Result from "./Result/Result";
const MyProfile = () => {
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
            <ReplaceData />
        </div>
    )
}
export {MyProfile}