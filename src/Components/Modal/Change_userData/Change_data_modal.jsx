import React from "react";
import s from './Change_data.module.css';
import { useSelector } from "react-redux";
const ChangeData = () => {
    
    const config = useSelector((state) => state.config.config);
    return (
        <div className={s.Cancel_Record_full}>
            <div className={s.Cancel_Record_block}>
                    <img src="https://api.telemed.dev-h.ru/images/ui/doc3.png" alt="" />
                <div className={s.Cancel_Record}>
                    <h1 style={{color: config?.config.colors.color2}}>При редактирование личных данных они не будут изменены в медицинской карте. Для обновления данных в медицинской карте свяжитесь с поддержкой.</h1>
                    <div className={s.Cancel_Record_button}>
                        <button className={s.buttonActive}>продолжить</button>
                        <button className={s.buttonNo}>отмена</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangeData;