import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../../img/arrow.png";
import { DateRange } from "react-date-range";
import "../Select.css";
import s from "./SelectCalendar.module.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { consultationHistoryCons } from "../../../base/asyncActions/getConsultation";
import * as rdrLocales from 'react-date-range/dist/locale';
const SelectCalendar = (props) => {
    let dispatch = useDispatch();
    const [isShown, setIsShown] = useState(false);
    const config = useSelector((state) => state.config.config);
    let [isNum, setNum] = useState(0);
    const specialization = useSelector(state => state.consultation.specialization_id);
    const page = useSelector(state => state.consultation.page);
    const handleClick = (event) => {
        setIsShown((current) => !current);
        setNum(0);
    };
    useEffect(() => {
        if (!isShown) {
            document.body.style.overflow = "auto";
        }
        if (isShown) {
            document.body.style.overflow = "hidden";
        }
    }, [isShown])
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection"
        }
    ]);
    useEffect(() => {
        dispatch(consultationHistoryCons(specialization, page, state[0].startDate, state[0].endDate));
        setNum(++isNum);
        if (isNum === 2) {
            setNum(0);
            setIsShown(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])
    return (
        <div id="Select-hide">
            <div className="Select_content" onClick={handleClick}>
                <p style={{
                    border: ` 1px solid ${config?.config.colors.color6}`,
                    color: config?.config.colors.color2
                }}>{new Date(state[0].startDate).toLocaleString(
                    "ru",
                    {
                        month: "numeric",
                        day: "numeric",
                    }
                ) + "/" + new Date(state[0].endDate).toLocaleString(
                    "ru",
                    {
                        month: "numeric",
                        day: "numeric",
                    }
                )}</p>
                <img src={arrow} className={isShown ? "Rotate_img" : ""} alt="" />
            </div>
            {isShown && (
                <div className={s.Cancel_Record_full}>
                    <div className={s.Cancel_Record_block}>
                        <div className={s.Cart_close} onClick={handleClick}>
                            &times;
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