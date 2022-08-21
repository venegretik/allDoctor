import React from "react";
import s from "./RequestMoney.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import arrow from "../../../img/arrow-left.png";
import { Input } from "../../Input/Input";
import Button from "../../Button/Button";
import { axiosProfileFriend } from "../../../base/asyncActions/Profile";
import FormErrors from "../../FormError/FormError";
const RequestMoney = (props) => {
  const config = useSelector((state) => state.config.config);
  let dispatch = useDispatch();

  let [showWindow, setWindow] = useState(false);
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
      setWindow(true)
      errorMessage.error.message = { ...response.error?.message }
    }
    else
      setWindow(false)

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
  return (
    <div>
      <div className={s.blue} onClick={(e) => setWindow(true)}>
        <img src={arrow} alt="" />
        <p>Вывести средства</p>
      </div>
      {showWindow ? (
        <div className={s.Cancel_Record_full} style={{ color: config?.config.colors.color2 }}>
          <div className={s.background} onClick={() => setWindow(false)}></div>
          <div className={s.Cancel_Record_block}>
            <div className={s.Cart_close} onClick={(e) => setWindow(false)}>
              +
            </div>
            <h1 className={s.Font_size24}>Запросить средства</h1>
            <p className={s.Font_size14} style={{ color: config?.config.colors.color4 }}>
              Сумма будет доступна в течении 3х рабочих дней
            </p>
            <div className={s.Cancel_Record}>
              <form onSubmit={(e) => sendForm(e)}>
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
      ) : (
        ""
      )}
    </div>
  );
};
export default RequestMoney;
