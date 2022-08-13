import React from "react";
import s from "./ReplaceData.module.css";
import upload from "../../../../img/upload.png";
import { Input } from "../../../../Components/Input/Input";
import { useSelector } from "react-redux/es/exports";
import ChangeLogin from "../../../../Components/Modal/Change_login/Change_login";
import { useDispatch } from "react-redux";
import Message_Container from "../../../../Components/UploadFile/UploadFile";
import ChangeData from "./ModalReplace/Change_data_modal";
import { getShortInfo } from "../../../../base/asyncActions/getMainPageInfo";
import {
  axiosProfileEdit,
  axiosProfile,
} from "../../../../base/asyncActions/Profile";
import { useEffect, useState } from "react";

const ReplaceData = () => {
  const dispatch = useDispatch(),
    profile = useSelector((state) => state.profile),
    date = new Date().toISOString().split("T")[0];
  let [isShow, setShow] = useState(false);
  useEffect(() => {
    dispatch(axiosProfile());
  }, []);

  const sendForm = async (e) => {
    e.preventDefault();
    const data = await new FormData(e.target);
    let obj = {};
    [...data].forEach((e) => {
      obj[e[0]] = e[1];
    });
    const response = await dispatch(axiosProfileEdit(obj));
    if (response.status) {
      dispatch(getShortInfo());
      setShow(true);
    }
  };
  let phone = "";
  for (let i = 0; profile.phone.length > i; i++) {
    if (i == 1) {
      phone += " (";
      phone += profile.phone[i];
    } else if (i == 4) {
      phone += ") ";
      phone += profile.phone[i];
    } else if (i == 7) {
      phone += "-";
      phone += profile.phone[i];
    } else if (i == 9) {
      phone += "-";
      phone += profile.phone[i];
    } else phone += profile.phone[i];
  }
  return (
    <div className={s.ReplaceData}>
      <div className={s.My_content_title}>
        <h1>Личные данные</h1>
      </div>
      {isShow ? <ChangeData /> : ""}
      <div className={s.Profile_data}>
        <div className={s.Profile_data_download_img}>
          <img src={profile.photo} alt="" />
          <div className={s.upload}>
            <Message_Container />
          </div>
        </div>
        <b className={s.Font_size24}>
          {profile.firstname +
            " " +
            profile.lastname +
            " " +
            profile.secondname}
        </b>
      </div>
      <div className={s.Profile_replace_tel}>
        <p className={s.Font_size16 + " " + s.gray}>Телефон</p>
        <div className={s.Profile_replace_tel_data}>
          <p className={s.Font_size16}>{phone}</p>
          <ChangeLogin type_el="phone" />
        </div>
      </div>
      <div className={s.Profile_replace_tel}>
        <p className={s.Font_size16 + " " + s.gray}>Электронная почта</p>
        <div className={s.Profile_replace_tel_data}>
          <p className={s.Font_size16}>{profile.email}</p>
          <p className={s.Font_size14}></p>
          <ChangeLogin type_el="email" />
        </div>
      </div>

      <form onSubmit={(e) => sendForm(e)}>
        <Input
          required
          minLength={"2"}
          pattern={"^[А-Яа-яЁё]+$"}
          placeholder={"Фамилия"}
          type={"text"}
          name={"firstname"}
        />
        <Input
          required
          minLength={"2"}
          pattern={"^[А-Яа-яЁё]+$"}
          placeholder={"Имя"}
          type={"text"}
          name={"lastname"}
        />
        <Input
          required
          minLength={"2"}
          pattern={"^[А-Яа-яЁё]+$"}
          placeholder={"Отчество"}
          type={"text"}
          name={"secondname"}
        />
        <div className={s.radio_block}>
          <p>Пол</p>
          <Input
            type={"radio"}
            required
            name={"gender"}
            labeltext={"Мужчина"}
            value={"0"}
          />

          <Input
            type={"radio"}
            required
            name={"gender"}
            labeltext={"Женщина"}
            value={"1"}
          />
        </div>
        <Input required type={"date"} max={date} name={"birthday"} />
        <button>сохранить</button>
      </form>
    </div>
  );
};
export default ReplaceData;
