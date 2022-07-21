import React from "react";
import s from './Change_login.module.css';
import Button from "../../Button/Button";
import { useState } from "react";
import { Input } from "../../Input/Input";
import { useDispatch } from "react-redux";
import { axiosEmailEdit } from "../../../base/asyncActions/Login";
const ChangeLogin = () => {
    let dispatch = useDispatch();
    let [isShown, setIsShown] = useState(1);
    let [showWindow, setWindow] = useState(false);
    const [error, setError] = useState('');
    const handleClick = async (event) => {
        const response = await dispatch(axiosEmailEdit());
        if (response.status)
            setIsShown(++isShown)

    };
    const handleClickCode = async () => {
        const response = await dispatch(axiosEmailEdit());
        if (response.status)
            setIsShown(++isShown);
        else
            setError(response.error.fields.code);
    }
    const closeClick = (e) => {
        setWindow(false)
        setIsShown(1);
    }

    return (
        <div>
            <p className={s.Profile_replace_tel_link + " " + s.Font_size14} onClick={e => setWindow(true)}>Изменить</p>
            {showWindow ? <div className={s.ChangeLoginFull}>
                <div className={s.ChangeLogin}>
                    <div className={s.ChangeLoginTitle}>
                        <h1>Изменить телефон</h1>
                    </div>
                    <div className={s.ChangeLoginMain}>
                        <form action="">
                            {isShown === 1 ?
                                <div className={s.ChangeLoginMain_step1}>
                                    <p>Мы отправим код подтверждения на ваш текущий номер +7 999 156 46 75</p>
                                </div> :
                                isShown === 2 ?
                                    <div className={s.ChangeLoginMain_step2}>
                                        <Input required
                                            minLength={'4'}
                                            maxLength={'4'}
                                            pattern={'^[0-9]+$'}
                                            placeholder={'Код подтверждения'}
                                            type={'text'}
                                            name={'code'} />
                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                    </div>
                                    : isShown === 3 ?
                                        <div className={s.ChangeLoginMain_step3}>
                                            <Input required
                                                placeholder={'email'}
                                                type={'email'}
                                                name={'email'}
                                            />
                                        </div> : ""}
                        </form>
                    </div>
                    <div className={s.ChangeLoginButton} >

                        {isShown == 1 ?
                            <div onClick={handleClick}>
                                <Button text={"Получить код"} class="blue btn" />
                            </div>
                            : isShown == 2 ?
                                <div onClick={handleClickCode}>
                                    <Button text={"Подтвердить"} class="blue btn" />
                                </div>
                                : isShown == 3 ?
                                    <div onClick={handleClick}>
                                        <Button text={"Изменить"} class="blue btn" /></div> : ""}

                        <div onClick={e => closeClick()}>
                            <Button text="отмена" class="btn" />
                        </div>
                    </div>
                </div>
            </div> : ""}
        </div>
    )
}
export default ChangeLogin;