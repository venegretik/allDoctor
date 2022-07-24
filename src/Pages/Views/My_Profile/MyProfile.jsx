import React from "react";
import s from "./My_Profile.module.css";
import Utility from "./Utility/Utility";
import ReplaceData from "./Replace_Data/ReplaceData";
import Med_Cart from "./Med_Cart/Med_Cart";
import Local_Data from "./Local_Data/Local_Data";
import Result from "./Result/Result";
import { Outlet } from "react-router-dom";
import Balance from "./Balance/Balance";
import { Layout } from "../../Layout/Layout";
import { NavLink } from "react-router-dom";
import Messages from "./Messages/Messages";
const MyProfile = () => {
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
