import React from "react";
import s from './ReplaceData.module.css';
import upload from '../../../../img/upload.png';
import { Input } from '../../../../Components/Input/Input';
import { useSelector } from "react-redux/es/exports";
import ChangeLogin from '../../../../Components/Modal/Change_login/Change_login'
import { useDispatch } from "react-redux";
import { axiosProfileEdit, axiosProfile } from "../../../../base/asyncActions/Profile";
import { useEffect } from "react";
const ReplaceData = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state)=>state.profile)
    useEffect(()=>{
        dispatch(axiosProfile());
    }, [])
    const date = new Date().toISOString().split('T')[0];
    const sendForm = async (e) => {
        e.preventDefault()
        const data = await new FormData(e.target);
        let obj = {};
        [...data].forEach(e => { obj[e[0]] = e[1] })
        dispatch(axiosProfileEdit(obj));
        
    }
    return (
        <div>
            <div className={s.Profile_data}>
                <div className={s.Profile_data_download_img}>
                    <img src="https://api.telemed.dev-h.ru/images/profiles/profile.png" alt="" />
                    <img src={upload} alt="" className={s.upload} />
                </div>
                <b className={s.Font_size24}>{profile.firstname + " " + profile.lastname+ " " + profile.secondname}</b>
            </div>
            <div className={s.Profile_replace_tel}>
                <p className={s.Font_size16}>Телефон</p>
                <div className={s.Profile_replace_tel_data}>
                    <p className={s.Font_size16}>{profile.phone}</p>
                    <p className={s.Profile_replace_tel_link + " " + s.Font_size14}>Изменить</p>
                </div>
            </div>
            <div className={s.Profile_replace_tel}>
                <p className={s.Font_size16}>Почта</p>
                <div className={s.Profile_replace_tel_data}>
                    <p className={s.Font_size16}>{profile.email}</p>
                    <p className={s.Profile_replace_tel_link + " " + s.Font_size14}>Изменить</p>
                </div>
            </div>
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

        </div>
    )
}
export default ReplaceData;