import React from "react";
import s from './Payment.module.css';
import star from '../../../img/Rating_Star.png'
import { useEffect } from "react";
import { getPuymentInfo, getPuymentPost } from "../../../base/asyncActions/Payment";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Stars from "../../../Components/Stars/Stars";
import { Input } from "../../../Components/Input/Input";
const Payment = () => {
    const dispatch = useDispatch();
    let payment = useSelector((state) => state.payment)
    useEffect(() => {
        dispatch(getPuymentInfo(4));
    }, [])
    const sendForm = async (e) => {
        e.preventDefault()
        const data = await new FormData(e.target);
        let obj={};
        [...data].forEach(e => {obj[e[0]] = e[1]})
        obj.doctor_id = 4;
        obj.use_balance = Boolean(obj.use_balance);
        obj.slot_id = 1;
        dispatch(getPuymentPost(obj))
    }
    return (
        <div className={s.Payment}>
            <div className={s.Payment_title}>
                <h1>Запись на приём</h1>
            </div>
            <div className={s.Doctor}>
                <div className={s.Doctor_infos}>
                    <div className={s.Doctor_avatar}>
                        <div className={s.Doctor_avatar_img}>
                            <img src={payment.photo} alt="" />
                        </div>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <Stars num={payment.rate} />
                            <p className={s.Font_size14}>{payment.recomends} пациентов рекомендуют врача</p>
                            <p className={s.Font_size14}>{payment.reviews} отзывов</p>
                        </div>
                    </div>
                    <div className={s.Doctor_info + " " + s.black}>
                        <p className={s.gray + " " + s.Font_size14}>{payment.specialization.join(' • ')}</p>
                        <h2>{payment.firstname + " " + payment.lastname + " " + payment.secondname}</h2>
                        <p className={s.Staj + " " + s.Font_size14}>{payment.regalia.join(' • ')}</p>
                        <div className={s.Doctor_buy}>
                            <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
                            <p className={s.buy + " " + s.Font_size16}>{payment.checkout.price} ₽</p>
                        </div>
                        <div className={s.Doctor_buy}>
                            <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
                            <p className={s.buy + " " + s.Font_size16}>{new Date(payment.consultation_datetime).toLocaleString(
                                "ru",
                                {
                                    month: "long",
                                    year: "numeric",
                                    day: "numeric",
                                }
                            )}</p>
                        </div>
                        <p className={s.Data_time + " " + s.Font_size14}>Изменить дату и время приёма</p>
                    </div>
                </div>
            </div>
            <form onSubmit={(e) => sendForm(e)}>
                <div className={s.Summ}>
                    <Input
                        type="text"
                        placeholder="Промо или реферальный код"
                        name={'promocode'} />
                </div>
                <div className={s.Oplata}>
                    <p className={s.Font_size24}>Баланс: {payment.checkout.price} ₽</p>
                    <div className={s.Balance}>
                        <Input
                        type={'checkbox'}
                        value={1}
                        name={'use_balance'} />
                        <p className={s.Font_size14}>Оплатить с баланса</p>
                    </div>
                    <span><p className={s.Font_size16}>Списано с баланса: </p><b className={s.Font_size16}> -{payment.checkout.used_balance} ₽</b></span>
                    <span><p className={s.Font_size16}>Скидка (PROMO): </p><b className={s.Font_size16}> -{payment.checkout.used_promo} ₽</b></span>
                </div>
                <div className={s.Total_sum}>
                    <span className={s.Font_size24}><p>Всего: </p> <b>{payment.checkout.total} ₽</b></span>
                    <button className={s.Font_size14}>Оплатить</button>
                    <p className={s.Font_size14}>Нажимая «Записаться», я принимаю условия пользовательского соглашения и даю согласие на обработку персональных данных.</p>
                </div>
            </form>

        </div>
    )
}
export default Payment;