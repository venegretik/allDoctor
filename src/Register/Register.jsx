import React from "react";
import s from './register.module.css';
import Checkbox from "../Components/Checkbox/Checkbox";
import Radio_button from "../Components/Radio_button/Radio_button";
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
                        <Radio_button text={"Мужчина"}/>
                        <Radio_button text={"Женщина"}/>
                    </div>
                    <input type="text" placeholder="Дата рождения" />
                    <input type="text" placeholder="Электронная почта" />
                    <Checkbox />
                    <button>Готово</button>
                </form>
            </div>
        </div>
    );
}
export default Register;