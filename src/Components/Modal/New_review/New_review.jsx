import React from "react";
import s from './New_review.module.css';
const New_review = () => {
    return (
        <div className={s.Cancel_Record_full}>
            <div className={s.Cancel_Record_block}>
                <div>
                    <img alt="" src={config.images.confuse}  />
                </div>
                <div className={s.Cancel_Record}>
                    <h1>Оставить отзыв?</h1>
                    <div className={s.Cancel_Record_button}>
                        <button className={s.buttonActive}>Да</button>
                        <button className={s.buttonNo}>Нет</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default New_review;