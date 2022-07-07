import React from "react";
import s from './Cancel_Record.module.css';
const Cancel_Record = () => {
    return (
        <div className={s.Cancel_Record_full}>
            <div className={s.Cancel_Record_block}>
                <div>
                    <img src="https://api.telemed.dev-h.ru/images/ui/doc3.png" alt="" />
                </div>
                <div className={s.Cancel_Record}>
                    <h1>Вы действительно хотите отменить запись?</h1>
                    <div className={s.Cancel_Record_button}>
                        <button className={s.buttonActive}>Да</button>
                        <button className={s.buttonNo}>Нет</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cancel_Record;