import React from "react";
import s from '../Recording.module.css';
import { useSelector } from "react-redux";
const AnswerReviews = (props) => {
    const config = useSelector((state) => state.config.config);
    let answer =[],
    keyNum = 0;
    if(props.arrayAnswer){
        answer = props.arrayAnswer.map(el => <div key={++keyNum} className={s.Doctor_message}>
            <div className={s.Doctor_message_avatar}>
                <img alt="" src={config.config.images.notify}  />
            </div>
            <div className={s.Doctor_message_content}>
                <b className={s.Font_size24 + " title_config"}>{el.name}</b>
                <p className={s.gray + " " + s.Font_size14 + " gray_config"}>
                    {new Date(el.datetime).toLocaleString(
                    "ru",
                    {
                      month: "numeric",
                      year: "numeric",
                      day: "numeric",
                    }
                  )}</p>
                <p className={s.Font_size14 + " " + s.Comment}>{el.comment}</p>
            </div>
        </div>)
    }
    
    return (
        <div>
            {answer}
        </div>
    )
}
export default AnswerReviews;