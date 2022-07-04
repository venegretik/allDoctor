import React from "react";
import s from './Footer.module.css';
import logo from '../img/logo-white.svg';
import Doctor from '../img/Doctor_icon.png';
import Note from '../img/note_icon.png';
import Chat from '../img/Chat_icon.png';
import Home from '../img/Home_icon.png';
import Prof from '../img/Profile_icon.png'
const Footer = () => {
    return (
        <section>
            <footer className={s.footer_full}>
                <div className={s.footer_img}>
                    <img src={logo} alt="" />
                </div>
                <div className={s.footer_text}>
                    <p>© ВсеДоктора 2022</p>
                </div>
            </footer>
            <div className={s.footer_Mobile}>
                <ul>
                    <li>
                        <img src={Home} alt="" />
                        <p>Главная</p>
                    </li>
                    <li>
                        <img src={Note} alt="" />
                        <p>Мои записи</p>
                    </li>
                    <li>
                        <img src={Chat} alt="" />
                        <p>Чат</p>
                    </li>
                    <li>
                        <img src={Doctor} alt="" />
                        <p>Мои врачи</p>
                    </li>
                    <li>
                        <img src={Prof} alt="" />
                        <p>Мой кабинет</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Footer;