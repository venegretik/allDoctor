import React from "react";
import s from './Post_review.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { axiosReviews } from "../../../base/asyncActions/getReviews";
import SelectReview from "../../../Components/Select/SelectReview/SelectReview";
import StarComponent from "./StarComponent";
import { axiosPostReviews } from "../../../base/asyncActions/getReviews";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
import Button from "../../../Components/Button/Button";
import { Navigate } from "react-router";
import FormErrors from "../../../Components/FormError/FormError";
import { Star1Action, Star2Action, Star3Action, Star4Action, Star5Action } from "../../../base/Reducers/reviewsReducer";
import Chat from "../../../Components/Chat/Chat";
const PostRewiew = () => {
    const params = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(axiosReviews(params.id));
        window.scrollTo(0, 0);
        dispatch(getConfigHeaderAction("Оставить отзыв"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let [statusRewiew, setStatus] = useState(false)
    let [errorMessage, seterrorMessage] = useState({
        status: false,
        error: {
          message: "",
        },
      });
    const star1 = useSelector(state => state.review.star1);
    const star2 = useSelector(state => state.review.star2);
    const star3 = useSelector(state => state.review.star3);
    const star4 = useSelector(state => state.review.star4);
    const star5 = useSelector(state => state.review.star5);
    const idCons = useSelector(state => state.review.idCons);
    const config = useSelector((state) => state.config.config);
    const review = useSelector((state) => state.review);
    const sendForm = async (e) => {
        e.preventDefault()
        const data = await new FormData(e.target);
        let obj = {};
        [...data].forEach(e => { obj[e[0]] = e[1] })
        obj.consultation_id = idCons;
        obj.accuracy = star1;
        obj.efficiency = star2;
        obj.attitude = star3;
        obj.informing = star4;
        obj.recommend = star5;
        let response = await dispatch(axiosPostReviews(params.id, obj))
        if (!response.status) {
            seterrorMessage(errorMessage => ({
                error: {
                  message: response.error?.message
                }
              }));
        }
        else
        setStatus(true);
    }
    
    return (statusRewiew ? <Navigate to={"/recording/" + params.doctor_id + "/Reviews"}/> :<div className={s.Container + " Container"}>
    <div className={s.Review_full} style={{ color: config?.config.colors.color2 }}>
        <div className={s.Review_title}>
            <h1 className={s.Font_size24} style={{ color: config?.config.colors.color5 }}>Оставить отзыв</h1>
        </div>
        <div className={s.Doctor_infos}>
            <div className={s.Doctor_avatar}>
                <div className={s.Doctor_avatar_img}>
                    <img src={review.photo} alt="" />
                </div>
            </div>
            <div className={s.Doctor_info + " " + s.black} >
                <p className={s.gray + " " + s.Font_size14} style={{ color: config?.config.colors.color4 }}>{review.specialization.join(' • ')}</p>
                <h2 className={s.Font_size24}>{review.firstname + " " + review.lastname + " " + review.secondname}</h2>
                <p className={s.Staj + " " + s.Font_size14}>{review.regalia.join(' • ')}</p>
            </div>
        </div>
        <div className={s.Grade}>
            <ul>
                <li>
                    <b className={s.Font_size24} style={{ color: config?.config.colors.color5 }}>Тщательное обследование</b>
                    <div className={s.Doctor_avatar_info + " " + s.black}>
                        <StarComponent func={Star1Action} el_id={1} />
                    </div>
                </li>
                <li>
                    <b className={s.Font_size24} style={{ color: config?.config.colors.color5 }}>Эффективность лечения</b>
                    <div className={s.Doctor_avatar_info + " " + s.black}>
                        <StarComponent func={Star2Action} el_id={2} />
                    </div>
                </li>
                <li>
                    <b className={s.Font_size24} style={{ color: config?.config.colors.color5 }}>Отношение к пациенту</b>
                    <div className={s.Doctor_avatar_info + " " + s.black}>
                        <StarComponent func={Star3Action} el_id={3} />
                    </div>
                </li>
                <li>
                    <b className={s.Font_size24} style={{ color: config?.config.colors.color5 }}>Информирование пациента</b>
                    <div className={s.Doctor_avatar_info + " " + s.black}>
                        <StarComponent func={Star4Action} el_id={4} />
                    </div>
                </li>
                <li>
                    <b className={s.Font_size24} style={{ color: config?.config.colors.color5 }}>Посоветуете ли Вы врача?</b>
                    <div className={s.Doctor_avatar_info + " " + s.black}>
                        <StarComponent func={Star5Action} el_id={5} />
                    </div>
                </li>
            </ul>
        </div>
        <div className={s.Rewiew_add}>
            <form onSubmit={(e) => sendForm(e)}>
                <div className={s.select_consultation}>
                    <p className={s.Font_size24} style={{ color: config?.config.colors.color5 }}>Выберите консультацию</p>
                    <SelectReview required array={review.consultations} />
                </div>
                <div className={s.select_consultation + " " + s.select_margin}>
                    <p className={s.Font_size24} style={{ color: config?.config.colors.color5 }}>Ваша история</p>
                    <textarea name="comment" className={s.Font_size14} required minLength={10}  placeholder="Расскажите, как обратились к врачу, как прошла консультация, помогло ли лечение" />
                </div>
                <div className={s.select_consultation + " " + s.select_margin}>
                    <p className={s.Font_size24} style={{ color: config?.config.colors.color5 }}>Понравилось</p>
                    <textarea name="like" className={s.Font_size14} required minLength={10} placeholder="Здесь можно указать главные плюсы" />
                </div>
                <div className={s.select_consultation + " " + s.select_margin}>
                    <p className={s.Font_size24} style={{ color: config?.config.colors.color5 }}>Не понравилось</p>
                    <textarea name="not_like" className={s.Font_size14} required minLength={10} placeholder="Какие недостатки вы отметили?" />
                </div>
                <div className={s.otziv}>
                    <Button class="btn blue" type="submit" text="Оставить отзыв" />
                </div>
            </form>
            {/* КОМПОНЕНТ ОШИБКИ */}
            <FormErrors error={errorMessage.error.message} />
            {/* КОМПОНЕНТ ОШИБКИ */}
        </div>
    </div>
    <Chat/>
</div>
    )
}
export default PostRewiew;