import React from "react";
import s from "./Footer.module.css";
import Doctor from "../../../img/Doctor_icon.png";
import Note from "../../../img/note_icon.png";
import Home from "../../../img/Home_icon.png";
import Prof from "../../../img/Profile_icon.png";
import DoctorAct from "../../../img/Doctor_active.png";
import NoteAct from "../../../img/note_active.png";
import HomeAct from "../../../img/Home_active.png";
import ProfAct from "../../../img/profile_active.png";
import {NavLink} from "react-router-dom";
import { useSelector} from "react-redux";
import ChatModal from "../../../Components/Modal/Chat_Modal/ChatModal";
const Footer = () => {
  let config = useSelector(state => state.config.config);
  const info = useSelector((state) => state.main.shortName);
  let Text = useSelector((state) => state.config.header_text);
  console.log(Text)
  const availableScreenWidth = window.screen.availWidth;
  return availableScreenWidth <= 480 && Text === "Видео" ? ("") : info?.data.short_name  ?(
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
            <img alt="" src={config.config.logo_footer}  />
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
              {Text === "Главная" ? <img alt="" src={Home}  /> :<img alt="" src={HomeAct}  />}
              <p>Главная</p>
            </li>
          </NavLink>
          <NavLink to={"consultation"} className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }>
            <li>
            {Text === "Мои записи" ? <img alt="" src={NoteAct}  /> : <img alt="" src={Note}  />}
              <p>Мои записи</p>
            </li>
          </NavLink>
          <li className={s.navLink}>
            <ChatModal />
          </li>
          <NavLink to={"my-doctor"} className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }>
            <li>
            {Text === "Мои врачи" ? <img alt="" src={DoctorAct}  /> : <img alt="" src={Doctor}  />}
              <p>Мои врачи</p>
            </li>
          </NavLink>
          <NavLink to={"profile/local-data"} className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }>
            <li>
            {Text === "Профиль" ? <img alt="" src={ProfAct}  /> : <img alt="" src={Prof}  />}
              <p>Мой кабинет</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </section>
  ) : ("");
};
export default Footer;
