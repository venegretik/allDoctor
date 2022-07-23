import React from "react";
import s from './Messages.module.css';
import Button from "../../../../Components/Button/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotification } from "../../../../base/asyncActions/getMainPageInfo";
const Messages = () => {
    let dispatch = useDispatch();
    const [NewMessage, setNewMessage] = useState(true);
    let [num, setInt] = useState(1);
    const asyncNotification = async () => {
        const response = await dispatch(getNotification(num));
        if (response.status) {
            setNewMessage(response);

        }
    };
    const asyncNotificationShow = async () => {
        if (num >= 3)
                setInt(num)
            else
                setInt(++num)
        const response = await dispatch(getNotification(num));
    };
    useEffect(() => {
        asyncNotification();
    }, []);
    return (
        <div className={s.Messages_full}>
            {NewMessage.items ? NewMessage.items.map((item) =>
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
            ) : ""}
            <div className={s.Message_button}>
                <div className={s.Message_button_margin} onClick={asyncNotificationShow}>
                    <Button
                        
                        className={s.Show_more + " " + s.Font_size14}
                        type={'submit'}
                        class={'btn white'}
                        text={'Показать ещё'}
                    />
                </div>
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