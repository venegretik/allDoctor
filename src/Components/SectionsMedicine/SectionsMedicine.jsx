import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getBranch, getOfline } from "../../base/asyncActions/getMainPageInfo";
import s from "../../Pages/Views/Main/Main.module.css";
import Loader from "../Loading/Loader";
const SectionsMedicine = () => {
  const [Sections, setSections] = useState([]),
    [Ofline, setOfline] = useState([]),
    dispatch = useDispatch(),
    getInfo = async () => {
      const response = await dispatch(getBranch());
      if (response.status) {
        setSections(response.data.items);
      }
    },
    getOff = async () => {
      const response = await dispatch(getOfline());
      if (response.status) {
        setOfline(response.data.items);
      }
    };

  useEffect(() => {
    getInfo();
    getOff();
  }, []);

  return (
    <>
      <section className={s.medicine + " " + s.container}>
        <h2 className={s.medicine_title + " " + s.Font_size40}>
          Разделы медицины
        </h2>
        <div className={s.medicine_cards}>
          {!Sections ? (
            <Loader />
          ) : (
            Sections.map((el, key) =>
              key < 8 ? (
                <Link key={el.branch_id} to={"/doctor-list/"+ el.branch_id}>
                  <div className={s.card_item}>
                    <img src={el.image} alt="" />
                    <div className={s.card_text_wrapper}>
                      <div className={s.card_title}>{el.title}</div>
                      <div className={s.card_subtitle}>{el.description}</div>
                    </div>
                  </div>
                </Link>
              ) : (
                false
              )
            )
          )}
        </div>
      </section>
      <section className={s.medicine + " " + s.container}>
        <h2 className={s.medicine_title + " " + s.Font_size40}>
          Оффлайн запись
        </h2>
        <div className={s.medicine_cards}>
          {!Ofline ? (
            <Loader />
          ) : (
            Ofline.map((el, key) =>
              key < 4 ? (
                <Link className={s.ClassNull} key={el.branch_id} to={"/doctor-list/" + el.branch_id}>
                  <div className={s.card_item} >
                    <img src={el.image} alt="" />
                    <div className={s.card_text_wrapper}>
                      <div className={s.card_title}>{el.title}</div>
                      <div className={s.card_subtitle}>{el.description}</div>
                    </div>
                  </div>
                </Link>
              ) : (
                false
              )
            )
          )}
        </div>
      </section>
    </>
  );
};

export default SectionsMedicine;
