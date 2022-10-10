import React from "react";
import s from './Checkbox.module.css';

const Checkbox = (props) => {
    return (
        <div className={s.Register_checkbox}>
            <input type="checkbox" id="Register_checkbox" className={s.custom_checkbox} />
            <label htmlFor="Register_checkbox">Я принимаю условия пользовательского соглашения и даю своё согласие на обработку персональных данных</label>
        </div>
    )
}
export default Checkbox;