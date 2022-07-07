import React from "react";
import s from './Result.module.css';
import { Field, reduxForm } from "redux-form";
import ElementCreate from "../../../../Components/Input/Input_custom";
import file from "../../../../img/file.png";
import download from "../../../../img/download_file.png";
const inputValidate = ElementCreate("input");
const Form_Result = () => {
    return (
        <form action="">
            <Field component={inputValidate} name={"ResultInput"} el_type="input" placeholder="Название документа" />
            <div className={s.Form_Radio}>
                <Field component={inputValidate} id="Register_radio1" el_type="radio" name={"ResultRadio"} checked />
                <label htmlFor="Register_radio1" className={s.gray}>Лабороторные</label>
                <Field component={inputValidate} id="Register_radio2" el_type="radio" name={"ResultRadio"} />
                <label htmlFor="Register_radio2" className={s.gray}>Функциональные</label>
            </div>
            <div className={s.Form_Download}>
                <p>Нажмите или перетащите сюда файл</p>
            </div>
            <button>выбрать файл</button>
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
                <p className={s.Font_size14 + " " + s.gray}>Загрузить документ</p>
                <ResultformRedux />
            </div>
            <div className={s.Download_File}>
                <select name="" id=""></select>
                <div className={s.Download_File_full}>
                    <div className={s.Form_Line}></div>
                    <div className={s.Download_File_block}>
                    <div className={s.Download_File_left}>
                        <img src={file} alt="" />
                        <div className={s.Download_File_left_text}>
                            <p className={s.Font_size16}>Результаты исследований</p>
                            <p className={s.Font_size14 + " " + s.gray}>Сегодня в 14:34</p>
                        </div>
                    </div>
                    <div className={s.Download_File_right}>
                        <div className={s.Download_File_right_text}>
                            <img src={download} alt="" />
                            <p className={s.Font_size14}>604КВ</p>
                        </div>
                        <p className={s.Font_size14 + " " + s.gray}>Лабороторные</p>
                    </div>
                    </div>
                </div>
                <div className={s.Form_Line}></div>
            </div>
        </div>
    )
}
export default Result;