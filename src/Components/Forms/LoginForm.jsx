import React, { useState } from "react";
import style from "../../Pages/Views/Login/Login.module.css";
import { Input, InpMask } from "../Input/Input";
import Button from "../Button/Button";
import { axiosLogin, axiosSendCode } from "../../base/asyncActions/Login";
import { useDispatch, useSelector } from "react-redux";
import Timer from "../Timer/Timer";
const LoginForm = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.send);
  const phone = useSelector((state) => state.login.phone);
  const [error, setError] = useState("");

  const getCode = (e) => {
    e.preventDefault();
    let number = e.target[0].value;
    dispatch(axiosLogin(number.replace(/[\D]+/g, "")));
  };
  const sendCode = async (e) => {
    e.preventDefault();
    let number = e.target[0].value,
      code = e.target[1].value,
      err = await dispatch(axiosSendCode(number.replace(/[\D]+/g, ""), code));

    if (err) {
      setError(err);
    }
  };
  const resendCode = () => {
    dispatch(axiosLogin(phone));
  };
  return (
    <>
      <form
        className={style.login_form}
        action=""
        onSubmit={(e) => (login ? sendCode(e) : getCode(e))}
      >
        <InpMask
          pattern={"[+][7]\\s[(][0-9]{3}[)]\\s[0-9]{3}-[0-9]{2}-[0-9]{2}"}
          required
          placeholder={"Номер телефона"}
          type={"tel"}
          className={"input"}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        {login && (
          <Input
            pattern={"[0-9]{4}"}
            required
            placeholder={"Код из SMS"}
            type={"text"}
            className={"input"}
            maxLength={4}
          />
        )}
        <Button
          type={"submit"}
          text={login ? "войти" : "получить код"}
          class={"btn blue"}
        />
        {login && (
          <button
            type={"button"}
            onClick={resendCode}
            className={style.login_resend_code}
          >
            Отправить код повторно
            <Timer />
          </button>
        )}
      </form>
    </>
  );
};

export { LoginForm };
