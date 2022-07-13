import React from "react";
import s from './Razdeli.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosBranch } from "../../../base/asyncActions/getDoctors";
import { NavLink, Route } from 'react-router-dom';
import { useLocation, useParams } from "react-router-dom";
const Razdeli = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(axiosBranch());
    }, []);
    const Branch = useSelector(state => state.doctorSpec.branch_array);
    const BranchOffline = useSelector(state => state.doctorSpec.branch_offline_array);
    let Branch_list = Branch.map(el => <NavLink to={"/doctor-list"} key={el.branch_id}>
        <div className={s.card_item}>
            <img src={el.image} alt=""/>
            <div className={s.card_text_wrapper}>
                <div className={s.card_title}>{el.title}</div>
                <div className={s.card_subtitle}>{el.description}</div>
            </div>
        </div>
    </ NavLink>)
    return (
        <section className={s.medicine + " " + s.container}>
            <h2 className={s.medicine_title + " " + s.Font_size40}>Разделы медицины</h2>
            <div>
                <input type="text" placeholder="Поиск по разделам" className={s.Register_form}/>
            </div>
            <div className={s.medicine_cards}>
                {Branch_list}
            </div>

        </section>
    )
}
export default Razdeli;
