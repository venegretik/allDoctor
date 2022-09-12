import React from "react";
import { NavLink, Link } from "react-router-dom";
import s from "./Header.module.css";
import arrow_back from "../../../img/arrow-back.png";
import { useState, useEffect } from "react";
import { UserMenu } from "./UserMenu/UserMenu";
import { useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router";
const Header = () => {
  let Text = useSelector((state) => state.config.header_text);
  if (Text.length > 15) {
    Text = Text.substring(0, 14) + "...";
  }
  var url = document.location.pathname;
  useEffect(() => {
    //код закрывающий все треки
    if (url !== "/profile/utility") {
      window.scrollTo(0, 0);
      window.localStreamVideo?.getTracks().forEach((track) => {
        track.stop();
      });
      window.localStreamAudio?.getTracks().forEach((track) => {
        track.stop();
      });
      window.localStreamAudioDisabled?.shutdown();
    }
  }, [url]);
  const config = useSelector((state) => state.config.config);
  const [isHover, setIsHover] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleMouseEnter1 = () => {
    setIsHover1(true);
  };
  const handleMouseLeave1 = () => {
    setIsHover1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHover2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHover2(false);
  };
  const styleBlue = {
    borderBottom: !isHover ? `4px solid ${config?.config.colors.color3}` : `4px solid ${config?.config.colors.color10}`,
    color: config?.config.colors.color2
  };
  const styleBlue1 = {
    borderBottom: !isHover1 ? `4px solid ${config?.config.colors.color3}` : `4px solid ${config?.config.colors.color10}`,
    color: config?.config.colors.color2
  };
  const styleBlue2 = {
    borderBottom: !isHover2 ? `4px solid ${config?.config.colors.color3}` : `4px solid ${config?.config.colors.color10}`,
    color: config?.config.colors.color2
  };
  return config && !config.token && url !== "/private/user" && url !== "/private/services" && url !== "/private/privacy" && url !== "/private/personal" ? (
    <Navigate to="login" />
  ) : (
    config?.token ? <div className={s.Header_container + " Container"}>
      <header className={s.Header_full}>
        <div className={s.Header_logo}>
          <Link to={"main"}>
            <img alt="" src={config.config.logo} />
          </Link>
        </div>
        <div className={s.Header_nav}>
          <nav>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
              style={({ isActive }) => isActive ? {
                borderBottom: `4px solid ${config?.config.colors.color10}`,
                color: config?.config.colors.color2
              } : styleBlue}
              to="main"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Главная
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
              style={({ isActive }) => isActive ? {
                borderBottom: `4px solid ${config?.config.colors.color10}`,
                color: config?.config.colors.color2
              } : styleBlue1}
              to="consultation"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              Мои записи
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }
              style={({ isActive }) => isActive ? {
                borderBottom: `4px solid ${config?.config.colors.color10}`,
                color: config?.config.colors.color2
              } : styleBlue2}
              to="my-doctor"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              Мои врачи
            </NavLink>
          </nav>
        </div>
        <UserMenu type="login" />
      </header>
      <div className={s.Menu_mobile}>
        {Text !== "Главная" ? <img alt="" src={arrow_back} onClick={e => window.history.back()} /> : ""}
        <div className={s.Menu_mobile_title + " title_config"}>
          <h1>{Text}</h1>
        </div>
      </div>
    </div> : ""
  );
};
export default Header;
