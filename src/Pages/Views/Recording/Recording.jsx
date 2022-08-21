import React from "react";
import s from './Recording.module.css';
import Reviews from './Reviews/Reviews';
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Calendar from "../../../Components/Calendar/Calendar";
import Stars from "../../../Components/Stars/Stars";
import Loader from "../../../Components/Loading/Loader";
import { useRef } from "react";
import { axiosRecordingDoctor } from "../../../base/asyncActions/getReviews";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
const Recording = () => {
    const params = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(axiosRecordingDoctor(params.id));
        dispatch(getConfigHeaderAction("Запись"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    let recording = useSelector(state => state.recording);
    const config = useSelector((state) => state.config.config);
    const inputElement = useRef();
    useEffect(() => {
        if (params.type === "Reviews")
            if (inputElement.current)
                inputElement.current.scrollIntoView();
            else
                window.scrollTo(0, 0);
                // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputElement.current]);
    return (
        recording.reviews ? <>
            <div className={s.Container + " Container"} >
                <div className={s.Recording_full} style={{color: config?.config.colors.color2}}>
                    <div className={s.Doctor_calendar}>
                        <div className={s.Doctor_infos}>
                            <div className={s.Doctor_avatar}>
                                <div className={s.Doctor_avatar_img}>
                                    <img src={recording.photo} alt="" />
                                </div>
                                <div className={s.Doctor_avatar_info + " " + s.black}>
                                    <Stars num={recording.rate} />
                                    <p className={s.Font_size14}>{recording.recomends + "%"} пациентов рекомендуют врача</p>
                                    <p className={s.Font_size14 + " " + s.blueLink} style={{color: config?.config.colors.color10}} onClick={e=>inputElement.current.scrollIntoView()}>{recording.reviews} отзывов</p>
                                </div>
                            </div>
                            <div className={s.Doctor_info + " " + s.black}>
                                <p className={s.gray + " " + s.Font_size14} style={{color: config?.config.colors.color4}}>{recording.specialization.join(' • ')}</p>
                                <h2 className={s.Font_size24}>{recording.firstname + " " + recording.lastname + " " + recording.secondname}</h2>
                                <p className={s.Staj + " " + s.Font_size14}>{recording.regalia.join(' • ')}</p>
                                <div className={s.Doctor_buy}>
                                    <p className={s.gray + " " + s.Font_size14} style={{color: config?.config.colors.color4}}>Стоимость консультации:</p>
                                    <p className={s.buy + " " + s.Font_size24}>{recording.price} ₽</p>
                                </div>
                            </div>
                        </div>
                        <Calendar usId={params.id} />
                    </div>
                    <div className={s.Doctor_text}>
                        <div className={s.Qualification}>
                            <h1 className={s.Font_size24}>Квалификация</h1>
                            <p className={s.Font_size14}>
                                {`${recording.qualification}`}
                            </p>
                        </div>
                        <div>
                            <div className={s.Qualification}>
                                <h1 className={s.Font_size24}>Образование</h1>
                            </div>
                            <div>
                                <p className={s.Font_size14}>{`${recording.education}`}

                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={s.Qualification}>
                                <h1 className={s.Font_size24}>Повышение квалификации</h1>
                            </div>
                            <div>
                                <p className={s.Font_size14}>{`${recording.training}`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.Reviews} ref={inputElement}>
                        <div className={s.Reviews_title}>
                            <h1 className={s.Font_size24}>Отзывы</h1>
                        </div>
                        <Reviews usId={params.id} />
                    </div>
                </div>
            </div>
        </> : <Loader />
    );
}
export default Recording;