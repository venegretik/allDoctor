import React, {useEffect, useState} from 'react';
import s from "./UserMenu.module.css";
import message_img from "../../../../img/coolicon.png";
import avatar from "../../../../img/avatar.png";
import arrow from "../../../../img/arrow.png";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getShortInfo} from "../../../../base/asyncActions/getMainPageInfo";

const UserMenu = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getShortInfo())
  }, [])
  const [show, setShow] = useState(false)
  return (
    <div className={s.jare}>
      <div className={s.Header_profile}>
        <div className={s.Profile_logo}>
          <img src={message_img} alt=""/>
        </div>
        <div onClick={() => setShow(true)} className={s.Profile_text}>
          <div className={s.Profile_avatar}>
            <img src={avatar} alt=""/>
          </div>
          <div className={s.Profile_menu}>
            <p>Смирнов В. В.</p>
            <img src={arrow} alt=""/>
          </div>
        </div>
      </div>
      {
        show
        &&
        <div onClick={() => setShow(false)} className={s.MenuBack}>
          <div className={s.MenuWrap}>
            <ul className={s.MenuList}>
              <li><Link className={`${s.MenuLink} ${s.LinkBorder}`} to={'consultation'}>Личные данные</Link></li>
              <li><Link className={s.MenuLink} to={'/'}>Баланс</Link></li>
              <li><Link className={s.MenuLink} to={'/'}>Проверка оборудования</Link></li>
              <li><Link className={s.MenuLink} to={'/'}>Анкета</Link></li>
              <li><Link className={s.MenuLink} to={'/'}>Медицинская карта</Link></li>
              <li><Link className={s.MenuLink} to={'/'}>Результаты исследований</Link></li>
              <li><Link className={s.MenuLink} to={'/'}>Выйти</Link></li>
            </ul>
          </div>
        </div>
      }
    </div>
  );
};

export {UserMenu};