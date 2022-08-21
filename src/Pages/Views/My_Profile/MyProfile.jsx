import React from "react";
import s from "./My_Profile.module.css";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
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
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
                to="local-data">
                <p>Личные данные</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
                to="message">
                <p>Уведомления</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
                to="balance">
                <p>Баланс</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
                to="utility">
                <p>Проверка оборудования</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
                to="med-cart">
                <p>Медицинская карта</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
                to="result">
                <p>Результаты использований</p>
              </NavLink>
            </li>
          </ul>
          <div className={s.links}>
            <Link to="../private/services">
              <p>Договор об указании услуг</p>
            </Link>
            <Link to="../private/privacy">
              <p>Политика конфиденциальности</p>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div >
  );
};
export { MyProfile };
