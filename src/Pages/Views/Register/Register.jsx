import React from "react";
import s from './register.module.css';
import Checkbox from "../../../Components/Checkbox/Checkbox";
import Radio_button from "../../../Components/Radio_button/Radio_button";
import ElementCreate from "../../../Components/Input_old/Input_custom";
import './radio.css';
import { reduxForm, Field } from "redux-form";
const inputValidate = ElementCreate("input");


const Form_Register = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={inputValidate} name={"NameInput"} el_type="input" placeholder="Имя" />
            <Field component={inputValidate} name={"SurnameInput"} el_type="input" placeholder="Фамилия" />
            <Field component={inputValidate} name={"LastnameInput"} el_type="input" placeholder="Отчество" />
            <div className={s.Register_male}>
                <p>Пол</p>
                
                <label className="container">One
                    <Field component={"input"} name={"Radio"} id="Register_radio1" type="radio" checked value="0" />
                        <span className="checkmark"></span>
                </label>
                <label className="container">One
                    <Field component={"input"} name={"Radio"} id="Register_radio1" type="radio"  value="1" />
                        <span className="checkmark"></span>
                </label>
            </div>
            <Field component={inputValidate} name={"DateInput"} el_type="input" placeholder="Дата Рождения" />
            <Field component={inputValidate} name={"EmailInput"} el_type="input" placeholder="Электронная почта" />
            <div className={s.Register_checkbox}>
                <Field component={"input"} name={"SucessInput"} id="Register_checkbox" type="checkbox" className={s.custom_checkbox} />
                <label htmlFor="Register_checkbox">Я принимаю условия пользовательского соглашения и даю своё согласие на обработку персональных данных</label>
            </div>
            <button>Готово</button>
        </form>
    )
}
const RegisterformRedux = reduxForm({
    form: 'RegisterForm'
})(Form_Register);
const Register = (props) => {
  console.log(props)
    const onSubmit = (formData) => {
        console.log(formData)
        let obj = {
            firstname: formData.NameInput,
            lastname: formData.SurnameInput,
            secondname: formData.LastnameInput,
            gender: 0,
            birthday: formData.DateInput,
            email: formData.EmailInput
        }
        const token = localStorage.getItem('token');
        props.axiosRegister(obj, token);
    }
    return (
        <div className={s.Register_wrapper}>
            <div className={s.Register_title}>
                <h1>Завершите регистрацию, чтобы получить доступ к услугам</h1>
            </div>
            <div className={s.Register_form}>
                <RegisterformRedux onSubmit={onSubmit} />
            </div>
        </div>
    );
}
export default Register;