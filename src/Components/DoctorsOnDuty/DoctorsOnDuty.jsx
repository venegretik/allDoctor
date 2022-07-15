import s from "../../Pages/Views/Doctor_list/Doctor_list.module.css";
import style from "../../Pages/Views/Main/Main.module.css";
import Loader from "../Loading/Loader";
import Stars from "../Stars/Stars";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDoctorDuty } from "../../base/asyncActions/getMainPageInfo";
import { Link } from "react-router-dom";

const DoctorsOnDuty = () => {
  const [Doctor, setDoctor] = useState([]),
    dispatch = useDispatch(),
    getDoctor = async () => {
      const response = await dispatch(getDoctorDuty());
      if (response.status) {
        setDoctor(response.data.items);
      }
    };

  useEffect(() => {
    getDoctor();
  }, []);
  return (
    <section className={style.SectionDuty}>
      <div className={style.Container_list}>
        <div className={style.Title_list}>
          <h1 className={style.Font_size40}>Дежурные врачи</h1>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", columnGap: "30px" }}>
          {!Doctor ? (
            <Loader />
          ) : (
            Doctor.map((el) => (
              <Link
                to={"#"}
                style={{
                  maxWidth: "500px",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                className={s.Doctor}
                key={el.doctor_id}
              >
                <div className={s.Doctor_infos}>
                  <div className={s.Doctor_avatar}>
                    <div className={s.Doctor_avatar_img}>
                      <img src={el.photo} alt="" />
                      {el.is_online && <div className={s.DoctorOnline}></div>}
                    </div>
                    <div className={s.Doctor_avatar_info + " " + s.black}>
                      <Stars num={el.rate} />
                      <p className={s.Font_size14}>
                        {el.recomends + " пациентов рекомендуют врача"}
                      </p>
                      <p className={s.Font_size14}>{el.reviews + " отзывов"}</p>
                    </div>
                  </div>
                  <div className={s.Doctor_info + " " + s.black}>
                    <p className={s.gray}>{el.specialization.join(" • ")}</p>
                    <h2 className={s.Font_size24}>
                      {el.firstname + " " + el.lastname + " " + el.secondname}
                    </h2>
                    <p className={s.Staj + " " + s.Font_size14}>
                      {el.regalia.join(" • ")}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorsOnDuty;
