import React from "react";
import s from './Doctor_list.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosDoctor, axiosBranch } from "../../../base/asyncActions/getDoctors";
import SelectLogin from "../../../Components/Select/SelectLogin/SelectLogin";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
import Stars from "../../../Components/Stars/Stars";
import { Link } from "react-router-dom";
import Chat from "../../../Components/Chat/Chat";
import Button from "../../../Components/Button/Button";
import Loader from "../../../Components/Loading/Loader";
const DoctorList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  let callendarDay = (date) => {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота"],
      now = new Date(date);
    return days[now.getDay()]
  }
  const params = useParams();
  const Doctors = useSelector(state => state.doctorSpec.Doctor_array);
  let Name = useSelector(state => state.doctorSpec.specialization_name);
  let Title = useSelector(state => state.config.titleBranch);
  let [BranchTitle, setBranchTitle] = useState(Name);
  const arraySort = [{
    title: "По популярности",
    branch_id: "rate"
  },
  {
    title: "Цена по убыванию",
    branch_id: "price_desc"
  },
  {
    title: "Цена по возрастанию",
    branch_id: "price_asc"
  }]
  let [pageNumber, setPageNumber] = useState(1);
  const branch = useSelector(state => state.doctorSpec.branch_array);
  if (!branch[0]) {
    dispatch(axiosBranch())
  }
  useEffect(() => {
    dispatch(axiosDoctor(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    setBranchTitle(Title);
    dispatch(getConfigHeaderAction(Title))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Title])
  const sendRequest = () => {
    setPageNumber(++pageNumber);
    dispatch(axiosDoctor(pageNumber));
  }
  const config = useSelector((state) => state.config.config);

  let Doctor = Doctors.map((el, key) =>
    <div className={s.Doctor} key={key} style={{ color: config?.config.colors.color2 }}>
      <div className={s.Doctor_infos}>
        <div className={s.Doctor_avatar}>
          <div className={s.Doctor_avatar_img}>
            <img src={el.photo} alt="" />
          </div>
          <div className={s.Doctor_avatar_info + " " + s.black}>
            <Stars num={el.rate} />
            <p className={s.Font_size14}>{el.recomends + " пациентов рекомендуют врача"}</p>
            <Link to={"/recording/" + el.doctor_id + "/Reviews"}>
              <p className={s.Font_size14 + " " + s.blueLink} style={{ color: config?.config.colors.color10 }}>{el.reviews + " отзывов"}</p>
            </Link>
          </div>
        </div>
        <div className={s.Doctor_info + " " + s.black}>
          <p className={s.gray + " " + s.Font_size14} style={{ color: config?.config.colors.color4 }}>{el.specialization.join(' • ')}</p>
          <h2 className={s.Font_size24}>{el.firstname + " " + el.lastname + " " + el.secondname}</h2>
          <p className={s.Staj + " " + s.Font_size14}>{el.regalia.join(' • ')}</p>
          <div className={s.Doctor_buy}>
            <p className={s.gray + " " + s.Font_size14} style={{ color: config?.config.colors.color4 }}>Стоимость консультации:</p>
            <p className={s.buy + " " + s.Font_size24}>1500 ₽</p>
          </div>
        </div>
      </div>
      <div className={s.Payment_block}>
        <div className={s.Payment_block_p}>
          <p className={s.gray + " " + s.Font_size14} style={{ color: config?.config.colors.color4 }}>Ближайшая запись:</p>
          <p className={s.Font_size14}>
            {callendarDay(el.closest_datetime) + "," + new Date(el.closest_datetime).toLocaleString(
              "ru",
              {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric"
              }
            )}
          </p>
        </div>
        <Link to={"/recording/" + el.doctor_id + "/Default"}>
          <Button
            className={s.Reviews_send + " " + s.Font_size14}
            type={'submit'}
            class={'btn blue'}
            text={'Записаться'}
          />
        </Link>
      </div>
    </div >

  );
  return (
    <div className={s.Container + " Container"}>
      <section className={s.Doctor_list}>
        <div className={s.Skill}>
          <div className={s.Skill_title}>
            <h1 className={s.Font_size24}>{BranchTitle}</h1>
          </div>
          <div className={s.Select_all}>
            <div className={s.Skill_select}>
              <p className={s.Font_size14} style={{ color: config?.config.colors.color4 }}>Специализация</p>
              <SelectLogin array={branch} selectType={"specialization"} func={axiosDoctor} category_id={params.id} />
            </div>
            <div className={s.Sort_select}>
              <p className={s.Font_size14} style={{ color: config?.config.colors.color4 }}>Сортировка</p>
              <SelectLogin array={arraySort} selectType={"sort"} func={axiosDoctor} />
            </div>
          </div>
        </div>
        {Doctor[0] ? Doctor : <Loader />}
      </section>
      <div className={s.Doctor_button}>
        <div onClick={sendRequest}>
          <Button
            className={s.Reviews_send + " " + s.Font_size14}
            type={'submit'}
            class={'btn white'}
            text={'Показать ещё'}
          />
        </div>
      </div>
      <Chat />
    </div>


  );
}
export { DoctorList }