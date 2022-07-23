import React from "react";
import s from './RequestMoney.module.css';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Input } from "../../Input/Input";
import Button from "../../Button/Button";
const RequestMoney = (props) => {
    let dispatch = useDispatch();
    let [showWindow, setWindow] = useState(false);
    return (
        <div>
            <div onClick={e=>setWindow(true)}>
                <p >Вывести средства</p>
            </div>
            {showWindow ? <div className={s.Cancel_Record_full}>
                <div className={s.Cancel_Record_block}>
                    <div className={s.Cart_close} onClick={e=>setWindow(false)}>
                        +
                    </div>
                    <h1>Запросить средства</h1>
                    <p>Сумма будет доступна в течении 3х рабочих дней</p>
                    <div className={s.Cancel_Record}>
                        <Input placeholder={'Сумма'}
                        type="text"
                        />
                        <Button
                            class={'btn orange'}
                            text={'Запросить'} />
                    </div>
                </div>
            </div> : ""}
        </div>
    )
}
export default RequestMoney;