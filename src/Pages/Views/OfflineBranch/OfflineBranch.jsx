import React from "react";
import s from './OfflineBranch.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosBranchOffline } from "../../../base/asyncActions/getDoctors";
import { NavLink } from 'react-router-dom';
import Loader from "../../../Components/Loading/Loader";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
const RazdeliOffline = () => {
    const dispatch = useDispatch();
    const BranchOffline = useSelector(state => state.doctorSpec.branch_offline_array);
    const [BranchSort, setShowBranchSort] = useState(BranchOffline);
    useEffect(() => {
        dispatch(axiosBranchOffline());
        window.scrollTo(0, 0);
        dispatch(getConfigHeaderAction("Разделы медицины"))
    }, []);
    useEffect(() => {
        setShowBranchSort(BranchOffline)
    }, [BranchOffline]);
    const [Showtext, setShowText] = useState("");

    function handleChange(e) {
        setShowText(e.target.value);
        let BranchSort1 = BranchOffline.filter(el => el.keywords.indexOf(e.target.value.toLowerCase()) !== -1);
        setShowBranchSort(BranchSort1);
    }
    
    let Branch_list = BranchSort.map(el => //<NavLink to={"/doctor-list/" + el.branch_id} key={el.branch_id}>
        <div className={s.card_item} key={el.branch_id}>
            <img src={el.image} alt="" />
            <div className={s.card_text_wrapper}>
                <div className={s.card_title}>{el.title}</div>
                <div className={s.card_subtitle}>{el.description}</div>
            </div>
        </div>
    //</ NavLink>
    )
    return (
        <section className={s.medicine + " " + s.container}>
            <h2 className={s.medicine_title + " " + s.Font_size40}>Разделы медицины</h2>
            <div>
                <input type="text" placeholder="Поиск по разделам" className={s.Register_form} value={Showtext} onChange={handleChange} />
            </div>
            <div className={s.medicine_cards}>
                {!Branch_list[0] ? (
                    <Loader />
                ) : (Branch_list)}
            </div>

        </section>
    )
}
export default RazdeliOffline;