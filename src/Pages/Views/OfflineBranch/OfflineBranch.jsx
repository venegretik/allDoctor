import React from "react";
import s from './OfflineBranch.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosBranchOffline } from "../../../base/asyncActions/getDoctors";
import Loader from "../../../Components/Loading/Loader";
import search from "../../../img/search.png";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
import Chat from "../../../Components/Chat/Chat";
import { NavLink } from "react-router-dom";
const RazdeliOffline = () => {
    const dispatch = useDispatch();
    const BranchOffline = useSelector(state => state.doctorSpec.branch_offline_array);
    const [BranchSort, setShowBranchSort] = useState(BranchOffline);
    useEffect(() => {
        dispatch(axiosBranchOffline());
        window.scrollTo(0, 0);
        dispatch(getConfigHeaderAction("Оффлайн записи"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        setShowBranchSort(BranchOffline)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [BranchOffline]);
    const [Showtext, setShowText] = useState("");

    function handleChange(e) {
        setShowText(e.target.value);
        let BranchSort1 = BranchOffline.filter(el => el.keywords.indexOf(e.target.value.toLowerCase()) !== -1);
        setShowBranchSort(BranchSort1);
    }
    
    let Branch_list = BranchSort.map(el => <NavLink to={"/doctor-list/" + el.branch_id + "/0"} key={el.branch_id}>
        <div className={s.card_item + " title_config opacityBlue"}>
            <img alt="" src={el.image}  />
            <div className={s.card_text_wrapper}>
                <div className={s.card_title}>{el.title}</div>
                <div className={s.card_subtitle}>{el.description}</div>
            </div>
        </div>
    </ NavLink>
    )
    return (
        <section className={s.medicine + " " + s.container + " title_config"}>
            <h2 className={s.medicine_title + " " + s.Font_size40}>Разделы медицины</h2>
            <div className={s.medicine_input}>
                <input type="text" placeholder="Поиск по разделам" className={s.Register_form} value={Showtext} onChange={handleChange} />
                <img alt="" src={search}  />
            </div>
            <div className={s.medicine_cards}>
                {!Branch_list[0] ? (
                    <Loader />
                ) : (Branch_list)}
            </div>
            <Chat/>
        </section>
    )
}
export default RazdeliOffline;