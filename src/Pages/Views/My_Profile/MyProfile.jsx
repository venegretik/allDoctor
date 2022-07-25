import React from "react";
import s from "./My_Profile.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
const MyProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getConfigHeaderAction("Профиль"))
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
              to="local-data">
              <p>Анкета</p>
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
      </div>
      <Outlet />
    </div>
    </div >
  );
};
export { MyProfile };
