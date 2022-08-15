import React from "react";
import { NavLink, Link } from "react-router-dom";
import s from "./Header.module.css";
import arrow_back from "../../../img/arrow-back.png";
import { UserMenu } from "./UserMenu/UserMenu";
import { useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router";
const Header = () => {
  let Text = useSelector((state) => state.config.header_text);
  const config = useSelector((state) => state.config.config);
  return config && !config.token ? (
    <Navigate to="login" />
  ) : (
    <div className={s.Header_container + " Container"}>
      <header className={s.Header_full}>
        <div className={s.Header_logo}>
          <Link to={"main"}>
            <img src={config.config.logo} alt="" />
          </Link>
        </div>
        <div className={s.Header_nav}>
          <nav>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
              to="main"
            >
              Главная
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
              to="consultation"
            >
              Мои записи
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
              to="my-doctor"
            >
              Мои врачи
            </NavLink>
          </nav>
        </div>
        <UserMenu type="login" />
      </header>
      <div className={s.Menu_mobile}>
        <Link to={"main"} className={s.Menu_mobile_back}>
          <img src={arrow_back} alt="" />
        </Link>
        <div className={s.Menu_mobile_title}>
          <h1>{Text}</h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
