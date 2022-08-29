import React from 'react';
import s from './Med_Cart.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosProfileMedCart } from '../../../../base/asyncActions/Profile';
import Loader from '../../../../Components/Loading/Loader';
import { Link } from 'react-router-dom';
import { getConfigHeaderAction} from "../../../../base/Reducers/configReducer";
    
const Med_Cart = () => {
    let dispatch = useDispatch();
    let medCart = useSelector((state) => state.profile.med_cart);
    useEffect(() => {
        dispatch(axiosProfileMedCart());
        dispatch(getConfigHeaderAction("Медицинская карта"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let keyNum = 0;
    if (medCart.fio) {
        let history = medCart.disease_history.map(el =>
            <tr key={++keyNum} className={s.Font_size16}>
                <td data-label="ACCOUNT">{el.date}</td>
                <td data-label="DUE DATE">{el.specialty}</td>
                <td data-label="AMOUNT">{el.doctor}</td>
                <td data-label="PERIOD">{el.diagnosis}</td>
                <td className={s.MedCenter}>{el.icd_code}<a href={el.file ? el.file : ""} target="_blank" rel="noreferrer" download>
                    Скачать
                </a></td>
            </tr>)
        let medical = medCart.medical_commissions.map(el =>
            <tr key={++keyNum} className={s.Font_size16}>
                <td data-label="ACCOUNT">{el.date}</td>
                <td data-label="DUE DATE">{el.doctors.map(el => <span key={++keyNum} className={s.sostav}>
                    <p>{el.specialty}</p>
                    <p>{el.fio}</p>
                </span>)}</td>
                <td data-label="AMOUNT" className={s.MedCenter}>{el.diagnosis}<Link to={el.file ? el.file : ""} className={"blue_config"} target="_blank" download>
                    Скачать
                </Link></td>
            </tr>)
        let operations = medCart.operations.map(el => <tr key={++keyNum} className={s.Font_size16}>
            <td data-label="ACCOUNT">{el.date}</td>
            <td data-label="DUE DATE">{el.operation}</td>
        </tr>)
        let vaccinations = medCart.vaccinations.map(el => <tr key={++keyNum} className={s.Font_size16}>
            <td data-label="ACCOUNT">{el.date}</td>
            <td data-label="DUE DATE">{el.vaccination}</td>
        </tr>)
        return (
            medCart.vaccinations ?
                <div className={s.Med_Cart + " black_config"}>
                    <div className={s.Med_Cart_Title + " title_config"}>
                        <h1>Медицинская карта</h1>
                    </div>
                    <div className={s.Med_Cart_info_full}>
                        <div className={s.Med_Cart_info}>
                            <ul>
                                <li>
                                    <p className={s.Font_size16}>{medCart.fio}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Адрес регистрации: {medCart.address}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>СНИЛС: {medCart.snils}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Наименование страховой компании: {medCart.insurance_company}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Серия номер полиса: {medCart.policy_number}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Экстренный анамнез</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Пол: {medCart.gender ? "Женский" : "Мужской"}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Дата рождения: {medCart.birthday}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Группа здоровья: {medCart.health_group}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Группа крови: {medCart.blood_type}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Rh-фактор: {medCart.rh_factor}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Алергические реакции: {medCart.allergic_reactions.join("/")}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>Хронические заболевания: {medCart.chronic_diseases.join("/")}</p>
                                </li>
                                <li>
                                    <p className={s.Font_size16}>История заболеваний</p>
                                </li>
                            </ul>
                        </div>
                        <a href={medCart.file} rel="noreferrer" target="_blank" download>

                            <div className={s.Download_file + " black_config"}>
                                <div className={s.Download_img}>
                                    <img alt="" src="https://api.telemed.dev-h.ru/images/ui/download_guy.svg"  />
                                </div>
                                <div className={s.Download_text}>
                                    <p className={s.Font_size14 + " blue_config"}>Скачать заключение врача</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={s.Med_Cart_table}>
                        <table>
                            <thead>
                                <tr className={s.Font_size16}>
                                    <th scope="col">Дата</th>
                                    <th scope="col">Специальность</th>
                                    <th scope="col">Врач</th>
                                    <th scope="col">Диагноз</th>
                                    <th scope="col">Код МКБ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history}
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
                                {medical}
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
                                {operations}
                            </tbody>
                        </table>
                    </div>
                    <ul>
                        <li className={s.Med_Cart_Text + " " + s.Font_size16}>Прививки и вакцины</li>
                    </ul>
                    <div className={s.Med_Cart_table}>
                        <table>
                            <thead>
                                <tr className={s.Font_size16}>
                                    <th scope="col">Год</th>
                                    <th scope="col">Прививка</th>
                                </tr>
                            </thead>

                            <tbody>
                                {vaccinations}
                            </tbody>
                        </table>
                    </div>
                </div> : <Loader />
        )
    }
}
export default Med_Cart;