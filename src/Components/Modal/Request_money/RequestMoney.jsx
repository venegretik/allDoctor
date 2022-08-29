import React from "react";
import s from "./RequestMoney.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Input } from "../../Input/Input";
import Button from "../../Button/Button";
import { getConfigModalStatus } from "../../../base/Reducers/configReducer";
import { axiosProfileFriend } from "../../../base/asyncActions/Profile";
import FormErrors from "../../FormError/FormError";
const RequestMoney = (props) => {
  let dispatch = useDispatch();
  const sendForm = async (e) => {
    e.preventDefault();
    const data = await new FormData(e.target);
    let obj = {};
    let response;
    [...data].forEach((e) => {
      obj[e[0]] = e[1];
    });
    response = await dispatch(axiosProfileFriend(obj));
    if (!response.status) {
      errorType.error.fields = {
        summ: [...response.error?.fields.summ]
      }
      props.setWindow(true)
      errorMessage.error.message = { ...response.error?.message }
    }
    else
      props.setWindow(false)

  };
  const errorMessage = {
    status: false,
    error: {
      message: "",
    },
  };
  const errorType = {
    status: false,
    error: {
      fields: {
        summ: ""
      },
    },
  };
  const availableScreenWidth = window.screen.availWidth;
  return (
    <div>
      <div className={"black_config"}>
        <div className={s.RequestMoneyFull}>
          <div className={s.Cart_close} onClick={(e) => props.setWindow(false)}>
            +
          </div>
          <h1 className={s.Font_size24 + " title_config"}>Запросить средства</h1>
          <p className={s.Font_size14 + " gray_config"}>
            Сумма будет доступна в течении 3х рабочих дней
          </p>
          <div >
            <form className={s.RequestMoney} onSubmit={(e) => sendForm(e)}>
              <Input
                placeholder={"Сумма"}
                name={"summ"}
                type="text"
                required
                pattern={"^[0-9]+$"}
              />
              {/* КОМПОНЕНТ ОШИБКИ */}
              <FormErrors error={errorMessage.error.message} />
              {/* КОМПОНЕНТ ОШИБКИ */}
              <Button class={"btn orange"} text={"Запросить"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestMoney;
