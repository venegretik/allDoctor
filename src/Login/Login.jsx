import React from "react";
import logo from '../img/logo.png'
import s from './login.module.css'
import { Field, reduxForm } from "redux-form";
import ElementCreate from "../Components/Input/Input_custom";
const inputValidate = ElementCreate("input");
const Form_Login = (props) => {
    return (
        <form action="">
            <h3>Войти</h3>
            <Field component={inputValidate} name={"MessageInput"} placeholder="Номер телефона" />
            <button>Получить код</button>
        </form>
    )
}
const MessangerformRedux = reduxForm({
    form: 'MessageForm'
})(Form_Login);
const Login = () => {
    return (
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


                    <MessangerformRedux />
                </div>

            </div>
        </div>
    );
}

export default Login;