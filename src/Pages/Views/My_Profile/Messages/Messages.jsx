import React from "react";
import s from './Messages.module.css';
import Button from "../../../../Components/Button/Button";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotification } from "../../../../base/asyncActions/getMainPageInfo";
import { axiosProfileDeleteNot, axiosProfileDeleteNotAll } from "../../../../base/asyncActions/Profile";
const Messages = () => {
    let dispatch = useDispatch();
    const [NewMessage, setNewMessage] = useState(true);
    let [num, setInt] = useState(1);
    const [NewArray, setNewArray] = useState([]);
    const asyncNotification = async () => {
        const response = await dispatch(getNotification(num));
        if (response.status) {
            setNewArray(response.items);

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
            {NewArray[0] ? NewArray.map((item) =>
                <div className={s.Messages_block} key={item.notofication_id}>
                    <div className={s.Messages_close} onClick={e => dispatch(axiosProfileDeleteNot(item.notofication_id))}>
                        +
                    </div>
                    <div className={s.Messages_text}>
                        <h1 className={s.Font_size24}>{item.title}</h1>
                        <p className={s.Font_size14}>{item.description}</p>
                        <p className={s.Font_size14}>23 июля 2023, в 12:21</p>
                    </div>
                    <div className={s.Messages_line}>

                    </div>
                </div>
            ) : <h4 className={s.text_notice}>Новых уведомлений нет</h4>}
            <div className={s.Message_button}>
                <div className={s.Message_button_margin} onClick={asyncNotificationShow}>
                    <Button

                        className={s.Show_more + " " + s.Font_size14}
                        type={'submit'}
                        class={'btn white'}
                        text={'Показать ещё'}
                    />
                </div>
                <div onClick={e =>dispatch(axiosProfileDeleteNotAll())}>
                    <Button
                        className={s.Show_more + " " + s.Font_size14}
                        type={'submit'}
                        class={'btn orange'}
                        text={'Очистить'}
                    />
                </div>

            </div>
        </div>
    )
}
export default Messages;