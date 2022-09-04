import React from "react";
import s from './Messages.module.css';
import Button from "../../../../Components/Button/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotification } from "../../../../base/asyncActions/getMainPageInfo";
import { getConfigHeaderAction } from "../../../../base/Reducers/configReducer";
import { axiosProfileDeleteNot, axiosProfileDeleteNotAll } from "../../../../base/asyncActions/Profile";
const Messages = () => {
    let dispatch = useDispatch();
    const NewArray = useSelector((state) => state.main.notification);
    let num = useSelector((state) => state.main.current_page);
    const asyncNotification = async () => {
        dispatch(getNotification(num));
    };
    const asyncNotificationDelete = async (notofication_id) => {
        const response = await dispatch(axiosProfileDeleteNot(notofication_id))
        if (response.status)
            dispatch(getNotification(num))
    }
    const asyncNotificationDeleteAll = async () => {
        const response = await dispatch(axiosProfileDeleteNotAll())
        if (response.status)
            dispatch(getNotification(1));
    }
    const asyncNotificationShow = async () => {
        dispatch(getNotification(++num))
    };
    useEffect(() => {
        asyncNotification();
        dispatch(getConfigHeaderAction("Уведомления"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className={s.Messages_full}>
            {NewArray[0] ? NewArray.map((item, key) =>
                <div className={s.Messages_block + " black_config"} key={key}>
                    <div className={s.Messages_close} onClick={e => asyncNotificationDelete(item.notofication_id)}>
                        &times;
                    </div>
                    <div className={s.Messages_text}>
                        <h1 className={s.Font_size24 + " title_config"}>{item.title}</h1>
                        <p className={s.Font_size14}>{item.description}</p>
                        <p className={s.Font_size14 + " gray_config"}>23 июля 2023, в 12:21</p>
                    </div>
                    <div className={s.Messages_line}>

                    </div>
                </div>
            ) : <h4 className={s.text_notice + " gray_config"}>Новых уведомлений нет</h4>}
            <div className={s.Message_button}>
                <div className={s.Message_button_margin} onClick={asyncNotificationShow}>
                    <Button

                        className={s.Show_more + " " + s.Font_size14}
                        type={'submit'}
                        class={'btn white'}
                        text={'Показать ещё'}
                    />
                </div>
                <div onClick={asyncNotificationDeleteAll}>
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