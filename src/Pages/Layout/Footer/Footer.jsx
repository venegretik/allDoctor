import React from "react";
import s from "./Footer.module.css";
import logo from "../../../img/logo-white.svg";
import Doctor from "../../../img/Doctor_icon.png";
import Note from "../../../img/note_icon.png";
import Chat from "../../../img/Chat_icon.png";
import Home from "../../../img/Home_icon.png";
import Prof from "../../../img/Profile_icon.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section>
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
            <img src={logo} alt="" />
          </div>
          <div className={s.footer_text}>
            <p>© ВсеДоктора 2022</p>
          </div>
        </div>
      </footer>
      <div className={s.footer_Mobile}>
        <ul>
          <Link to={"main"}>
            <li>
              <img src={Home} alt="" />
              <p>Главная</p>
            </li>
          </Link>
          <Link to={"consultation"}>
            <li>
              <img src={Note} alt="" />
              <p>Мои записи</p>
            </li>
          </Link>
          <Link to={"main"}>
            <li>
              <img src={Chat} alt="" />
              <p>Чат</p>
            </li>
          </Link>
          <Link to={"my-doctor"}>
            <li>
              <img src={Doctor} alt="" />
              <p>Мои врачи</p>
            </li>
          </Link>
          <Link to={"profile/local-data"}>
            <li>
              <img src={Prof} alt="" />
              <p>Мой кабинет</p>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};
export default Footer;
