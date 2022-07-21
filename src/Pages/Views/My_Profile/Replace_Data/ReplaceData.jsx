import React from "react";
import s from './ReplaceData.module.css';
import upload from '../../../../img/upload.png';
import { Input } from '../../../../Components/Input/Input';
import { useSelector } from "react-redux/es/exports";
import ChangeLogin from '../../../../Components/Modal/Change_login/Change_login'
import { useDispatch } from "react-redux";
import { axiosProfileEdit, axiosProfile } from "../../../../base/asyncActions/Profile";
import { useEffect } from "react";
import ReplaceForm from "../../../../Components/Forms/ReplaceForm";
const ReplaceData = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state)=>state.profile)
    useEffect(()=>{
        dispatch(axiosProfile());
    }, [])
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
                    <ChangeLogin />
                </div>
            </div>
            <ReplaceForm />
        </div>
    )
}
export default ReplaceData;