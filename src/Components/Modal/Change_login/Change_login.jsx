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
    [code, setcode] = useState(""),
    [email, setemail] = useState(""),
    [isShown, setIsShown] = useState(1),
    [timerNum, settimerNum] = useState(1),
    [errorMessage, seterrorMessage] = useState({
      status: false,
      error: {
        message: "",
      },
    }),
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
  const textDecor = (e)=>{
    setemail(e.target.value)
  }
  const sendForm = async (e) => {
    e.preventDefault();
    const data = await new FormData(e.target);
    let obj = {};
    [...data].forEach((e) => {
      obj[e[0]] = e[1];
    });
    if (isShown === 3) {
      const response = props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit(code, obj.phone.replace(/[\D]+/g, ""))) : await dispatch(axiosProfileEmailEdit(code, obj.email));
      if (response.status) {
        props.setWindow(false);
        dispatch(axiosProfile());
      }
      else {
        seterrorMessage(errorMessage => ({
          error: {
            message: response.error?.message
          }
        }));
      }
    }
    if (isShown === 2) {
      const response = props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit(Number(obj.code), null)) : await dispatch(axiosProfileEmailEdit(Number(obj.code), null));
      if (response.status) {
        setIsShown(++isShown);
        setcode(response.token)
      }
      else
        seterrorMessage(errorMessage => ({
          error: {
            message: response.error?.message
          }
        }));
    }
    if (isShown === 1) {
      const responce = props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit(null, null)) : await dispatch(axiosProfileEmailEdit(null, null));
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
            <h1 className={s.Font_size24}>{props.type_el === "phone" ? "???????????????? ??????????????" : "???????????????? ??????????"}</h1>
          </div>
          <div className={s.ChangeLoginMain}>

            {isShown === 1 ? (
              <form onSubmit={(e) => { sendForm(e) }}>
                <div className={s.ChangeLoginMain_step1}>
                  <span>
                    <p className={s.Font_size14 + " gray_config"}>
                      {props.type_el === "phone" ? "???? ???????????????? ?????? ?????????????????????????? ???? ?????? ?????????????? " : "???? ???????????????? ?????? ?????????????????????????? ???? ???????? ?????????????? ?????????????????????? ?????????? "}
                    </p>
                    <p className={s.Font_size14 + " black_config"}>
                      {props.type_el === "phone" ? phone : profile.email}
                    </p>
                  </span>

                  <div className={s.ChangeLoginButton}>
                    <div className={s.ChangeMargin}>
                      <Button
                        text={"???????????????? ??????"}
                        class="blue btn"
                        type="submit"
                      />
                    </div>
                    <div onClick={e => {
                      props.setWindow(false)
                    }}>
                      <Button text="????????????" class="btn white" />
                    </div>
                  </div>
                </div>
              </form>
            ) : isShown === 2 ? (
              <form onSubmit={(e) => { sendForm(e) }}>
                <div className={s.ChangeLoginMain_step2}>
                  <Input pattern={'[0-9]{4}'} required placeholder={props.type_el === "phone" ? '?????? ???? SMS' : '?????? ???? ?????????????????????? ??????????'} type={'text'} className={'input'}
                    maxLength={4} name="code" />
                    <FormErrors error={errorMessage?.error.message} />
                  <p className={s.Font_size14 + " blue_config"} onClick={async e => {
                    let responce = props.type_el === "phone" ? await dispatch(axiosProfilePhoneEdit(null, null)) : await dispatch(axiosProfileEmailEdit(0, null))
                    settimerNum(responce.resend_timeout);
                  }}>?????????????????? ?????? ????????????????
                    <Timer time={timerNum} /></p>
                  <div className={s.ChangeLoginButton} >
                    <div className={s.ChangeMargin}>
                      <Button
                        text={"??????????????????????"}
                        class="blue btn"
                      />
                    </div>
                    <div onClick={e => {
                      props.setWindow(false)
                    }}>
                      <Button text="????????????" class="btn white" />
                    </div>
                  </div>
                </div>
              </form>
            ) : isShown === 3 ? (
              <form onSubmit={(e) => { sendForm(e) }}>
                <div className={s.ChangeLoginMain_step3}>
                  {props.type_el === "phone" ? <InpMask pattern={'[+][7]\\s[(][0-9]{3}[)]\\s[0-9]{3}-[0-9]{2}-[0-9]{2}'} required
                    placeholder={props.type_el === "phone" ? '?????????? ?????????? ????????????????' : '?????????? ?????????????????????? ??????????'} type={'tel'} className={'input ' + s.Telephone} name={'phone'} /> : <Input required
                      placeholder={'?????????? ?????????????????????? ??????????'}
                      type={'email'}
                      value={email}
                      onChange={textDecor}
                      name={'email'} />}
                  <FormErrors error={errorMessage?.error.message} />
                  <div className={s.ChangeLoginButton}>
                    <div className={s.ChangeMargin}>
                      <Button
                        text={"????????????????"}
                        class="blue btn"
                        type="submit"
                      />
                    </div>
                    <div onClick={e => {
                      props.setWindow(false)
                    }}>
                      <Button text="????????????" class="btn white" />
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
