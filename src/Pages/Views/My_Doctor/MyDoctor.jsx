import React from "react";
import s from './My_Doctor.module.css';
import star from '../../../img/Rating_Star.png';
import { useEffect } from "react";
import Stars from "../../../Components/Stars/Stars";
import { useDispatch, useSelector } from "react-redux";
import { axiosMyDoctor,axiosDoctorDelete } from "../../../base/asyncActions/getDoctors";
const MyDoctor = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.doctorSpec.page);
    const totalPage = useSelector(state => state.doctorSpec.totalPage);
    const Doctors = useSelector(state => state.doctorSpec.DoctorMy_array);
    useEffect(() => {
        dispatch(axiosMyDoctor(1));
    }, [])
    let DoctorDelete = (doctor_id) =>{
        dispatch(axiosDoctorDelete(doctor_id));
    }
    let showMore = () =>{
        if(page+1 <= totalPage){
            dispatch(axiosMyDoctor(page+1));
        }
    }
    let Doctor = Doctors.map(el => <div className={s.Doctor} key={el.doctor_id}>
        <div className={s.Cart_close} onClick={() => {DoctorDelete(el.doctor_id)}}>
            +
        </div>
        <div className={s.Doctor_infos}>
            <div className={s.Doctor_avatar}>
                <div className={s.Doctor_avatar_img}>
                    <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt="" />
                </div>
                <div className={s.Doctor_avatar_info + " " + s.black}>
                    <Stars num={el.rate} />
                </div>
            </div>
            <div className={s.Doctor_info + " " + s.black}>
                <p className={s.gray + " " + s.Font_size14}>{el.specialization.join(' • ')}</p>
                <h2 className={s.Font_size24}>{el.firstname + " " + el.lastname + " " + el.secondname}</h2>
                <p className={s.Staj + " " + s.Font_size14}>{el.regalia.join(' • ')}</p>
                <button>записаться</button>
            </div>
        </div>
        <div className={s.Doctor_button}>
            <button>записаться</button>
        </div>
    </div>)
    return (
        <div>
            {Doctor}
            <div className={s.Reviews_buttons}>
                <button className={s.Show_more + " " + s.Font_size14} onClick={showMore}>Показать ещё</button>
            </div>
        </div>
    )
}
export { MyDoctor };