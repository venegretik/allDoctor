import React from "react";
import s from '../My_Profile.module.css';
import pen from '../../../../img/pen.png'
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../../../../Components/Loading/Loader";
import { axiosProfile } from "../../../../base/asyncActions/Profile";
const Local_Data = () => {
  let dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const config = useSelector(state => state.config.config);
  useEffect(() => {
    dispatch(axiosProfile());
  }, []);
  let phone = "";
  for (let i = 0; profile.phone.length > i; i++) {
    if (i == 1) {
      phone += " (";
      phone += profile.phone[i];
    }
    else
      if (i == 4) {
        phone += ") ";
        phone += profile.phone[i];
      }
      else
      if (i == 7) {
        phone += "-";
        phone += profile.phone[i];
      }
      else
      if (i == 9) {
        phone += "-";
        phone += profile.phone[i];
      }
      else
        phone += profile.phone[i];
  }
  return (
    <div className={s.My_content}>
      <div className={s.Left_Position}>
        <ul>
          <li>
            <NavLink className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
            }
              to="../local-data">
              <p>Личные данные</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
            }
              to="../message">
              <p>Уведомления</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
            }
              to="../balance">
              <p>Баланс</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
            }
              to="../med-cart">
              <p>Медицинская карта</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
            }
              to="../result">
              <p>Результаты использований</p>
            </NavLink>
          </li>
        </ul>
        <div className={s.links}>
          <Link to="../../private/services">
            <p>Договор об указании услуг</p>
          </Link>
          <Link to="../../private/privacy">
            <p>Политика конфиденциальности</p>
          </Link>
        </div>
      </div>
      <div className={s.My_content_title} style={{color: config?.config.colors.color2}}>
        <h1>Личные данные</h1>
      </div>
      {profile.lastname ? <div className={s.My_content_container} style={{color: config?.config.colors.color2}}>
        <div className={s.My_content_top} >
          <div className={s.My_content_top_image}>
            <img src={profile.photo} alt="" />
          </div>
          <div className={s.My_content_top_content}>
            <div className={s.My_content_top_title}>
              <h1>{profile.firstname + " " + profile.lastname + " " + profile.secondname}</h1>
              <Link to={"../replace-data"}>
                <img src={pen} alt="" />
              </Link>
            </div>
            <p>{phone}</p>
          </div>
        </div>
        <div className={s.My_content_bottom}>
          <span>
            <p>Дата рождения:</p>
            <p>{profile.birthday}</p>
          </span>
          <span>
            <p>Электронная почта:</p>
            <p>{profile.email}</p>
          </span>
          <span>
            <p>Пол:</p>
            <p>{profile.gender == 1 ? "Женский" : "Мужской"}</p>
          </span>
          <span>
            <p>Баланс:</p>
            <p>2400₽</p>
          </span>
        </div>
      </div> : <Loader />}
    </div>
  )
}
export default Local_Data;