import React from "react";
import s from './Recording.module.css';
import star from '../../../img/Rating_Star.png';
import Reviews from './Reviews/Reviews';
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Calendar from "../../../Components/Calendar/Calendar";
import Stars from "../../../Components/Stars/Stars";
import {axiosReview, axiosRecordingDoctor} from "../../../base/asyncActions/getReviews";
const Recording = () => {
    const params = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(axiosReview(4));
        dispatch(axiosRecordingDoctor(4));
      }, []);
    let recording = useSelector(state => state.recording);
    return (
        <div className={s.Recording_full}>
            <div className={s.Doctor_calendar}>
                <div className={s.Doctor_infos}>
                    <div className={s.Doctor_avatar}>
                        <div className={s.Doctor_avatar_img}>
                            <img src={recording.photo} alt="" />
                        </div>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                        <Stars num={recording.rate} />
                            <p className={s.Font_size14}>{recording.recomends + "%"} пациентов рекомендуют врача</p>
                            <p className={s.Font_size14}>{recording.reviews} отзывов</p>
                        </div>
                    </div>
                    <div className={s.Doctor_info + " " + s.black}>
                        <p className={s.gray + " " + s.Font_size14}>{recording.specialization.join(' • ')}</p>
                        <h2 className={s.Font_size24}>{recording.firstname + " " + recording.lastname + " " + recording.secondname}</h2>
                        <p className={s.Staj + " " + s.Font_size14}>{recording.regalia.join(' • ')}</p>
                        <div className={s.Doctor_buy}>
                            <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
                            <p className={s.buy}>{recording.price} ₽</p>
                        </div>
                    </div>
                </div>
                <Calendar />
            </div>
            <div className={s.Doctor_text}>
                <div className={s.Qualification}>
                    <h1 className={s.Font_size24}>Квалификация</h1>
                    <p className={s.Font_size14}>
                        {`${recording.qualification}`}
                    </p>
                </div>
                <div>
                    <div>
                        <h1 className={s.Font_size24}>Образование</h1>
                    </div>
                    <div>
                        <p className={s.Font_size14}>{`${recording.education}`}

                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className={s.Font_size24}>Повышение квалификации</h1>
                    </div>
                    <div>
                        <p className={s.Font_size14}>{`${recording.training}`}
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.Reviews}>
                <div className={s.Reviews_title}>
                    <h1 className={s.Font_size24}>Отзывы</h1>
                </div>
                <Reviews arrayReview={recording.reviewsArray}/>
            </div>
        </div>

    );
}
export default Recording;