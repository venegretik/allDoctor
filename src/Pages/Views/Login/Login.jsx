import React, {useEffect} from 'react';
import style from './Login.module.css'
import logo from '../../../img/logo.png'
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {LoginForm} from "../../../Components/Forms/LoginForm";


const Login = (props) => {

  const error = useSelector(state => state.login.error)
  const newUser = localStorage.getItem('isNewUser')
  const log_in = localStorage.getItem('login')
  const checkUser = () => {
    if (!log_in) {
      return <Navigate to={'/login'}/>
    } else if(log_in && newUser){
      return <Navigate to={'/register'}/>
    } else if(log_in && !newUser){
      return <Navigate to={'/main'}/>
    } else {
      return false
    }
  }
  useEffect(() => {
    checkUser()
  }, [])
  return (
    <div className={'Container'}>
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
          <LoginForm/>
        </div>
      </div>
    </div>
  );
};

export {Login};