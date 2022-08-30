import React from "react";
import s from "./My_Profile.module.css";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
import Chat from "../../../Components/Chat/Chat";
const MyProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={s.Container + " Container"}>
      <div className={s.My_Profile}>
        <div className={s.Left_Position}>
          <ul>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink} blue_config` : s.navLink + " gray_config"
              }
                to="local-data">
                <p>Личные данные</p>
              </NavLink>
            </li>
            <li >
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink} blue_config` : s.navLink + " gray_config"
              }
                to="message">
                <p>Уведомления</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink} blue_config` : s.navLink + " gray_config"
              }
                to="balance">
                <p>Баланс</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink} blue_config` : s.navLink + " gray_config"
              }
                to="utility">
                <p>Проверка оборудования</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink} blue_config` : s.navLink  + " gray_config"
              }
                to="med-cart">
                <p>Медицинская карта</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink} blue_config` : s.navLink + " gray_config"
              }
                to="result">
                <p>Результаты использований</p>
              </NavLink>
            </li>
          </ul>
          <div className={s.links + " blue_config"}>
            <Link to="../private/services" className="blue_config">
              <p>Договор об указании услуг</p>
            </Link>
            <Link to="../private/privacy" className="blue_config">
              <p>Политика конфиденциальности</p>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
      <Chat/>
    </div >
  );
};
export { MyProfile };
