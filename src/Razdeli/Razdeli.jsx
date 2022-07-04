import React from "react";
import s from './Razdeli.module.css';
import { NavLink } from 'react-router-dom';
const Razdeli = () => {
    return (
        <section className={s.medicine + " " + s.container}>
            <h2 className={s.medicine_title + " " + s.Font_size40}>Разделы медицины</h2>
            <div>
                <input type="text" placeholder="Поиск по разделам" className={s.Register_form} />
            </div>
            <div className={s.medicine_cards}>
                <NavLink to="/Doctor_list">
                    <div className={s.card_item}>
                        <img src="https://api.telemed.dev-h.ru/images/icons/departments/dermatolog.svg" alt="" />
                        <div className={s.card_text_wrapper}>
                            <div className={s.card_title}>Дерматолог</div>
                            <div className={s.card_subtitle}>Специалист по кожным заболеваниям</div>
                        </div>
                    </div>
                </ NavLink>
                <NavLink to="/Doctor_list">
                    <div className={s.card_item}>
                        <img src="https://api.telemed.dev-h.ru/images/icons/departments/dermatolog.svg" alt="" />
                        <div className={s.card_text_wrapper}>
                            <div className={s.card_title}>Дерматолог</div>
                            <div className={s.card_subtitle}>Специалист по кожным заболеваниям</div>
                        </div>
                    </div>
                </ NavLink>
                <NavLink to="/Doctor_list">
                    <div className={s.card_item}>
                        <img src="https://api.telemed.dev-h.ru/images/icons/departments/dermatolog.svg" alt="" />
                        <div className={s.card_text_wrapper}>
                            <div className={s.card_title}>Дерматолог</div>
                            <div className={s.card_subtitle}>Специалист по кожным заболеваниям</div>
                        </div>
                    </div>
                </ NavLink>
            </div>
            
        </section>
    )
}
export default Razdeli;
