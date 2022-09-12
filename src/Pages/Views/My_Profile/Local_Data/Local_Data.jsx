import React from "react";
import s from "../My_Profile.module.css";
import pen from "../../../../img/pen.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getConfigHeaderAction } from "../../../../base/Reducers/configReducer";
import Loader from "../../../../Components/Loading/Loader";
import { axiosProfile } from "../../../../base/asyncActions/Profile";
const Local_Data = () => {
  let dispatch = useDispatch();
  const logout = () => {
    localStorage.clear();
  };
  let [dateParts, setdateParts] = useState(1)
  const profile = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(axiosProfile());
    dispatch(getConfigHeaderAction("Профиль"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    let datePartsNew = profile.birthday.split("-");
    setdateParts(`${datePartsNew[2]}-${datePartsNew[1]}-${datePartsNew[0]}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);
  let phone = "+ ";
  for (let i = 0; profile.phone.length > i; i++) {
    if (i === 1) {
      phone += " (";
      phone += profile.phone[i];
    } else if (i === 4) {
      phone += ") ";
      phone += profile.phone[i];
    } else if (i === 7) {
      phone += "-";
      phone += profile.phone[i];
    } else if (i === 9) {
      phone += "-";
      phone += profile.phone[i];
    } else phone += profile.phone[i];
  }
  return (
    <div className={s.My_content}>
      <div className={s.Left_Position}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} blue_config` : s.navLink + " gray_config"
              }
              to="../local-data"
            >
              <p>Личные данные</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} blue_config` : s.navLink + " gray_config"
              }
              to="../message"
            >
              <p>Уведомления</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} blue_config` : s.navLink + " gray_config"
              }
              to="../balance"
            >
              <p>Баланс</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} blue_config` : s.navLink + " gray_config"
              }
              to="../med-cart"
            >
              <p>Медицинская карта</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} blue_config` : s.navLink + " gray_config"
              }
              to="../result"
            >
              <p>Результаты исследований</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink}` : `${s.navLink + " " + s.close}`
              }
              onClick={() => logout()}
              to={"../../"}
            >
              Выйти
            </NavLink>
          </li>
        </ul>
        <div className={s.links + " blue_config"}>
          <Link className=" blue_config" to="../../private/services">
            <p>Договор об указании услуг</p>
          </Link>
          <Link className=" blue_config" to="../../private/privacy">
            <p>Политика конфиденциальности</p>
          </Link>
        </div>
      </div>
      <div className={s.My_content_title + " title_config"}>
        <h1>Личные данные</h1>
      </div>
      {profile.lastname ? (
        <div className={s.My_content_container + " black_config"}>
          <div className={s.My_content_top} >
            <div className={s.My_content_top_image}>
              <img alt="" src={profile.photo} />
            </div>
            <div className={s.My_content_top_content}>
              <div className={s.My_content_top_title}>
                <h1>
                  {profile.firstname +
                    " " +
                    profile.lastname +
                    " " +
                    profile.secondname}
                </h1>
                <Link to={"../replace-data"}>
                  <img alt="" src={pen} />
                </Link>
              </div>
              <p>{phone}</p>
            </div>
          </div>
          <div className={s.My_content_bottom}>
            <span>
              <p>Дата рождения: {dateParts}</p>
            </span>
            <span>
              <p>Электронная почта: {profile.email}</p>
            </span>
            <span>
              <p>Пол: {profile.gender === 1 ? "Женский" : "Мужской"}</p>
            </span>
            <span>
              <p>Баланс: {profile.balance}₽</p>
            </span>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Local_Data;
