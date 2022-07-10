import React from "react";
import s from './My_Doctor.module.css';
import star from '../../../img/Rating_Star.png';
import Radio_button from '../../../Components/Radio_button/Radio_button'
const MyDoctor = () => {
    return (
        <div>
            <div className={s.Doctor}>
                <div className={s.Cart_close}>
                    +
                </div>
                <div className={s.Doctor_infos}>
                    <div className={s.Doctor_avatar}>
                        <div className={s.Doctor_avatar_img}>
                            <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt="" />
                        </div>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <ul>
                                <li><img src={star} alt="" /> </li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.Doctor_info + " " + s.black}>
                        <p className={s.gray + " " + s.Font_size14}>Терапевт</p>
                        <h2 className={s.Font_size24}>Белкина Ирина Николаевна</h2>
                        <p className={s.Staj + " " + s.Font_size14}>Стаж 12 лет • Врач высшей категории • 728 консультаций</p>
                        <button>записаться</button>
                    </div>
                </div>
                <div className={s.Doctor_button}>
                    <button>записаться</button>
                </div>
            </div>
            <div className={s.Reviews_buttons}>
                <button className={s.Show_more + " " + s.Font_size14}>Показать ещё</button>
                
            </div>
            
        </div>
    )
}
export { MyDoctor };