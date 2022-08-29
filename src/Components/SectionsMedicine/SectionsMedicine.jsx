import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const config = useSelector((state) => state.config.config);
  useEffect(() => {
    getInfo();
    getOff();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className={s.medicine + " " + s.container + " title_config"}>
        <h2 className={s.medicine_title + " " + s.Font_size40}>
          Разделы медицины
        </h2>
        <div className={s.medicine_cards}>
          {!Sections ? (
            <Loader />
          ) : (
            Sections.map((el, key) =>
              key < 7 ? (
                <Link key={el.branch_id} to={"/doctor-list/" + el.branch_id + "/0"}>
                  <div className={s.card_item  + " opacityBlue"}>
                    <img alt="" src={el.image}  />
                    <div className={s.card_text_wrapper}>
                      <div className={s.card_title + " title_config"}>{el.title}</div>
                      <div className={s.card_subtitle + " title_config"}>{el.description}</div>
                    </div>
                  </div>
                </Link>
              ) : (
                false
              )
            )
          )}
          <Link to={"/razdeli"} className=" title_config">
            <div className={s.card_item + " opacityBlue"}>
              <img alt="" src="https://api.telemed.dev-h.ru/images/icons/arrow.svg"  />
              <div className={s.card_text_wrapper}>
                <div className={s.card_title}>Посмотреть все разделы медицины</div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      {config.module.offline_appointment ?
        <section className={s.medicine + " " + s.container}>
          <h2 className={s.medicine_title + " " + s.Font_size40 + " title_config"}>
            Оффлайн запись
          </h2>
          <div className={s.medicine_cards}>
            {!Ofline ? (
              <Loader />
            ) : (
              Ofline.map((el, key) =>
                key < 3 ? (
                  <Link className={s.ClassNull + " title_config"} key={el.branch_id} to={"/doctor-list/" + el.branch_id + "/0"}>
                    <div className={s.card_item + " opacityBlue"} >
                      <img alt="" src={el.image}  />
                      <div className={s.card_text_wrapper}>
                        <div className={s.card_title + " title_config"}>{el.title}</div>
                        <div className={s.card_subtitle + " title_config"}>{el.description}</div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  false
                )
              )
            )}
            <Link to={"/razdeli-offline"}>
              <div className={s.card_item + " opacityBlue"}>
                <img alt="" src="https://api.telemed.dev-h.ru/images/icons/arrow.svg"  />
                <div className={s.card_text_wrapper}>
                  <div className={s.card_title + " title_config"}>Посмотреть все разделы медицины</div>
                </div>
              </div>
            </Link> 
          </div>
        </section> : ""
      }

    </>
  );
};

export default SectionsMedicine;
