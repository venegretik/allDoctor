import React from "react";
import s from "./Change_login.module.css";
import Button from "../../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getLoginModal } from "../../../base/Reducers/modalReduces";

const ChangeLogin = () => {
  let [isShown, setIsShown] = useState(1),
    handleClick = (event) => {
      setIsShown(++isShown);
    },
    dispatch = useDispatch();
  return (
    <div className={s.ChangeLoginFull}>
      <div className={s.ChangeLogin}>
        <div className={s.ChangeLoginTitle}>
          <h1>Изменить телефон</h1>
        </div>
        <div className={s.ChangeLoginMain}>
          {isShown === 1 ? (
            <div className={s.ChangeLoginMain_step1}>
              <p>
                Мы отправим код подтверждения на ваш текущий номер +7 999 156 46
                75
              </p>
            </div>
          ) : isShown === 2 ? (
            <div className={s.ChangeLoginMain_step2}>
              <input type="text" />
              <p>Отправить другой код через 00:46</p>
            </div>
          ) : isShown === 3 ? (
            <div className={s.ChangeLoginMain_step3}>
              <input type="text" />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={s.ChangeLoginButton} onClick={handleClick}>
          <Button
            text={
              isShown == 1
                ? "Получить код"
                : isShown == 2
                ? "Подтвердить"
                : isShown == 3
                ? "Изменить"
                : ""
            }
            class="blue btn"
          />
          <Button text="отмена" class="btn" />
        </div>
        <button
          onClick={() => dispatch(getLoginModal(false))}
          type="button"
          style={{ fontSize: "30px" }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};
export default ChangeLogin;
