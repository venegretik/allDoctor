import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Input} from "../Input/Input";
import s from '../../Pages/Views/My_Profile/Replace_Data/ReplaceData.module.css';
import { axiosProfileEdit} from "../../base/asyncActions/Profile";
const ReplaceForm = () => {
    const dispatch = useDispatch();
    const date = new Date().toISOString().split('T')[0];
    const sendForm = async (e) => {
        e.preventDefault()
        const data = await new FormData(e.target);
        let obj = {};
        [...data].forEach(e => { obj[e[0]] = e[1] })
        dispatch(axiosProfileEdit(obj));
    }
    return(
        <form onSubmit={(e) => sendForm(e)}>
                <Input required
                    minLength={'2'}
                    pattern={'^[А-Яа-яЁё]+$'}
                    placeholder={'Фамилия'}
                    type={'text'}
                    name={'firstname'}
                />
                <Input required
                    minLength={'2'}
                    pattern={'^[А-Яа-яЁё]+$'}
                    placeholder={'Имя'}
                    type={'text'}
                    name={'lastname'}
                />
                <Input required
                    minLength={'2'}
                    pattern={'^[А-Яа-яЁё]+$'}
                    placeholder={'Отчество'}
                    type={'text'}
                    name={'secondname'} />
                <div className={s.radio_block}>
                    <p>Пол</p>
                    <Input type={'radio'}
                        required
                        name={'gender'}
                        labeltext={'Мужчина'}
                        value={'0'} />

                    <Input type={'radio'}
                        required
                        name={'gender'}
                        labeltext={'Женщина'}
                        value={'1'} />
                </div>
                <Input required
                    type={'date'}
                    max={date}
                    name={'birthday'} />
                <button>сохранить</button>
            </form>
    )
}
export default ReplaceForm;