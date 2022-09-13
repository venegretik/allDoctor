import React from "react";
import s from "./Footer.module.css";
import { ReactComponent as Doctor } from "../../../img/Doctor_icon.svg";
import { ReactComponent as Note } from "../../../img/note_icon.svg";
import { ReactComponent as Home } from "../../../img/Home_icon.svg";
import { ReactComponent as Prof } from "../../../img/Profile_icon.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ChatModal from "../../../Components/Modal/Chat_Modal/ChatModal";
const Footer = () => {
  let config = useSelector(state => state.config.config);
  const info = useSelector((state) => state.main.shortName);
  let Text = useSelector((state) => state.config.header_text);
  const availableScreenWidth = window.screen.availWidth;
  return availableScreenWidth <= 480 && Text === "Видео" ? ("") : info?.data.short_name ? (
    <section className={s.footer_container + " BackgroundBlue"}>
      <footer className={s.footer_full}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
          className="Container"
        >
          <div className={s.footer_img}>
            <img alt="" src={config.config.logo_footer} />
          </div>
          <div className={s.footer_text + " white_config"}>
            <p>© ВсеДоктора 2022</p>
          </div>
        </div>
      </footer>
      <div className={s.footer_Mobile}>
        <ul>
          <NavLink to={"main"} className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
          }>
            <li>
              <Home stroke={Text === "Главная" ? config.config.colors.color10 : config.config.colors.color4} />
              <p className={Text === "Главная" ? "blue_config" : "gray_config"}>Главная</p>
            </li>
          </NavLink>
          <NavLink to={"consultation"} className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
          }>
            <li>
              <Note fill={Text === "Мои записи" ? config.config.colors.color10 : config.config.colors.color4} />
              <p className={Text === "Мои записи" ? "blue_config" : "gray_config"}>Мои записи</p>
            </li>
          </NavLink>
          <li className={s.navLink}>
            <ChatModal />
          </li>
          <NavLink to={"my-doctor"} className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
          }>
            <li>
              <Doctor stroke={Text === "Мои врачи" ? config.config.colors.color10 : config.config.colors.color4}/>
              <p className={Text === "Мои врачи" ? "blue_config" : "gray_config"}>Мои врачи</p>
            </li>
          </NavLink>
          <NavLink to={"profile/local-data"} className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
          }>
            <li>
              <Prof fill={Text === "Профиль" ? config.config.colors.color10 : config.config.colors.color4} />
              <p className={Text === "Профиль" ? "blue_config" : "gray_config"}>Мой кабинет</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </section>
  ) : ("");
};
export default Footer;
