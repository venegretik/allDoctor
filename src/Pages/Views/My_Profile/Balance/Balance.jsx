import React from "react";
import s from './Balance.module.css';
import pen from '../../../../img/pen.png';
import { useEffect, useState } from "react";
import Button from "../../../../Components/Button/Button";
import { axiosProfileBalance, axiosProfileRefferal, axiosProfilePay, axiosProfileFriend, axiosProfileHistory } from "../../../../base/asyncActions/Profile";
import { useDispatch, useSelector } from "react-redux";
import { Input, InpMask } from "../../../../Components/Input/Input";
import RequestMoney from "../../../../Components/Modal/Request_money/RequestMoney";
const Balance = () => {
    const [isShown, setIsShown] = useState(false);
    const [message, setMessage] = useState("");
    let dispatch = useDispatch();
    let keyNum = 0;
    const balance = useSelector((state) => state.profile.balance);
    const referral = useSelector((state) => state.profile.referral)
    let total_page = useSelector((state) => state.profile.total_page)
    let current_page = useSelector((state) => state.profile.current_page)
    const history = useSelector((state) => state.profile.history);
    useEffect(() => {
        dispatch(axiosProfileBalance());
        dispatch(axiosProfileRefferal());
        dispatch(axiosProfileHistory());
    }, []);
    const ShowClick =() =>{
        if(total_page > current_page++){
            dispatch(axiosProfileHistory(current_page++))
        }
    }
    const sendForm = async (e) => {
        e.preventDefault()
        const data = await new FormData(e.target);
        let obj = {};
        let response
        [...data].forEach(e => { obj[e[0]] = e[1] });
        !isShown ? response = await dispatch(axiosProfilePay(obj)) : response = await dispatch(axiosProfileFriend(obj))
        if (response.status && response.payment_url) {
            window.location.href = response.payment_url
        }
        if (!response.status && !isShown) {
            setMessage(response.error.fields.summ)
            alert(response.success.fields.summ)
        }
        if (isShown && response.status) {
            setMessage(response.success.fields.summ)
            alert(response.success.fields.summ)
        }
        if (isShown && !response.status)
            setMessage(response.error.fields.summ)
    }
    let History = history.map(
        el => <div key={++keyNum}>
            <div  className={s.History_data}>
                <p>{new Date(el.datetime).toLocaleString(
                    "ru",
                    {
                        month: "short",
                        year: "numeric",
                        day: "numeric",
                    }
                )}</p>
            </div> <div className={s.History_content}>
                <p>{el.action.type}</p>
                <div className={s.History_content_text}>
                    <b>{el.action.message}</b>
                    <b>-{el.summ}₽</b>
                </div>
            </div>
        </div>
    )
    return (
        <div className={s.Balance}>
            <div className={s.Balance_title}>
                <h1>Баланс: {balance}₽</h1>
            </div>
            <form onSubmit={(e) => sendForm(e)}>
                <div className={s.Balance_add}>
                    <Input
                        required
                        minLength={'2'}
                        placeholder={'Сумма'}
                        pattern={'^[0-9]+$'}
                        type={'text'}
                        name={'summ'}
                    />
                    <button>пополнить</button>

                </div>
                <div className={s.Balance_friend}>
                    <input type="checkbox" id="Register_checkbox" className={s.custom_checkbox} onChange={e => setIsShown((current) => !current)} />

                    <label htmlFor="Register_checkbox"></label>
                    <p>Пополнить другу</p>

                </div>
                <div className={s.Input_friend}>
                    {
                        isShown ? <InpMask pattern={'[+][7]\\s[(][0-9]{3}[)]\\s[0-9]{3}-[0-9]{2}-[0-9]{2}'} required
                            placeholder={'Номер телефона друга'} type={'tel'} className={'input'} /> : ""
                    }
                    <div className={s.Remove_balance}>
                        <img src="" alt="" />
                        <RequestMoney />
                    </div>
                </div>
            </form>
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
                    {History}
                    <div className={s.Message_button_margin} onClick={ShowClick}>
                        <Button
                            className={s.Show_more + " " + s.Font_size14}
                            type={'submit'}
                            class={'btn white'}
                            text={'Показать ещё'}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Balance;