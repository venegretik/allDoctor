import React from "react";
import s from './Messages.module.css';
import Button from "../../../../Components/Button/Button";
const Messages = () => {
    return (
        <div className={s.Messages_full}>
            <div className={s.Messages_block}>
                <div className={s.Messages_close}>
                    +
                </div>
                <div className={s.Messages_text}>
                    <h1 className={s.Font_size24}>Спасибо за регистрацию!</h1>
                    <p className={s.Font_size14}>Независимые СМИ потому и независимы, что спикеры палаты госдумы негодуют!</p>
                    <p className={s.Font_size14}>23 июля 2023, в 12:21</p>
                </div>
                <div className={s.Messages_line}>

                </div>
            </div>
            <div className={s.Message_button}>
                <Button
                    className={s.Show_more + " " + s.Font_size14}
                    type={'submit'}
                    class={'btn white'}
                    text={'Показать ещё'}
                />
                <Button
                    className={s.Show_more + " " + s.Font_size14}
                    type={'submit'}
                    class={'btn orange'}
                    text={'Очистить'}
                />
            </div>
        </div>
    )
}
export default Messages;