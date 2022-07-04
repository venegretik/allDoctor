import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import message_img from '../img/coolicon.png';
import arrow from '../img/arrow.png';
import avatar from '../img/avatar.png';
import s from './Header.module.css';
import arrow_back from '../img/arrow-back.png';
const Header = () => {
    return (
        <div className={s.Header_container}>
            <header className={s.Header_full}>
                <div className={s.Header_logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={s.Header_nav}>
                    <nav>
                        <ul>
                            <li>
                            <NavLink to="/Main">Главная</ NavLink>
                            </li>
                            <li>
                            <NavLink to="/Consultation">Мои записи</ NavLink>
                            </li>
                            <li>
                            <NavLink to="/My_Doctor">Мои врачи</ NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={s.jare}>
                    <div className={s.Header_profile}>
                        <div className="Profile_logo">
                            <img src={message_img} alt="" />
                        </div>
                        <div className={s.Profile_text}>
                            <div className="Profile_avatar">
                                <img src={avatar} alt="" />
                            </div>
                            <div className={s.Profile_menu}>
                                <p>Смирнов В. В.</p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </header>
            <div className={s.Menu_mobile}>
                    <div className={s.Menu_mobile_back}>
                        <img src={arrow_back} alt="" />
                    </div>
                    <div className={s.Menu_mobile_title}>
                        <h1>Главная</h1>
                    </div>
                </div>
        </div>
    );
}
export default Header;