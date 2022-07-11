import React from "react";
import s from './Change_login.module.css';
import Button from "../../Button/Button";
const ChangeLogin = () => {
    return(
        <div className={s.ChangeLogin}>
            <div className={s.ChangeLoginTitle}>
                <h1>Изменить телефон</h1>
            </div>
            <div className={s.ChangeLoginMain}>
            <div className={s.ChangeLoginMain_step1}>
                <p>Мы отправим код подтверждения на ваш текущий номер +7 999 156 46 75</p>
            </div>
            <div className={s.ChangeLoginMain_step2}>
                <input type="text" />
                <p>Отправить другой код через 00:46</p>
            </div>
            <div className={s.ChangeLoginMain_step3}>
                <input type="text" />
            </div>
            </div>
            <div className={s.ChangeLoginButton}>
               <Button text="получить код" class="blue btn"/>
               <Button text="отмена" class="btn"/>
            </div>
        </div>
    )
}
export default ChangeLogin;