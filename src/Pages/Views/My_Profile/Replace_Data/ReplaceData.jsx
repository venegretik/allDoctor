import React from "react";
import s from "./ReplaceData.module.css";
import { Input } from "../../../../Components/Input/Input";
import { useSelector } from "react-redux/es/exports";
import { getConfigHeaderAction } from "../../../../base/Reducers/configReducer";
import { useDispatch } from "react-redux";
import ModalContainer from "../../../../Components/Modal/ModalContainer";
import MessageContainer from "../../../../Components/UploadFile/UploadFile";
import ChangeData from "./ModalReplace/Change_data_modal";
import { getShortInfo } from "../../../../base/asyncActions/getMainPageInfo";
import Button from "../../../../Components/Button/Button";
import FormErrors from "../../../../Components/FormError/FormError";
import { InpDateMask } from "../../../../Components/Input/Input";
import {
  axiosProfileEdit,
  axiosProfile,
} from "../../../../base/asyncActions/Profile";
import { useEffect, useState } from "react";
import { ProfileUtilityAction } from "../../../../base/Reducers/UserReducer";
const ReplaceData = () => {
  const dispatch = useDispatch(),
    [Date1, setDate] = useState(""),
    profile = useSelector((state) => state.profile);
  useEffect(() => {
    let DateStr = new Date(profile.birthday)
    let options = {
      day: "numeric",
      month: "numeric",
      year: "numeric"
    }
    setDate(DateStr.toLocaleString("ru", options));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);
  let [isShow, setShow] = useState(false);
  let [selected, setSelected] = useState('');
  useEffect(() => {
    setSelected(Number(profile.gender));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);
  let isState = useSelector((state) => state.profile.utitlityShow);
  useEffect(() => {
    setShow(isState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isState]);
  useEffect(() => {
    dispatch(axiosProfile());
    dispatch(getConfigHeaderAction("Редактирование"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let [errorType, seterrorType] = useState({
    status: false,
    error: {
      fields: {
        firstname: [],
        lastname: [],
        secondname: [],
        birthday: []
      },
    },
  });
  let [errorMessage, seterrorMessage] = useState({
    status: false,
    error: {
      message: "",
    },
  });
  const config = useSelector(state => state.config.config);
  const handleRadio = (e) =>{
    setSelected(Number(e.target.value))
  }
  const sendForm = async (e) => {
    e.preventDefault();
    const data = await new FormData(e.target);
    let obj = {};
    [...data].forEach((e) => {
      obj[e[0]] = e[1];
    });
    obj.gender = Number(obj.gender)
    var dateParts = obj.birthday.split("-");
    obj.birthday = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    const response = await dispatch(axiosProfileEdit(obj));
    if (response.status) {
      dispatch(getShortInfo());
      dispatch(ProfileUtilityAction(true));
      seterrorType(errorType => ({
        error: {
          fields: {
            firstname: [],
            lastname: [],
            secondname: [],
            birthday: []
          }
        }
      }))
    }
    else {
      seterrorType(errorType => ({
        error: {
          fields: {
            firstname: response.error?.fields.firstname ? [...response.error.fields.firstname] : [],
            lastname: response.error?.fields.lastname ? [...response.error.fields.lastname] : [],
            secondname: response.error?.fields.secondname ? [...response.error.fields.secondname] : [],
            birthday: response.error?.fields.birthday ? [...response.error.fields.birthday] : []
          }
        }
      }))
      seterrorMessage(errorMessage => ({
        error: {
          message: response.error?.message
        }
      }));
    }
  };
  let setText = (e) => {

    setDate(e.target.value)
    console.log(e.target.value)
  }
  let phone = "+ ";
  for (let i = 0; profile.phone.length > i; i++) {
    if (i === 1) {
      phone += " (";
      phone += profile.phone[i];
    } else if (i === 4) {
      phone += ") ";
      phone += profile.phone[i];
    } else if (i === 7) {
      phone += "-";
      phone += profile.phone[i];
    } else if (i === 9) {
      phone += "-";
      phone += profile.phone[i];
    } else phone += profile.phone[i];
  }
  return (
    <div className={s.ReplaceData + " black_config"} >
      <div className={s.My_content_title + " title_config"} >
        <h1>Личные данные</h1>
      </div>
      {isShow ? <ChangeData /> : ""}
      <div className={s.Profile_data}>
        <div className={s.Profile_data_download_img}>
          <img alt="" src={profile.photo} />
          <div className={s.upload}>
            <MessageContainer />
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
        <p className={s.Font_size16 + " " + s.gray + " gray_config"}>Телефон</p>
        <div className={s.Profile_replace_tel_data}>
          <p className={s.Font_size16}>{phone}</p>
          <ModalContainer typeModalCont="ChangeLogin" type_el="phone" />
        </div>
      </div>
      <div className={s.Profile_replace_tel}>
        <p className={s.Font_size16 + " " + s.gray + " gray_config"}>Электронная почта</p>
        <div className={s.Profile_replace_tel_data}>
          <p className={s.Font_size16}>{profile.email}</p>
          <p className={s.Font_size14}></p>
          <ModalContainer typeModalCont="ChangeLogin" type_el="email" />
        </div>
      </div>

      <form onSubmit={(e) => sendForm(e)}>
        <Input
          required
          minLength={"2"}
          pattern={"^[A-Za-zА-Яа-яЁё\\s]+$"}
          placeholder={"Имя"}
          defaultValue={profile.firstname}
          type={"text"}
          name={"firstname"}
        />
        {/* КОМПОНЕНТ ОШИБКИ */}
        <FormErrors error={errorType.error?.fields.firstname} />
        {/* КОМПОНЕНТ ОШИБКИ */}
        <Input
          required
          minLength={"2"}
          pattern={"^[A-Za-zА-Яа-яЁё\\s]+$"}
          placeholder={"Фамилия"}
          type={"text"}
          defaultValue={profile.lastname}
          name={"lastname"}
        />
        {/* КОМПОНЕНТ ОШИБКИ */}
        <FormErrors error={errorType.error?.fields.lastname} />
        {/* КОМПОНЕНТ ОШИБКИ */}
        <Input
          required
          minLength={"2"}
          pattern={"^[A-Za-zА-Яа-яЁё\\s]+$"}
          placeholder={"Отчество"}
          type={"text"}
          defaultValue={profile.secondname}
          name={"secondname"}
        />
        {/* КОМПОНЕНТ ОШИБКИ */}
        <FormErrors error={errorType.error?.fields.secondname} />
        {/* КОМПОНЕНТ ОШИБКИ */}
        <div className={s.radio_block + " gray_config"}>
          <p>Пол</p>
          <Input
            type={"radio"}
            required
            name={"gender"}
            checked={selected === 0}
            onChange={handleRadio}
            labeltext={"Мужчина"}
            label={{ color: config?.config.colors.color4 }}
            value={"0"}
          />

          <Input
            type={"radio"}
            required
            name={"gender"}
            checked={selected === 1}
            onChange={handleRadio}
            labeltext={"Женщина"}
            label={{ color: config?.config.colors.color4 }}
            value={"1"}
          />
        </div>
        <InpDateMask
          required
          type={"text"}
          placeholder={"Дата рождения"}
          value={Date1}
          onChange={setText}
          name={"birthday"}
        />
        {/* КОМПОНЕНТ ОШИБКИ */}
        <FormErrors error={errorType.error?.fields.birthday} />
        {/* КОМПОНЕНТ ОШИБКИ */}
        <Button className={s.Show_more + " " + s.Font_size14}
          type={'submit'}
          class={'btn blue'}
          text={'сохранить'} />
        {/* КОМПОНЕНТ ОШИБКИ */}
        <FormErrors error={errorMessage?.error.message} />
        {/* КОМПОНЕНТ ОШИБКИ */}
      </form>

    </div>
  );
};
export default ReplaceData;
