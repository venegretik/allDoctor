import React from "react";
import s from "./Change_login.module.css";
import Button from "../../Button/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosProfileEmailEdit, axiosProfilePhoneEdit } from "../../../base/asyncActions/Profile";
import { Input } from "../../Input/Input";
import { InpMask } from "../../Input/Input";
import { BottomSheet } from 'react-spring-bottom-sheet'
import Timer from "../../Timer/Timer";
import FormErrors from "../../FormError/FormError";
const ChangeLogin = (props) => {
  let [Modal, setModal] = useState(false),
    profile = useSelector((state) => state.profile),
    [Error, setError] = useState(""),
    [isShown, setIsShown] = useState(1),
    dispatch = useDispatch(),
    showFunc = () => {
      setModal(true);
      setIsShown(1);
    }
  useEffect(() => {
    if (!Modal) {
      document.body.style.overflow = "auto";
    }
    if (Modal) {
      document.body.style.overflow = "hidden";
    }
  }, [Modal])
  const sendForm = async (e) => {
    e.preventDefault();
    const data = await new FormData(e.target);
    let obj = {};
    [...data].forEach((e) => {
      obj[e[0]] = e[1];
    });

    if (isShown === 3) {
      const responce = props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit(obj.code, obj.phone)) : await dispatch(axiosProfileEmailEdit(obj.code, obj.email));
      if (responce.status)
        setModal(false);
      setError("");
    }
    if (isShown === 2) {
      const responce = props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit(obj.code)) : await dispatch(axiosProfileEmailEdit(obj.code));
      if (responce.status)
        setIsShown(++isShown);
      else
        setError("Неверный код, попробуйте ещё раз");
    }
    if (isShown === 1) {
      props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit()) : await dispatch(axiosProfileEmailEdit());
      setIsShown(++isShown);
    }

  };
  const availableScreenWidth = window.screen.availWidth;
  return (
    <div>
      <p
        onClick={() => showFunc()}
        className={s.Profile_replace_tel_link + " " + s.Font_size14 + " blue_config"}
      >
        Изменить
      </p>
      {Modal ? <>
        {availableScreenWidth <= 480 ? <BottomSheet open={Modal}
          onDismiss={() => setModal(false)}>
          <div>
            <div className={s.Cart_close + " " + s.black} onClick={e => setModal(false)}>
              &times;
            </div>
            <div className={s.ChangeLoginTitle}>
              <h1 className={s.Font_size24 + " title_config"}>{props.type_el === "phone" ? "Изменить телефон" : "Изменить email"}</h1>
            </div>
            <div className={s.ChangeLoginMain}>

              {isShown === 1 ? (
                <form onSubmit={(e) => { sendForm(e) }}>
                  <div className={s.ChangeLoginMain_step1}>
                    <p className={s.Font_size14 + " black_config"}>
                    {props.type_el === "phone" ? "Мы отправим код подтверждения на ваш текущий " + profile.phone : "Мы отправим код подтверждения на вашу текущую электронную почту " + profile.email}
                    </p>
                    <div className={s.ChangeLoginButton}>
                      <div className={s.ChangeMargin}>
                        <Button
                          text={"Получить код"}
                          class="blue btn"
                          type="submit"
                        />
                      </div>
                      <div onClick={e => {
                        setModal(false)
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
                    <FormErrors className={s.Font_size14} error={Error} />
                    <p className={s.Font_size14 + " blue_config"} >Отправить код повторно
                      <Timer /></p>
                    <div className={s.ChangeLoginButton} >
                      <div className={s.ChangeMargin}>
                        <Button
                          text={"Подтвердить"}
                          class="blue btn"
                        />
                      </div>
                      <div onClick={e => {
                        setModal(false)
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
                      placeholder={'Номер телефона'} type={'tel'} className={'input'} name={'phone'} /> : <Input required
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
                        setModal(false)
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
        </BottomSheet> : ""}
        <div className={s.ChangeLoginFull}>
        {Modal ? <div className="background" onClick={e => setModal(false)}></div> : ""}
          <div className={s.ChangeLogin}>
            <div className={s.Cart_close + " " + s.black} onClick={e => setModal(false)}>
              &times;
            </div>
            <div className={s.ChangeLoginTitle}>
              <h1 className={s.Font_size24}>{props.type_el === "phone" ? "Изменить телефон" : "Изменить email"}</h1>
            </div>
            <div className={s.ChangeLoginMain}>

              {isShown === 1 ? (
                <form onSubmit={(e) => { sendForm(e) }}>
                  <div className={s.ChangeLoginMain_step1}>
                    <p className={s.Font_size14}>
                      {props.type_el === "phone" ? "Мы отправим код подтверждения на ваш текущий " + profile.phone : "Мы отправим код подтверждения на вашу текущую электронную почту " + profile.email}
                    </p>
                    <div className={s.ChangeLoginButton}>
                      <div className={s.ChangeMargin}>
                        <Button
                          text={"Получить код"}
                          class="blue btn"
                          type="submit"
                        />
                      </div>
                      <div onClick={e => {
                        setModal(false)
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
                    <FormErrors className={s.Font_size14} error={Error} />
                    <p className={s.Font_size14} >Отправить код повторно
                      <Timer /></p>
                    <div className={s.ChangeLoginButton} >
                      <div className={s.ChangeMargin}>
                        <Button
                          text={"Подтвердить"}
                          class="blue btn"
                        />
                      </div>
                      <div onClick={e => {
                        setModal(false)
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
                      placeholder={props.type_el === "phone" ? 'Новый номер телефона' : 'Новая электронная почта'} type={'tel'} className={'input'} name={'phone'} /> : <Input required
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
                        setModal(false)
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
      </> : ""}
    </div>
  );
};
export default ChangeLogin;
