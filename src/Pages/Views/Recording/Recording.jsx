import React from "react";
import s from './Recording.module.css';
import Reviews from './Reviews/Reviews';
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Calendar from "../../../Components/Calendar/Calendar";
import Stars from "../../../Components/Stars/Stars";
import Chat from "../../../Components/Chat/Chat";
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
                <div className={s.Recording_full  + " black_config"}>
                    <div className={s.Doctor_calendar}>
                        <div className={s.Doctor_infos}>
                            <div className={s.Doctor_avatar}>
                                <div className={s.Doctor_avatar_img}>
                                    <img alt="" src={recording.photo}  />
                                </div>
                                <div className={s.Doctor_avatar_info + " " + s.black}>
                                    <Stars num={recording.rate} />
                                    <p className={s.Font_size14}>{recording.recomends + "%"} пациентов рекомендуют врача</p>
                                    <p className={s.Font_size14 + " blue_config"} style={{cursor: "pointer"}} onClick={e=>inputElement.current.scrollIntoView()}>{recording.reviews} отзывов</p>
                                </div>
                            </div>
                            <div className={s.Doctor_info + " " + s.black}>
                                <p className={s.gray + " " + s.Font_size14 + " gray_config"}>{recording.specialization.join(' • ')}</p>
                                <h2 className={s.Font_size24}>{recording.firstname + " " + recording.lastname + " " + recording.secondname}</h2>
                                <p className={s.Staj + " " + s.Font_size14}>{recording.regalia.join(' • ')}</p>
                                <div className={s.Doctor_buy}>
                                    <p className={s.gray + " " + s.Font_size14 + " gray_config"}>Стоимость консультации:</p>
                                    <p className={s.buy + " " + s.Font_size24}>{recording.price} ₽</p>
                                </div>
                            </div>
                        </div>
                        <Calendar usId={params.id} />
                    </div>
                    <div className={s.Doctor_text}>
                        <div className={s.Qualification}>
                            <h1 className={s.Font_size24 + " title_config"}>Квалификация</h1>
                            <p className={s.Font_size14}>
                                {`${recording.qualification}`}
                            </p>
                        </div>
                        <div>
                            <div className={s.Qualification}>
                                <h1 className={s.Font_size24 + " title_config"}>Образование</h1>
                            </div>
                            <div>
                                <p className={s.Font_size14}>{`${recording.education}`}

                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={s.Qualification}>
                                <h1 className={s.Font_size24 + " title_config"}>Повышение квалификации</h1>
                            </div>
                            <div>
                                <p className={s.Font_size14}>{`${recording.training}`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.Reviews} ref={inputElement}>
                        <div className={s.Reviews_title}>
                            <h1 className={s.Font_size24 + " title_config"}>Отзывы</h1>
                        </div>
                        <Reviews usId={params.id} />
                    </div>
                </div>
                <Chat />
            </div>
        </> : <Loader />
    );
}
export default Recording;