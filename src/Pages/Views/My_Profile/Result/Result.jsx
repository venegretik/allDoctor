import React from "react";
import s from './Result.module.css';
import { Field, reduxForm } from "redux-form";
import ElementCreate from "../../../../Components/Input/Input_custom";
const inputValidate = ElementCreate("input");
const Form_Result = () => {
    return (
        <form action="">
            <Field component={inputValidate} name={"ResultInput"} el_type="input" placeholder="Название документа" />
            <div className={s.Form_Radio}>
                <Field component={inputValidate} id="Register_radio1" el_type="radio" name={"ResultRadio"} checked/>
                <label htmlFor="Register_radio1">Лабороторные</label>
                <Field component={inputValidate} id="Register_radio2" el_type="radio" name={"ResultRadio"} />
                <label htmlFor="Register_radio2">Функциональные</label>
            </div>
            <div className={s.Form_Download}>
                <p>Нажмите или перетащите сюда файл</p>
            </div>
            <div className={s.Form_Line}></div>
        </form>
    )
}
const ResultformRedux = reduxForm({
    form: 'ResultForm'
})(Form_Result);
const Result = () => {

    return (
        <div className={s.ResultFull}>
            <div className={s.title}>
                <h1>Результаты исследований</h1>
            </div>
            <div className={s.formDownload}>
                <p>Загрузить документ</p>
                <ResultformRedux />
            </div>
            <div className={s.Download_File}>
                <select name="" id=""></select>
                <div className={s.Form_Line}></div>
            </div>
        </div>
    )
}
export default Result;