import React from 'react';
import style from './Login.module.css'
import logo from '../../../img/logo.png'
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {LoginForm} from "../../../Components/Forms/LoginForm";


const Login = (props) => {

  const error = useSelector(state => state.login.error)
  const log_in = localStorage.getItem('login')
  const config = useSelector((state) => state.config.config);
  return (
    <div className={'Container'}>
      {log_in ? <Navigate to={'/register'}/> : false }
      <div className={style.login_container}>
        <div className={style.login_text} style={{color: config?.config.colors.color2}}>
          <img alt="" className={style.login_image} src={logo} />
          <h1 className={style.login_title} style={{color: config?.config.colors.color5}}>Советуйтесь с врачом, а не с форумом</h1>
          <ul className={style.login_list}>
            <li className={style.login_item}>консультации квалифицированных врачей — для себя, детей и родителей</li>
            <li className={style.login_item}>врачи на связи круглосуточно</li>
            <li className={style.login_item}>безопасно, конфиденциально и анонимно</li>
            <li className={style.login_item}>в чате и на видео
              отчёт после каждой консультации
            </li>
          </ul>
        </div>
        <div style={{maxWidth: '400px', width: '100%', marginBottom:"30px"}}>
          <p className={style.login_form_text} style={{color: config?.config.colors.color4,borderBottom: `4px solid ${config?.config.colors.color10}`}}>ВОЙТИ</p>
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