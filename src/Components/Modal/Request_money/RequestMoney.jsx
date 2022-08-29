import React from "react";
import s from "./RequestMoney.module.css";
import { useDispatch} from "react-redux";
import { useState } from "react";
import arrow from "../../../img/arrow-left.png";
import { Input } from "../../Input/Input";
import Button from "../../Button/Button";
import { axiosProfileFriend } from "../../../base/asyncActions/Profile";
import FormErrors from "../../FormError/FormError";
import { BottomSheet } from 'react-spring-bottom-sheet'
const RequestMoney = (props) => {
  let dispatch = useDispatch();
  let [showWindow, setWindow] = useState(false);
  if (window.history && window.history.pushState && showWindow) {
      window.onpopstate = function (event) {
          if (showWindow) {
            setWindow(false);
              window.history.pushState('forward', null, '');
              window.history.forward(1);
          }
      };
      window.history.pushState('forward', null, ''); // В IE должны быть эти две строки
      window.history.forward(1);
  }
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
  const availableScreenWidth = window.screen.availWidth;
  return (


    <div>
      <div className={s.blue} onClick={(e) => setWindow(true)}>
        <img alt="" src={arrow}  />
        <p className={"blue_config "} >Вывести средства</p>
      </div>
      {showWindow ? <> 
        {availableScreenWidth <= 480 ? <BottomSheet open={showWindow}
                    onDismiss={() => setWindow(false)}>
                    <div className={"black_config"}>
          <div className={s.mob_block}>
            <div className={s.Cart_close} onClick={(e) => setWindow(false)}>
              +
            </div>
            <h1 className={s.Font_size24 + " title_config"}>Запросить средства</h1>
            <p className={s.Font_size14 + " gray_config"}>
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
                </BottomSheet> :(
        <div className={s.Cancel_Record_full + " black_config"}>
          <div className={s.background} onClick={() => setWindow(false)}></div>
          <div className={s.Cancel_Record_block}>
            <div className={s.Cart_close} onClick={(e) => setWindow(false)}>
              +
            </div>
            <h1 className={s.Font_size24 + " title_config"}>Запросить средства</h1>
            <p className={s.Font_size14 + " gray_config"}>
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
        ) }</> : (
        ""
      )}
    </div>
  );
};
export default RequestMoney;
