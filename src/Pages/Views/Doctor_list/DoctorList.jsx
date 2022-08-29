import React from "react";
import s from './Doctor_list.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosDoctor, axiosBranch,axiosBranchOffline } from "../../../base/asyncActions/getDoctors";
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
  const branch_array = useSelector(state => state.doctorSpec.branch_array);
  const branch_offline_array = useSelector(state => state.doctorSpec.branch_offline_array);
  let Name = useSelector(state => state.doctorSpec.specialization_name);
  let Title = useSelector(state => state.config.titleBranch);
  let [BranchTitle, setBranchTitle] = useState(Name);
  let [BranchTitle1, setBranchTitle1] = useState("");
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
  let page = useSelector(state => state.doctorSpec.page);
  let spec_array = useSelector(state => state.doctorSpec.spec_array);
  const sort = useSelector(state => state.doctorSpec.sort);
  const spec_id = useSelector(state => state.doctorSpec.spec_id);
  useEffect(() => {
    dispatch(axiosDoctor(page, Number(params.id), "rate", Number(params.spec_id)));
    dispatch(axiosBranch())
    dispatch(axiosBranchOffline())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    let Text_Branch = branch_array.filter(el => el.branch_id === Number(params.id))
    if(!Text_Branch[0])
        Text_Branch = branch_offline_array.filter(el => el.branch_id === Number(params.id))
    if(Text_Branch[0])
    setBranchTitle1(Text_Branch[0].title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [branch_array])
  useEffect(() => {
    setBranchTitle(Title);
    dispatch(getConfigHeaderAction(BranchTitle1 +": " +Title));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Title,BranchTitle1])
  const sendRequest = () => {
    dispatch(axiosDoctor(++page, params.id, sort, spec_id));
  }

  let Doctor = Doctors.map((el, key) =>
    <div className={s.Doctor + " black_config"} key={key}>
      <div className={s.Doctor_infos}>
        <div className={s.Doctor_avatar}>
          <div className={s.Doctor_avatar_img}>
            <img alt="" src={el.photo}  />
          </div>
          <div className={s.Doctor_avatar_info + " " + s.black}>
            <Stars num={el.rate} />
            <p className={s.Font_size14}>{el.recomends + " пациентов рекомендуют врача"}</p>
            <Link to={"/recording/" + el.doctor_id + "/Reviews"}>
              {/*eslint-disable-next-line*/}
              <p className={s.Font_size14 + " " + "blue_config"}>{el.reviews + " отзывов"}</p>
            </Link>
          </div>
        </div>
        <div className={s.Doctor_info + " " + s.black}>
          <p className={s.gray + " " + s.Font_size14 + " gray_config"}>{el.specialization.join(' • ')}</p>
          <h2 className={s.Font_size24}>{el.firstname + " " + el.lastname + " " + el.secondname}</h2>
          <p className={s.Staj + " " + s.Font_size14}>{el.regalia.join(' • ')}</p>
          <div className={s.Doctor_buy}>
            <p className={s.gray + " " + s.Font_size14 + " gray_config"}>Стоимость консультации:</p>
            <p className={s.buy + " " + s.Font_size24}>1500 ₽</p>
          </div>
        </div>
      </div>
      <div className={s.Payment_block}>
        <div className={s.Payment_block_p}>
          <p className={s.gray + " " + s.Font_size14 + " gray_config"}>Ближайшая запись:</p>
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
            <h1 className={s.Font_size24 + " title_config"}>{BranchTitle1 + ": " + BranchTitle}</h1>
          </div>
          <div className={s.Select_all}>
            <div className={s.Skill_select}>
              <p className={s.Font_size14 + " gray_config"}>Специализация</p>
              <SelectLogin array={spec_array} selectType={"specialization"} func={axiosDoctor} category_id={params.id} />
            </div>
            <div className={s.Sort_select}>
              <p className={s.Font_size14 + " gray_config"}>Сортировка</p>
              <SelectLogin array={arraySort} selectType={"sort"} func={axiosDoctor} />
            </div>
          </div>
        </div>
        {Doctor[0] ? Doctor : <Loader />}
      </section>
      <div className={s.Doctor_button}>
        <div className={s.Doctor_button_mobile} onClick={sendRequest}>
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