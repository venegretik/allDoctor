import React from "react";
import s from './Doctor_list.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosDoctor, axiosBranch } from "../../../base/asyncActions/getDoctors";
import SelectLogin from "../../../Components/Select/SelectLogin/SelectLogin";
import Stars from "../../../Components/Stars/Stars";
import { Link } from "react-router-dom";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
import Button from "../../../Components/Button/Button";
const DoctorList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getConfigHeaderAction("Доктора"))
  }, []);

  const params = useParams();
  const Doctors = useSelector(state => state.doctorSpec.Doctor_array);
  let Name = useSelector(state => state.doctorSpec.specialization_name);
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
  if (Name == "" && branch[0]) {
    let filt = branch.filter(el => el.branch_id == params.id);
    Name = filt[0].title
  }
  useEffect(() => {
    dispatch(axiosDoctor(params.id));
  }, [])
  const sendRequest = () => {
    setPageNumber(++pageNumber);
    dispatch(axiosDoctor(pageNumber));
  }

  let Doctor = Doctors.map(el =>
    <div className={s.Doctor} key={el.doctor_id}>
      <div className={s.Doctor_infos}>
        <div className={s.Doctor_avatar}>
          <div className={s.Doctor_avatar_img}>
            <img src={el.photo} alt="" />
          </div>
          <div className={s.Doctor_avatar_info + " " + s.black}>
            <Stars num={el.rate} />
            <p className={s.Font_size14}>{el.recomends + " пациентов рекомендуют врача"}</p>
            <Link to={"/recording/" + el.doctor_id + "/Reviews"}>
              <p className={s.Font_size14 + " " + s.blueLink}>{el.reviews + " отзывов"}</p>
            </Link>
          </div>
        </div>
        <div className={s.Doctor_info + " " + s.black}>
          <p className={s.gray}>{el.specialization.join(' • ')}</p>
          <h2 className={s.Font_size24}>{el.firstname + " " + el.lastname + " " + el.secondname}</h2>
          <p className={s.Staj + " " + s.Font_size14}>{el.regalia.join(' • ')}</p>
          <div className={s.Doctor_buy}>
            <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
            <p className={s.buy + " " + s.Font_size24}>1500 ₽</p>
          </div>
        </div>
      </div>
      <div className={s.Payment_block}>
        <div className={s.Payment_block_p}>
          <p className={s.gray + " " + s.Font_size14}>Ближайшая запись:</p>
          <p className={s.Font_size14}>
            {new Date(el.closest_datetime).toLocaleString(
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
            <h1 className={s.Font_size24}>{Name}</h1>
          </div>
          <div className={s.Select_all}>
            <div className={s.Skill_select}>
              <p className={s.Font_size14}>Специализация</p>
              <SelectLogin array={branch} selectType={"specialization"} func={axiosDoctor} category_id={params.id} />
            </div>
            <div className={s.Sort_select}>
              <p className={s.Font_size14}>Сортировка</p>
              <SelectLogin array={arraySort} selectType={"sort"} func={axiosDoctor} />
            </div>
          </div>
        </div>
        {Doctor}
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
    </div>


  );
}
export { DoctorList }