import React from "react";
import s from './Calendar.module.css';
const Calendar = () => {
    return (
        <div className={s.Calendar_full}>
            <div>
                <p className={s.Font_size14 + " " + s.gray}>Выберите дату и время для записи:</p>
            </div>
            <div className={s.Calendar_main}>
                <ul className={s.Font_size14}>
                    <li>
                        <p>Чт</p>
                        <b className={s.Calendar_active}>24</b>
                    </li>
                    <li>
                        <p>Чт</p>
                        <b>24</b>
                    </li>
                    <li>
                        <p>Чт</p>
                        <b>24</b>
                    </li>
                    <li>
                        <p>Чт</p>
                        <b>24</b>
                    </li>
                    <li>
                        <p>Чт</p>
                        <b>24</b>
                    </li>
                    <li>
                        <p>Чт</p>
                        <b>24</b>
                    </li>
                    <li>
                        <p>Чт</p>
                        <b>24</b>
                    </li>
                </ul>
            </div>
            <div>
                <p className={s.Font_size14 + " " + s.gray}>Онлайн-расписание на 25 марта:</p>
            </div>
            <div className={s.Calendar_rasp_top}>
                <div className={s.Calendar_rasp}>
                    <p className={s.Font_size16}>09:30</p>
                </div>
                <div className={s.Calendar_rasp}>
                    <p className={s.Font_size16}>09:30</p>
                </div>
                <div className={s.Calendar_rasp}>
                    <p className={s.Font_size16}>09:30</p>
                </div>
                <div className={s.Calendar_rasp}>
                    <p className={s.Font_size16}>09:30</p>
                </div>
            </div>
            <div className={s.Calendar_rasp_top}>
                <div className={s.Calendar_rasp}>
                    <p className={s.Font_size16}>09:30</p>
                </div>
                <div className={s.Calendar_rasp}>
                    <p className={s.Font_size16}>09:30</p>
                </div>
                <div className={s.Calendar_rasp}>
                    <p className={s.Font_size16}>09:30</p>
                </div>
                <div className={s.Calendar_rasp}>
                    <p className={s.Font_size16}    >09:30</p>
                </div>
            </div>
            <div className={s.Calendar_button}>
                <button>записаться</button>
            </div>
        </div>
    )
}
export default Calendar;