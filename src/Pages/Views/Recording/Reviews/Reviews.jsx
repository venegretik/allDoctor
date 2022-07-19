import React from "react";
import s from '../Recording.module.css';
import star from '../../../../img/Rating_Star.png';
import Stars from "../../../../Components/Stars/Stars";
import AnswerReviews from "./answerReviews";
const Reviews = (props) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let review = props.arrayReview.map(el=>
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
            <p className={s.gray  + " " +s.Font_size14}>
                {new Date(el.datetime).toLocaleString(
                    "ru",
                    {
                      month: "short",
                      year: "numeric",
                      day: "numeric",
                    }
                  )}</p>
            <h2 className={s.Font_size24}>{el.fistname}</h2>
            <p className={s.Staj + " " + s.gray + " " +s.Font_size14}>Прошёл консультацию: {el.consultation_date}</p>
            <div className={s.Doctor_info_content}>
                <div className={s.Doctor_info_favorite}>
                    <b>Понравилось</b>
                    <p className={s.Font_size14}>{el.like}</p>
                </div>
                <div className={s.Doctor_info_unfavorite}>
                    <b>Не понравилось</b>
                    <p className={s.Font_size14}>{el.not_like}</p>
                </div>
                <div className={s.Doctor_info_message}>
                    <b>Комментарий</b>
                    <p className={s.Font_size14}>
                        {
                            `${el.comment}`
                        }
                    </p>
                    <AnswerReviews arrayAnswer={el.answers}/>
                </div>
            </div>
        </div>
    </div>)
    return (
        <div>
            {review}
            <div className={s.Reviews_buttons_full}>
                <div className={s.Reviews_buttons}>
                    <button className={s.Show_more + " " +s.Font_size14}>Показать ещё</button>
                    <button className={s.Reviews_send + " " +s.Font_size14}>Оставить отзыв</button>
                </div>
            </div>
        </div>
    )
}
export default Reviews;