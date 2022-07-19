import React from "react";
import s from './Post_review.module.css';
import star from '../../../img/Rating_Star.png';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { axiosReviews } from "../../../base/asyncActions/getReviews";
import SelectReview from "../../../Components/Select/SelectReview/SelectReview";
import StarComponent from "./StarComponent";
import { axiosPostReviews } from "../../../base/asyncActions/getReviews";
import { Star1Action, Star2Action, Star3Action, Star4Action, Star5Action } from "../../../base/Reducers/reviewsReducer";
const PostRewiew = () => {
    const params = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(axiosReviews(params.id));
    }, []);
    const star1 = useSelector(state => state.review.star1);
    const star2 = useSelector(state => state.review.star2);
    const star3 = useSelector(state => state.review.star3);
    const star4 = useSelector(state => state.review.star4);
    const star5 = useSelector(state => state.review.star5);
    const idCons = useSelector(state => state.review.idCons);
    const review = useSelector((state) => state.review);
    const sendForm = async (e) => {
        e.preventDefault()
        const data = await new FormData(e.target);
        let obj={};
        [...data].forEach(e => {obj[e[0]] = e[1]})
        obj.consultation_id = idCons;
        obj.accuracy= star1;
        obj.efficiency = star2;
        obj.attitude = star3;
        obj.informing = star4;
        obj.recommend = star5;
        dispatch(axiosPostReviews(obj))
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
                            <StarComponent func={Star1Action} el_id={1}/>
                        </div>
                    </li>
                    <li>
                        <b className={s.Font_size24}>Эффективность лечения</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <StarComponent func={Star2Action} el_id={2}/>
                        </div>
                    </li>
                    <li>
                        <b className={s.Font_size24}>Отношение к пациенту</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <StarComponent func={Star3Action} el_id={3}/>
                        </div>
                    </li>
                    <li>
                        <b className={s.Font_size24}>Информирование пациента</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <StarComponent func={Star4Action} el_id={4}/>
                        </div>
                    </li>
                    <li>
                        <b className={s.Font_size24}>Посоветуете ли Вы врача?</b>
                        <div className={s.Doctor_avatar_info + " " + s.black}>
                            <StarComponent func={Star5Action} el_id={5}/>
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
                    <div className={s.select_consultation + " " + s.select_margin}>
                        <p className={s.Font_size24}>Ваша история</p>
                        <textarea name="comment" placeholder="Расскажите, как обратились к врачу, как прошла консультация, помогло ли лечение" />
                    </div>
                    <div className={s.select_consultation + " " + s.select_margin}>
                        <p className={s.Font_size24}>Понравилось</p>
                        <textarea name="like" placeholder="Здесь можно указать главные плюсы" />
                    </div>
                    <div className={s.select_consultation + " " + s.select_margin}>
                        <p className={s.Font_size24}>Не понравилось</p>
                        <textarea name="not_like" placeholder="Какие недостатки вы отметили?" />
                    </div>
                    <div className={s.otziv}>
                        <button type={'submit'} disabled={idCons && star1 && star2 && star3 && star4 && star5 ? false : true} className={s.Font_size14}>Оставить отзыв</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PostRewiew;