import React from "react";
import s from "./Footer.module.css";
import logo from "../../../img/logo-white.svg";
import Doctor from "../../../img/Doctor_icon.png";
import Note from "../../../img/note_icon.png";
import Home from "../../../img/Home_icon.png";
import Prof from "../../../img/Profile_icon.png";
import DoctorAct from "../../../img/Doctor_active.png";
import NoteAct from "../../../img/note_active.png";
import HomeAct from "../../../img/Home_active.png";
import ProfAct from "../../../img/profile_active.png";
import {NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ChatModal from "../../../Components/Modal/Chat_Modal/ChatModal";
const Footer = () => {
  let Text = useSelector(state => state.config.header_text);
  let config = useSelector(state => state.config.config);
  return (
    <section className={s.footer_container}>
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
            <img src={config.config.logo_footer} alt="" />
          </div>
          <div className={s.footer_text}>
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
              {Text === "Главная" ? <img src={Home} alt="" /> :<img src={HomeAct} alt="" />}
              <p>Главная</p>
            </li>
          </NavLink>
          <NavLink to={"consultation"} className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }>
            <li>
            {Text === "Мои записи" ? <img src={NoteAct} alt="" /> : <img src={Note} alt="" />}
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
            {Text === "Мои врачи" ? <img src={DoctorAct} alt="" /> : <img src={Doctor} alt="" />}
              <p>Мои врачи</p>
            </li>
          </NavLink>
          <NavLink to={"profile/local-data"} className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.headerActiveLink}` : s.navLink
              }>
            <li>
            {Text === "Профиль" ? <img src={ProfAct} alt="" /> : <img src={Prof} alt="" />}
              <p>Мой кабинет</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </section>
  );
};
export default Footer;
