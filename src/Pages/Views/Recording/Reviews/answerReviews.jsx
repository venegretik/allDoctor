import React from "react";
import s from '../Recording.module.css';
const AnswerReviews = (props) => {
    let answer =[],
    keyNum = 0;
    if(props.arrayAnswer){
        answer = props.arrayAnswer.map(el => <div key={++keyNum} className={s.Doctor_message}>
            <div className={s.Doctor_message_avatar}>
                <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt="" />
            </div>
            <div className={s.Doctor_message_content}>
                <b className={s.Font_size24}>{el.name}</b>
                <p className={s.gray + " " + s.Font_size14}>
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