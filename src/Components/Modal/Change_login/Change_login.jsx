import React from "react";
import s from "./Change_login.module.css";
import Button from "../../Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosProfileEmailEdit, axiosProfilePhoneEdit, axiosProfile } from "../../../base/asyncActions/Profile";
import { Input } from "../../Input/Input";
import { InpMask } from "../../Input/Input";
import Timer from "../../Timer/Timer";
import FormErrors from "../../FormError/FormError";
const ChangeLogin = (props) => {
  let profile = useSelector((state) => state.profile),
    [Error, setError] = useState(""),
    [code, setcode] = useState(""),
    [isShown, setIsShown] = useState(1),
    [timerNum, settimerNum] = useState(1),
    dispatch = useDispatch();
  let phone = "+";
  for (let i = 0; profile.phone.length > i; i++) {
    if (i === 1) {
      phone += " ";
      phone += profile.phone[i];
    } else if (i === 4) {
      phone += " ";
      phone += profile.phone[i];
    } else if (i === 7) {
      phone += " ";
      phone += profile.phone[i];
    } else if (i === 9) {
      phone += " ";
      phone += profile.phone[i];
    } else phone += profile.phone[i];
  }
  const sendForm = async (e) => {
    e.preventDefault();
    const data = await new FormData(e.target);
    let obj = {};
    [...data].forEach((e) => {
      obj[e[0]] = e[1];
    });
    if (isShown === 3) {
      const responce = props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit(Number(code), obj.phone.replace(/[\D]+/g, ""))) : await dispatch(axiosProfileEmailEdit(Number(obj.code), obj.email));
      if (responce.status) {
        props.setWindow(false);
        dispatch(axiosProfile());
      }
      setError("");
    }
    if (isShown === 2) {
      const responce = props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit(Number(obj.code), profile.phone)) : await dispatch(axiosProfileEmailEdit(Number(obj.code), profile.email));
      if (responce.status) {
        setIsShown(++isShown);
        setcode(Number(obj.code))
      }
      else
        setError("Неверный код, попробуйте ещё раз");
    }
    if (isShown === 1) {
      const responce = props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit(0, profile.phone)) : await dispatch(axiosProfileEmailEdit(0, profile.email));
      setIsShown(++isShown);
      settimerNum(responce.resend_timeout)
    }

  };
  return (
    <div>
      <div >
        <div className={s.ChangeLogin}>
          <div className={s.Cart_close + " " + s.black} onClick={e => props.setWindow(false)}>
            &times;
          </div>
          <div className={s.ChangeLoginTitle}>
            <h1 className={s.Font_size24}>{props.type_el === "phone" ? "Изменить телефон" : "Изменить почту"}</h1>
          </div>
          <div className={s.ChangeLoginMain}>

            {isShown === 1 ? (
              <form onSubmit={(e) => { sendForm(e) }}>
                <div className={s.ChangeLoginMain_step1}>
                  <span>
                    <p className={s.Font_size14 + " gray_config"}>
                      {props.type_el === "phone" ? "Мы отправим код подтверждения на ваш текущий " : "Мы отправим код подтверждения на вашу текущую электронную почту "}
                    </p>
                    <p className={s.Font_size14 + " black_config"}>
                      {props.type_el === "phone" ? phone : profile.email}
                    </p>
                  </span>

                  <div className={s.ChangeLoginButton}>
                    <div className={s.ChangeMargin}>
                      <Button
                        text={"Получить код"}
                        class="blue btn"
                        type="submit"
                      />
                    </div>
                    <div onClick={e => {
                      props.setWindow(false)
                      setError("")
                    }}>
                      <Button text="отмена" class="btn white" />
                    </div>
                  </div>
                </div>
              </form>
            ) : isShown === 2 ? (
              <form onSubmit={(e) => { sendForm(e) }}>
                <div className={s.ChangeLoginMain_step2}>
                  <Input pattern={'[0-9]{4}'} required placeholder={props.type_el === "phone" ? 'Код из SMS' : 'Код из Электронной почты'} type={'text'} className={'input'}
                    maxLength={4} name="code" />
                  <FormErrors error={Error} />
                  <p className={s.Font_size14 + " blue_config"} onClick={async e => {
                    let responce = props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit(0, profile.phone)) : await dispatch(axiosProfileEmailEdit(0, profile.email))
                    settimerNum(responce.resend_timeout);
                  }}>Отправить код повторно
                    <Timer time={timerNum} /></p>
                  <div className={s.ChangeLoginButton} >
                    <div className={s.ChangeMargin}>
                      <Button
                        text={"Подтвердить"}
                        class="blue btn"
                      />
                    </div>
                    <div onClick={e => {
                      props.setWindow(false)
                      setError("")
                    }}>
                      <Button text="отмена" class="btn white" />
                    </div>
                  </div>
                </div>
              </form>
            ) : isShown === 3 ? (
              <form onSubmit={(e) => { sendForm(e) }}>
                <div className={s.ChangeLoginMain_step3}>
                  {props.type_el === "phone" ? <InpMask pattern={'[+][7]\\s[(][0-9]{3}[)]\\s[0-9]{3}-[0-9]{2}-[0-9]{2}'} required
                    placeholder={props.type_el === "phone" ? 'Новый номер телефона' : 'Новая электронная почта'} type={'tel'} className={'input ' + s.Telephone} name={'phone'} /> : <Input required
                      placeholder={'Новая электронная почта'}
                      type={'email'}
                      name={'email'} />}
                  <div className={s.ChangeLoginButton}>
                    <div className={s.ChangeMargin}>
                      <Button
                        text={"Изменить"}
                        class="blue btn"
                        type="submit"
                      />
                    </div>
                    <div onClick={e => {
                      props.setWindow(false)
                      setError("")
                    }}>
                      <Button text="отмена" class="btn white" />
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              ""
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
export default ChangeLogin;
