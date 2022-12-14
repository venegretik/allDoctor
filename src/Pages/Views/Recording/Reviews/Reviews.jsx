import React from "react";
import s from '../Recording.module.css';
import Stars from "../../../../Components/Stars/Stars";
import AnswerReviews from "./answerReviews";
import { Link } from "react-router-dom";
import Button from "../../../../Components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { axiosReview } from "../../../../base/asyncActions/getReviews";
const Reviews = (props) => {
    let dispatch = useDispatch();
    const config = useSelector((state) => state.config.config);
    useEffect(() => {
        if (!recording?.reviewsArray[0])
            dispatch(axiosReview(props.usId));
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let recording = useSelector(state => state.recording);
    let keyNum = 0;
    let page = useSelector(state => state.recording.current_page);
    let total_page = useSelector(state => state.recording.total_page);
    let review = recording.reviewsArray.map(el =>
        <div key={++keyNum} className={s.ReviewsFull}>
            <div className={s.Doctor_infos}>
                <div className={s.Doctor_avatar}>
                    <div className={s.Doctor_avatar_img}>
                        <img alt="" src={config.config.images.notify}  />
                    </div>
                    <div className={s.Doctor_avatar_info + " " + s.black}>
                        <Stars num={el.rate} />
                    </div>
                </div>
                <div className={s.Doctor_info + " " + s.black}>
                    <p className={s.gray + " " + s.Font_size14}>
                        {new Date(el.datetime).toLocaleString(
                            "ru",
                            {
                                month: "short",
                                year: "numeric",
                                day: "numeric",
                            }
                        )}</p>
                    <h2 className={s.Font_size24 + " title_config"}>{el.fistname}</h2>
                    <p className={s.Staj + " " + s.gray + " " + s.Font_size14 + " gray_config"}>???????????? ????????????????????????: {el.consultation_date}</p>
                    <div className={s.Doctor_info_content}>
                        <div className={s.Doctor_info_favorite}>
                            <b>??????????????????????</b>
                            <p className={s.Font_size14}>{el.like}</p>
                        </div>
                        <div className={s.Doctor_info_unfavorite}>
                            <b>???? ??????????????????????</b>
                            <p className={s.Font_size14}>{el.not_like}</p>
                        </div>
                        <div className={s.Doctor_info_message}>
                            <b>??????????????????????</b>
                            <p className={s.Font_size14}>
                                {
                                    `${el.comment}`
                                }
                            </p>
                            <AnswerReviews arrayAnswer={el.answers} />
                        </div>
                    </div>

                </div>
            </div>
            <div className={s.LineEndComment}>

            </div>
        </div>)
    return (
        <div>
            {review}
            <div className={s.Reviews_buttons_full}>
                <div className={s.Reviews_buttons}>
                    <div className={s.Message_button_margin} onClick={e => {
                        if (page < total_page)
                            dispatch(axiosReview(props.usId, ++page))
                    }}>
                        <Button
                            className={s.Show_more + " " + s.Font_size14}
                            type={'submit'}
                            class={'btn white'}
                            text={'???????????????? ??????'}
                        />
                    </div>
                    <Link to={"../post-rewiew/" + props.usId}>
                        <Button
                            className={s.Reviews_send + " " + s.Font_size14}
                            type={'submit'}
                            class={'btn orange'}
                            text={'???????????????? ??????????'}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Reviews;