import React from "react";
import s from './register.module.css';
const Register = () => {
    return (
        <div className={s.Register_wrapper}>
            <div className={s.Register_title}>
                <h1>Завершите регистрацию, чтобы получить доступ к услугам</h1>
            </div>
            <div className={s.Register_form}>
                <form >
                    <input type="text" placeholder="Имя" />
                    <input type="text" placeholder="Фамилия" />
                    <input type="text" placeholder="Отчество" />
                    <div className={s.Register_male}>
                        <p>Пол</p>
                        <input type="radio" id="Register_radio1" name="radio-group" checked />
                        <label htmlFor="Register_radio1">Мужчина</label>
                        <input type="radio" id="Register_radio2" name="radio-group" />
                        <label htmlFor="Register_radio2">Женщина</label>
                    </div>
                    <input type="text" placeholder="Дата рождения" />
                    <input type="text" placeholder="Электронная почта" />

                    <div className={s.Register_checkbox}>
                        <input type="checkbox" id="Register_checkbox" className={s.custom_checkbox}/>
                        <label htmlFor="Register_checkbox">Я принимаю условия пользовательского соглашения и даю своё согласие на обработку персональных данных</label>
                    </div>
                    <button>Готово</button>
                </form>
            </div>
        </div>
    );
}
export default Register;