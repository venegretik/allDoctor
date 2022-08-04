import React from "react";
import s from './Change_data.module.css';
import { useState } from "react";
const ChangeData = (props) => {
    let [isShow, setShow] = useState(true);
    return (
        isShow ? <div className={s.Cancel_Record_full}>
            <div className={s.Cancel_Record_block}>
                <div>
                    <img src="https://api.telemed.dev-h.ru/images/ui/doc3.png" alt="" />
                </div>
                <div className={s.Cancel_Record}>
                    <h1 className={s.Font_size24}>При редактирование личных данных они не будут изменены в медицинской карте. Для обновления данных в медицинской карте свяжитесь с поддержкой.</h1>
                    <div className={s.Cancel_Record_button}>
                        <button className={s.buttonActive} onClick={e => setShow(false)}>продолжить</button>
                        <button className={s.buttonNo} onClick={e => setShow(false)}>отмена</button>
                    </div>
                </div>
            </div>
        </div> : ""

    )
}
export default ChangeData;