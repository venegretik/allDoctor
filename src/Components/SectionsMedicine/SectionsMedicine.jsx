import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBranch, getOfline } from "../../base/asyncActions/getMainPageInfo";
import s from "../../Pages/Views/Main/Main.module.css";
import Loader from "../Loading/Loader";
import Button from "../Button/Button";
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
  const config = useSelector((state) => state.config.config);
  useEffect(() => {
    getInfo();
    getOff();
  }, []);

  return (
    <>
      <section className={s.medicine + " " + s.container} style={{color: config?.config.colors.color5}}>
        <h2 className={s.medicine_title + " " + s.Font_size40}>
          Разделы медицины
        </h2>
        <div className={s.medicine_cards}>
          {!Sections ? (
            <Loader />
          ) : (
            Sections.map((el, key) =>
              key < 8 ? (
                <Link key={el.branch_id} to={"/doctor-list/" + el.branch_id} style={{color: config?.config.colors.color5}}>
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
        <Link to={"/razdeli"}>
          <Button
            className={s.Show_more + " " + s.Font_size14}
            type={'submit'}
            class={'btn white'}
            text={'Показать ещё'}
          />
        </Link>
      </section>
      {config.module.offline_appointment ?
        <section className={s.medicine + " " + s.container}>
          <h2 className={s.medicine_title + " " + s.Font_size40} style={{color: config?.config.colors.color5}}>
            Оффлайн запись
          </h2>
          <div className={s.medicine_cards}>
            {!Ofline ? (
              <Loader />
            ) : (
              Ofline.map((el, key) =>
                key < 4 ? (
                  <Link className={s.ClassNull} key={el.branch_id} to={"/razdeli-offline"} style={{color: config?.config.colors.color5}}>
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
          <Link to={"/razdeli-offline"}>
            <Button
              className={s.Show_more + " " + s.Font_size14}
              type={'submit'}
              class={'btn white'}
              text={'Показать ещё'}
            />
          </Link>
        </section> : ""
      }

    </>
  );
};

export default SectionsMedicine;
