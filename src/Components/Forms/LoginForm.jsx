import React from 'react';
import style from "../../Pages/Views/Login/Login.module.css";
import {Input, InputPhone} from "../Input/Input";
import Button from "../Button/Button";
import {axiosLogin, axiosSendCode} from "../../base/asyncActions/Login";
import {useDispatch, useSelector} from "react-redux";

const LoginForm = () => {

  const dispatch = useDispatch()
  const login = useSelector(state => state.login.send)
  const phone = useSelector(state => state.login.phone)
  const getCode = (e) => {
    e.preventDefault()
    let number = e.target[0].value
    dispatch(axiosLogin(number.replace(/[\D]+/g, '')))
  }
  const sendCode = async (e) => {
    e.preventDefault()
    let number = e.target[0].value,
      code = e.target[2].value;
    dispatch(axiosSendCode(number.replace(/[\D]+/g, ''), code))
  }
  const resendCode = () => {
    dispatch(axiosLogin(phone))
  }

  return (
    <>
      <form className={style.login_form} action="" onSubmit={e => login ? sendCode(e) : getCode(e)}>
        <InputPhone pattern={'[+][7]\\s[(][0-9]{3}[)]\\s[0-9]{3}-[0-9]{2}-[0-9]{2}'} required
                    placeholder={'Номер телефона'} type={'tel'} className={'input'}/>
        {
          login && <button type={'button'} onClick={resendCode} className={style.login_resend_code}>Отправить код
            повторно</button>
        }
        {
          login && <Input pattern={'[0-9]{4}'} required placeholder={'Код из SMS'} type={'text'} className={'input'}
                          maxLength={4}/>
        }
        <Button type={'submit'} text={'получить код'} class={'btn blue'}/>
      </form>
    </>
  );
};

export {LoginForm};