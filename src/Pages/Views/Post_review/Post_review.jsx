import React from "react";
import s from './Post_review.module.css';
import star from '../../../img/Rating_Star.png';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosReviews } from "../../../base/asyncActions/getReviews";
import SelectReview from "../../../Components/Select/SelectReview/SelectReview";
import StarComponent from "./StarComponent";
import { Star1Action, Star2Action, Star3Action, Star4Action, Star5Action } from "../../../base/Reducers/reviewsReducer";
const PostRewiew = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(axiosReviews(4));
    }, []);
    const review = useSelector((state) => state.review);
    const sendForm = async (e) => {
        e.preventDefault()
        const data = await new FormData(e.target);
        console.log({...data});
      }
    return (
        <div className={s.Review_full}>
            <div className={s.Review_title}>
                <h1 className={s.Font_size24}>Оставить отзыв</h1>
            </div>
            <div className={s.Doctor_infos}>
                <div className={s.Doctor_avatar}>
                    <div className={s.Doctor_avatar_img}>
                        <img src={review.photo} alt="" />
                    </div>
                </div>
                <div className={s.Doctor_info + " " + s.black}>
                    <p className={s.gray + " " + s.Font_size14}>{review.specialization.join(' • ')}</p>
                    <h2 className={s.Font_size24}>{review.firstname + " " + review.lastname + " " + review.secondname}</h2>
                    <p className={s.Staj + " " + s.Font_size14}>{review.regalia.join(' • ')}</p>
                </div>
            </div>
            <div className={s.Grade}>
                <ul>
                    <li>
                        <b className={s.Font_size24}>Тщательное обследование</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <StarComponent func={Star1Action} />
                        </div>
                    </li>
                    <li>
                        <b className={s.Font_size24}>Эффективность лечения</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <StarComponent func={Star2Action} />
                        </div>
                    </li>
                    <li>
                        <b className={s.Font_size24}>Отношение к пациенту</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <StarComponent func={Star3Action} />
                        </div>
                    </li>
                    <li>
                        <b className={s.Font_size24}>Информирование пациента</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <StarComponent func={Star4Action} />
                        </div>
                    </li>
                    <li>
                        <b className={s.Font_size24}>Посоветуете ли Вы врача?</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <StarComponent func={Star5Action} />
                        </div>
                    </li>
                </ul>
            </div>
            <div className={s.Rewiew_add}>
                <form onSubmit={(e) => sendForm(e)}>
                    <div className={s.select_consultation}>
                        <p className={s.Font_size24}>Выберите консультацию</p>
                        <SelectReview array={review.consultations} />
                    </div>
                        <p className={s.Font_size24}>Ваша история</p>
                        <textarea name="comment" placeholder="Расскажите, как обратились к врачу, как прошла консультация, помогло ли лечение" />
                    <div className={s.select_consultation + " " + s.select_margin}>
                        <p className={s.Font_size24}>Понравилось</p>
                        <textarea name="like" placeholder="Здесь можно указать главные плюсы" />
                    </div>
                    <div className={s.select_consultation + " " + s.select_margin}>
                        <p className={s.Font_size24}>Не понравилось</p>
                        <textarea name="not_like" placeholder="Какие недостатки вы отметили?" />
                    </div>
                    <div className={s.otziv}>
                        <button type={'submit'} className={s.Font_size14}>Оставить отзыв</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PostRewiew;