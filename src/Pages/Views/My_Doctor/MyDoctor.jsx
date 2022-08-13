import React from "react";
import s from './My_Doctor.module.css';
import star from '../../../img/Rating_Star.png';
import { useEffect } from "react";
import Stars from "../../../Components/Stars/Stars";
import { useDispatch, useSelector } from "react-redux";
import { axiosMyDoctor, axiosDoctorDelete } from "../../../base/asyncActions/getDoctors";
import { Link } from "react-router-dom";
import Cancel_Record from "../../../Components/Modal/Cancel_record/Cancel_Record";
import Button from "../../../Components/Button/Button";
import Loader from "../../../Components/Loading/Loader";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
import Chat from "../../../Components/Chat/Chat";
const MyDoctor = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.doctorSpec.page);
    const totalPage = useSelector(state => state.doctorSpec.totalPage);
    const config = useSelector((state) => state.config.config);
    const Doctors = useSelector(state => state.doctorSpec.DoctorMy_array);
    useEffect(() => {
        if(!Doctors[0])
        dispatch(axiosMyDoctor(1));
        dispatch(getConfigHeaderAction("Мои врачи"))
    }, [])
    let showMore = () => {
        if (page + 1 <= totalPage) {
            dispatch(axiosMyDoctor(page + 1));
        }
    }
    let Doctor = Doctors.map(el => <div className={s.Doctor} key={el.doctor_id} style={{color: config?.config.colors.color2}}>
        <Cancel_Record consultation_id={el.doctor_id} text={"Вы действительно хотите отменить запись?"} func={axiosDoctorDelete} typeModal={"record"}/>
        <div className={s.Doctor_infos}>
            <div className={s.Doctor_avatar}>
                <div className={s.Doctor_avatar_img}>
                    <img src={el.photo} alt="" />
                    {el.is_online && <div className={s.DoctorOnline}></div>}
                </div>
                <div className={s.Doctor_avatar_info + " " + s.black}>
                    <Stars num={el.rate} />
                </div>
            </div>
            <div className={s.Doctor_info + " " + s.black}>
                <p className={s.gray + " " + s.Font_size14} style={{color: config?.config.colors.color4}}>{el.specialization.join(' • ')}</p>
                <h2 className={s.Font_size24}>{el.firstname + " " + el.lastname + " " + el.secondname}</h2>
                <p className={s.Staj + " " + s.Font_size14}>{el.regalia.join(' • ')}</p>
                <Link to={"../recording/" + el.doctor_id + "/Default"}>
                    <Button
                        className={s.Reviews_send + " " + s.Font_size14}
                        type={'submit'}
                        class={'btn blue'}
                        text={'Записаться'}
                    />
                </Link>
            </div>
        </div>
        <div className={s.Doctor_button}>
            <Link to={"../recording/" + el.doctor_id + "/Default"}>
                <Button
                    className={s.Reviews_send + " " + s.Font_size14}
                    type={'submit'}
                    class={'btn blue'}
                    text={'Записаться'}
                />
            </Link>
        </div>
    </div>)
    return (
        <div className={s.Container + " Container"}>
            {Doctor[0] ? Doctor :<Loader />}
            <div className={s.Reviews_buttons}>
                <div onClick = {showMore}>
                <Button
                    className={s.Show_more + " " + s.Font_size14}
                    type={'submit'}
                    class={'btn white'}
                    text={'Показать ещё'}
                />
                </div>
            </div>
            <Chat />
        </div>
    )
}
export { MyDoctor };