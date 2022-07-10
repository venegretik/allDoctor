import React from 'react';
import s from './Med_Cart.module.css'
const Med_Cart = () => {
    return (
        <div className={s.Med_Cart}>
            <div className={s.Med_Cart_Title}>
                <h1>Медицинская карта</h1>
            </div>
            <div className={s.Med_Cart_info_full}>
                <div className={s.Med_Cart_info}>
                    <ul>
                        <li>
                            <p className={s.Font_size16}>Пупкин Иван Петрович</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Адрес регистрации: г.</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>СНИЛС:</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Наименование страховой компании:</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Серия номер полиса</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Экстренный анамнез</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Пол: мужской</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Дата рождения: </p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Группа здоровья: </p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Группа крови</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Rh-фактор:</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Алергические реакции:</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>Хронические заболевания</p>
                        </li>
                        <li>
                            <p className={s.Font_size16}>История заболеваний</p>
                        </li>
                    </ul>
                </div>
                <div className={s.Download_file}>
                    <div className={s.Download_img}>
                        <img src="https://api.telemed.dev-h.ru/images/ui/download_guy.svg" alt="" />
                    </div>
                    <div className={s.Download_text}>
                        <p className={s.Font_size14}>Скачать заключение врача</p>
                    </div>
                </div>
            </div>
            <div className={s.Med_Cart_table}>
                <table>
                    <thead>
                        <tr className={s.Font_size16}>
                            <th scope="col">Датф</th>
                            <th scope="col">Специальность</th>
                            <th scope="col">Врач</th>
                            <th scope="col">Диагноз</th>
                            <th scope="col">Код МКБ</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className={s.Font_size16}>
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
            <div className={s.Med_Cart_table + " " + s.Font_size16}>
                <table>
                    <thead>
                        <tr className={s.Font_size16}>
                            <th scope="col">Дата</th>
                            <th scope="col">Состав</th>
                            <th scope="col">Решение</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className={s.Font_size16}>
                            <td data-label="ACCOUNT">20.03.2018</td>
                            <td data-label="DUE DATE">Лор</td>
                            <td data-label="AMOUNT">Иванов И.И</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul>
                <li className={s.Med_Cart_Text + " " + s.Font_size16}>Травмы/Операции</li>
            </ul>
            <div className={s.Med_Cart_table}>
                <table>
                    <thead>
                        <tr className={s.Font_size16}>
                            <th scope="col">Дата</th>
                            <th scope="col">Травма/операция</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className={s.Font_size16}>
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