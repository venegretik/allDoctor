import React from "react";
import s from './Doctor_list.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosDoctor, axiosBranch } from "../../../base/asyncActions/getDoctors";
import SelectCustom from "../../../Components/Select/Select";
import Stars from "../../../Components/Stars/Stars";
const DoctorList = () => {
  const dispatch = useDispatch();
  const Doctors = useSelector(state => state.doctorSpec.Doctor_array);
  const totalPage = useSelector(state => state.doctorSpec.totalPage);
  const arraySort =[{
    title:"По популярности",
    branch_id:"rate"
  },
  {
    title:"Цена по убыванию",
    branch_id:"price_desc"
  },
  {
    title:"Цена по возрастанию",
    branch_id:"price_asc"
  }]
  const [pageNumber, setPageNumber] = useState(1);
  const branch = useSelector(state => state.doctorSpec.branch_array);
  if(!branch[0]){
    dispatch(axiosBranch())
  }
  useEffect(() => {
    dispatch(axiosDoctor(pageNumber));
  }, [])
  const sendRequest = () => {
    setPageNumber(pageNumber + 1);
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
            <p className={s.Font_size14}>{el.reviews + " отзывов"}</p>
          </div>
        </div>
        <div className={s.Doctor_info + " " + s.black}>
          <p className={s.gray}>{el.specialization.join(' • ')}</p>
          <h2 className={s.Font_size24}>{el.firstname + " " + el.lastname + " " + el.secondname}</h2>
          <p className={s.Staj + " " + s.Font_size14}>{el.regalia.join(' • ')}</p>
          <div className={s.Doctor_buy}>
            <p className={s.gray + " " + s.Font_size14}>Стоимость консультации:</p>
            <p className={s.buy}>1500 ₽</p>
          </div>
        </div>
      </div>
      <div className={s.Payment_block}>
        <div className={s.Payment_block_p}>
          <p className={s.gray + " " + s.Font_size14}>Ближайшая запись:</p>
          <p className={s.Font_size14}>{el.closest_datetime}</p>
        </div>
        <button>Записаться</button>
      </div>
    </div>
  );
  return (
    <div>
      <section className={s.Doctor_list}>
        <div className={s.Skill}>
          <div className={s.Skill_title}>
            <h1 className={s.Font_size24}>Дерматолог</h1>
          </div>
          <div className={s.Select_all}>
            <div className={s.Skill_select}>
              <p className={s.Font_size14}>Специализация</p>
              <SelectCustom array={branch} selectType={"specialization"} func={axiosDoctor}/>
            </div>
            <div className={s.Sort_select}>
              <p className={s.Font_size14}>Сортировка</p>
              <SelectCustom array={arraySort} selectType={"sort"} func={axiosDoctor}/>
            </div>
          </div>
        </div>
        {Doctor}
      </section>
      <div className={s.Doctor_button}>
        <button onClick={sendRequest}>Показать ещё</button>
      </div>
    </div>


  );
}
export { DoctorList }