import React from 'react';
import style from './Login.module.css'
import logo from '../../../img/logo.png'
import {Input, InputPhone} from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {axiosLogin, axiosSendCode} from "../../../base/asyncActions/Login";
import {Navigate} from "react-router-dom";


const Login = (props) => {
  const dispatch = useDispatch()
  const login = useSelector(state => state.login.send)
  const error = useSelector(state => state.login.error)
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

  const newUser = localStorage.getItem('isNewUser')
  const log = localStorage.getItem('login')
  return (

    <div className={'Container'}>
      {
        !log ? <Navigate to={'/login'}/> : (newUser ? <Navigate to={'/register'}/> : <Navigate to={'/main'}/>)
      }
      <div className={style.login_container}>
        <div>
          <img className={style.login_image} src={logo} alt=""/>
          <h1 className={style.login_title}>Советуйтесь с врачом, а не с форумом</h1>
          <ul className={style.login_list}>
            <li className={style.login_item}>консультации квалифицированных врачей — для себя, детей и родителей</li>
            <li className={style.login_item}>врачи на связи круглосуточно</li>
            <li className={style.login_item}>безопасно, конфиденциально и анонимно</li>
            <li className={style.login_item}>в чате и на видео
              отчёт после каждой консультации
            </li>
          </ul>
        </div>
        <div style={{maxWidth: '400px', width: '100%'}}>
          <p className={style.login_form_text}>ВОЙТИ</p>
          {
            error ? <p style={{color: 'red', marginBottom: '10px'}}>{error}</p> : ''
          }
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
        </div>
      </div>
    </div>
  );
};

export {Login};