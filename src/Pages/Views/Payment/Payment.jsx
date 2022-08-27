import React from "react";
import s from './Payment.module.css';
import { useState, useEffect } from "react";
import {getPuymentPost } from "../../../base/asyncActions/Payment";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Stars from "../../../Components/Stars/Stars";
import { useParams } from "react-router-dom";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
import { Input } from "../../../Components/Input/Input";
import FormErrors from "../../../Components/FormError/FormError";
import { Link, Navigate } from "react-router-dom";
import Chat from "../../../Components/Chat/Chat";
import Button from "../../../Components/Button/Button";
import ModalCalendar from "../../../Components/Modal/Modal_calendar/Modal_calendar";
const Payment = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getConfigHeaderAction("Оплата"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let [errorMessage, seterrorMessage] = useState({
        status: false,
        error: {
            message: "",
        },
    });
    let params = useParams();
    const [Showtext, setShowText] = useState("");
    const [check, setcheck] = useState(false);
    let payment = useSelector((state) => state.payment);
    const config = useSelector((state) => state.config.config);
    const sendForm = async (e) => {
        e.preventDefault()
        const data = await new FormData(e.target);
        let obj = {};

        [...data].forEach(e => { obj[e[0]] = e[1] })
        obj.doctor_id = params.id;
        obj.use_balance = Boolean(obj.use_balance);
        obj.slot_id = params.slot;
        
        let response = await dispatch(getPuymentPost(obj));
        if (response.status) {
            window.location.href = response.data.payment_url;
        }
        if (!response.status) {
            seterrorMessage(errorMessage => ({
                error: {
                    message: response.error?.message
                }
            }));
        }
    }
    const handleChange = (e) => {
        setShowText(e.target.value);
        let obj = {};
        obj.doctor_id = params.id;
        obj.slot_id = params.slot;
        obj.promocode = e.target.value;
        dispatch(getPuymentPost(obj));
    }
    const handleChangeCheck = (e) => {
        let obj = {};
        setcheck(e.target.value);
        obj.doctor_id = params.id;
        obj.slot_id = params.slot;
        obj.use_balance = e.target.value;
        dispatch(getPuymentPost(obj));
    }
    return (
        payment.firstname ? <div className={s.Container + " Container"}>
            <div className={s.Payment + " black_config"}>
                <div className={s.Payment_title + " title_config"}>
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
                                <Link to={"../recording/" + params.id + "/Reviews"} style={{ color: config?.config.colors.color10 }}>
                                    <p className={s.Font_size14 + " blue_config"}>{payment.reviews} отзывов</p>
                                </Link>
                            </div>
                        </div>
                        <div className={s.Doctor_info + " " + s.black}>
                            <p className={s.gray + " " + s.Font_size14 + " gray_config"}>{payment.specialization.join(' • ')}</p>
                            <h2 className={s.Font_size24}>{payment.firstname + " " + payment.lastname + " " + payment.secondname}</h2>
                            <p className={s.Staj + " " + s.Font_size14}>{payment.regalia.join(' • ')}</p>
                            <div className={s.Doctor_buy}>
                                <p className={s.gray + " " + s.Font_size14 + " gray_config"}>Стоимость консультации:</p>
                                <p className={s.buy + " " + s.Font_size24}>{payment.checkout.price} ₽</p>
                            </div>
                            <div className={s.Doctor_buy}>
                                <p className={s.gray + " " + s.Font_size14 + " gray_config"}>Дата и время приёма:</p>
                                <p className={s.buy + " " + s.Font_size24}>{new Date(payment.consultation_datetime).toLocaleString(
                                    "ru",
                                    {
                                        month: "long",
                                        year: "numeric",
                                        day: "numeric",
                                    }
                                )}</p>
                            </div>
                            <ModalCalendar type_of="1" doctor_id={params.id} usId={params.id} />
                        </div>
                    </div>
                </div>
                <form onSubmit={(e) => sendForm(e)}>
                    <div className={s.Summ}>
                        <Input
                            type="text"
                            placeholder="Промо или реферальный код"
                            name={'promocode'} value={Showtext} onChange={handleChange} />
                            
                    </div>
                    <div className={s.Oplata + " black_config"}>
                        <p className={s.Font_size24}>Баланс: {payment.checkout.price} ₽</p>
                        <div className={s.Balance}>
                            <input type="checkbox" id="Register_checkbox" name={'use_balance'} className={s.custom_checkbox} onChange={handleChangeCheck} />
                            <p className={s.Font_size14}>Оплатить с баланса</p>
                        </div>
                        {check ? <span><p className={s.Font_size16}>Списано с баланса: </p><b className={s.Font_size16}> -{payment.checkout.used_balance} ₽</b></span> : ""}
                        {Showtext ? <span><p className={s.Font_size16}>Скидка (PROMO): </p><b className={s.Font_size16}> -{payment.checkout.used_promo} ₽</b></span> : ""}
                    </div>
                    <div className={s.Total_sum + " black   _config"}>
                        <span className={s.Font_size24}><p>Всего: </p> <b>{payment.checkout.total} ₽</b></span>
                        <Button class="btn blue" type="submit" text="Оплатить" />
                        <p className={s.Font_size14}>Нажимая «Записаться», я принимаю условия <Link to="../private/user" className="blue_config">пользовательского соглашения</Link> и даю <Link to="../private/personal" className="blue_config"> согласие на обработку персональных данных</Link>.</p>
                    </div>
                </form>
                {/* КОМПОНЕНТ ОШИБКИ */}
                <FormErrors error={errorMessage.error.message} />
                {/* КОМПОНЕНТ ОШИБКИ */}
            </div>
            <Chat/>
        </div> : <Navigate to={`../recording/${params.id}/Default`} />

    )
}
export default Payment;