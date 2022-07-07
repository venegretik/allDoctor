import React from "react";
import s from './Recording.module.css';
import star from '../img/Rating_Star.png';
import Reviews from './Reviews/Reviews';
const Recording = () => {
    return (
        <div className={s.Recording_full}>
            <div className={s.Doctor_infos}>
                <div className={s.Doctor_avatar}>
                    <div className={s.Doctor_avatar_img}>
                        <img src="https://api.telemed.dev-h.ru/images/doctors/doctor1.png" alt="" />
                    </div>
                    <div className={s.Doctor_avatar_info + " " + s.black}>
                        <ul>
                            <li><img src={star} alt="" /> </li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                            <li><img src={star} alt="" /></li>
                        </ul>
                        <p className={s.Font_size14}>79% пациентов рекомендуют врача</p>
                        <p className={s.Font_size14}>28 отзывов</p>
                    </div>
                </div>
                <div className={s.Doctor_info + " " + s.black}>
                    <p className={s.gray + " " + s.Font_size14}>Терапевт</p>
                    <h2 className={s.Font_size24}>Смирнов Владислав Владимирович</h2>
                    <p className={s.Staj + " " + s.Font_size14}>Стаж 19 лет • Врач высшей категории • Кандидат медицинских наук</p>
                    <div className={s.Doctor_buy}>
                        <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
                        <p className={s.buy}>1500 ₽</p>
                    </div>
                </div>
            </div>
            <div className={s.Doctor_text}>
                <div className={s.Qualification}>
                    <h1 className={s.Font_size24}>Квалификация</h1>
                    <p className={s.Font_size14}>
                        {`
В работе с детьми, взрослыми и семьями использую интегративный подход, подбирая методы в каждой ситуации и запросе индивидуально. Опираюсь на методы гештальт-терапии, работы с внутренним ребенком и родителем, арттерпии, телесно-ориентированной психотерапии, нарративной терапии и письменных

Симптомы и запросы, с которыми можно обращаться ко мне за помощью:

Взрослые:
· тяжелая история детства, детские травмы и их последствия
· трудные отношения с собой и близкими
· мучительные переживания: тревога, страх, одиночество, стыд, обида, зависть, ревность, раздражительность и гнев
· потеря близкого человека
· кризис среднего возраста
· перфекционизм, чувство неудовлетворенности собой и внутренняя самокритика
· длительный стресс, усталость и эмоциональное выгорание
· трудности социальной адаптации и поиск пути самореализации
· непонимание себя и своих желаний, неуверенность
· депрессия, бессонница
· эмоциональные срывы, истерики

Семьи:
· неудовлетворенность отношениями
· конфликты и разногласия по различным вопросам
· кризисные периоды в жизни семьи
· вопросы границ и дистанции в семейных отношениях
· тяжелые семейные сценарии в семье происхождения супругов

Родители:
· вопросы воспитания и отношения с детьми всех возрастов
· подготовка к родительству, беременность и роды, все вопросы перинатальной истории развития
· трудные родительские чувства: раздражение, гнев и вина в отношениях с детьми
· ресурсы и их восполнение в жизни родителей
· вопросы привязанности и эмоциональной связи с детьми
· адаптация к детскому саду и школе 

Дети и подростки:
· помогаю детям и подросткам, испытывающим различные психологические трудности
                        `}
                    </p>
                </div>
                <div>
                    <div>
                        <h1 className={s.Font_size24}>Образование</h1>
                    </div>
                    <div>
                        <p className={s.Font_size14}>{`
2002 г. — Московский государственный университет им. М.В.Ломоносова, факультет психологии, психолог, преподаватель психологии; кафедра возрастной психологии; диплом с отличием.
2004 г. — Московский гештальт институт, теория и практика гештальт-терапии, I и II ступени, детская и семейная психотерапия.
                        `}

                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className={s.Font_size24}>Повышение квалификации</h1>
                    </div>
                    <div>
                        <p className={s.Font_size14}>{`
2009 г. — Обучающие семинары Мишель Одена, Эссел, Молли Каллигер в рамках программы повышения квалификации инструкторов по подготовке к родам,
2017 г. — Московский православный институт им.Иоанна Богослова «Основы Христианской психологии»,
2018 г. — «Испытание детством: работа с внутренним ребенком», «Работа с внутренним родителем», «Работа с внутренним взрослым», Мастерские психолога Натальи Ининой,
2019 г. — семинары-практикумы Д. Кутузовой: «Хороший вопрос» и «Еда и депрессия» в рамках нарративной психотерапии.
                        `}
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.Reviews}>
                <div className={s.Reviews_title}>
                    <h1 className={s.Font_size24}>Отзывы</h1>
                </div>
                <Reviews />
            </div>
        </div>

    );
}
export default Recording;