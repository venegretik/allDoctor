import React from "react";
import logo from '../../../img/logo.png'
import s from './login.module.css'
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import ElementCreate from "../../../Components/Input_old/Input_custom";
import { maxLenghtCreate,requered } from "../../../base/Validators/validation";
const maxLenght11 = maxLenghtCreate(11);
const maxLenght4 = maxLenghtCreate(4);
const inputValidate = ElementCreate("input");
const Form_Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Войти</h3>
            <Field component={inputValidate} name={"NumberInput"} el_type="input" placeholder="Номер телефона" validate={[requered, maxLenght11]}/>
            {props.number_send &&(
                <Field component={inputValidate} name={"CodeInput"} el_type="input" placeholder="Код подтверждения" validate={[requered, maxLenght4]} />
            )}
            <button>Получить код</button>
        </form>
    )
}
const MessangerformRedux = reduxForm({
    form: 'LoginForm'
})(Form_Login);
const Login = (props) => {
    const token = localStorage.getItem('token');
    const onSubmit = (formData) => {
        props.axiosAuth(formData.NumberInput,formData.CodeInput)
    }
    return (
        <>
        {token ? <Navigate to="/main"/>
        :
        props.is_new_user ? <Navigate to="/register"/> 
        :
        <div className={s.Login_wrapper}>
            <div className={s.Login_full}>
                <div className={s.Login_content}>
                    <div className={s.Login_logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={s.Login_text}>
                        <h1>Советуйтесь с врачом, а не с форумом</h1>
                        <ul>
                            <li>консультации квалифицированных врачей — для себя, детей и родителей</li>
                            <li>врачи на связи круглосуточно</li>
                            <li>безопасно, конфиденциально и анонимно</li>
                            <li>в чате и на видео отчёт после каждой консультации</li>
                        </ul>
                    </div>
                </div>
                <div className={s.Login_form}>
                    <MessangerformRedux onSubmit={onSubmit} {...props}/>
                </div>

            </div>
        </div>
        }
        </>
        
    );
}

export default Login;