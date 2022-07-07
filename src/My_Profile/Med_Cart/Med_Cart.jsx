import React from 'react';
import s from './Med_Cart.module.css'
const Med_Cart = () => {
    return (
        <div className={s.Med_Cart}>
            <div className={s.Med_Cart_Title}>
                <h1>Медицинская карта</h1>
            </div>
            <div className={s.Med_Cart_info}>
                <ul>
                    <li>
                        <p>Пупкин Иван Петрович</p>
                    </li>
                    <li>
                        <p>Адрес регистрации: г.</p>
                    </li>
                    <li>
                        <p>СНИЛС:</p>
                    </li>
                    <li>
                        <p>Наименование страховой компании:</p>
                    </li>
                    <li>
                        <p>Серия номер полиса</p>
                    </li>
                    <li>
                        <p>Экстренный анамнез</p>
                    </li>
                    <li>
                        <p>Пол: мужской</p>
                    </li>
                    <li>
                        <p>Дата рождения: </p>
                    </li>
                    <li>
                        <p>Группа здоровья: </p>
                    </li>
                    <li>
                        <p>Группа крови</p>
                    </li>
                    <li>
                        <p>Rh-фактор:</p>
                    </li>
                    <li>
                        <p>Алергические реакции:</p>
                    </li>
                    <li>
                        <p>Хронические заболевания</p>
                    </li>
                    <li>
                        <p>История заболеваний</p>
                    </li>
                </ul>
            </div>
            <div className={s.Med_Cart_table}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Датф</th>
                            <th scope="col">Специальность</th>
                            <th scope="col">Врач</th>
                            <th scope="col">Диагноз</th>
                            <th scope="col">Код МКБ</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td data-label="ACCOUNT">20.03.2018</td>
                            <td data-label="DUE DATE">Лор</td>
                            <td data-label="AMOUNT">Иванов И.И</td>
                            <td data-label="PERIOD">Верхнечелюстной синусит</td>
                            <td>J01.9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul>
                <li className={s.Med_Cart_Text}>Врачебные комиссии, консилиумы</li>
            </ul>
            <div className={s.Med_Cart_table}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Дата</th>
                            <th scope="col">Состав</th>
                            <th scope="col">Решение</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td data-label="ACCOUNT">20.03.2018</td>
                            <td data-label="DUE DATE">Лор</td>
                            <td data-label="AMOUNT">Иванов И.И</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul>
                <li className={s.Med_Cart_Text}>Травмы/Операции</li>
            </ul>
            <div className={s.Med_Cart_table}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Дата</th>
                            <th scope="col">Травма/операция</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td data-label="ACCOUNT">20.03.2018</td>
                            <td data-label="DUE DATE">Удаление аппендицита</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Med_Cart;