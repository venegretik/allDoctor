import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import { DateRange } from "react-date-range";
import "../Select.css";
import s from "./SelectCalendar.module.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import * as rdrLocales from 'react-date-range/dist/locale';
const SelectCalendar = (props) => {
    const [isShown, setIsShown] = useState(false);
    const [Showtext, setShowText] = useState("...");
    const handleClick = (event) => {
        setIsShown((current) => !current);
    };
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection"
        }
    ]);
    return (
        <div id="Select-hide">
            <div className="Select_content" onClick={handleClick}>
                <p>{Showtext}</p>
                <img src={arrow} className={isShown ? "Rotate_img" : ""} alt="" />
            </div>
            {isShown && (
                <div className={s.Cancel_Record_full}>
                    <div className={s.Cancel_Record_block}>
                        <div className={s.Cart_close} onClick={handleClick}>
                            +
                        </div>
                        <DateRange
                            locale={rdrLocales.ru}
                            showDateDisplay={false}
                            showMonthAndYearPickers={false}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state} />
                    </div>
                </div>
            )}
        </div>
    )
}
export default SelectCalendar;