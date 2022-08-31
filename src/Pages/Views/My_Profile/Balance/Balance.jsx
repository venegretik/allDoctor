import React from "react";
import s from "./Balance.module.css";
import { useEffect, useState } from "react";
import Button from "../../../../Components/Button/Button";
import ModalContainer from "../../../../Components/Modal/ModalContainer";
import {
  axiosProfileBalance,
  axiosProfileRefferal,
  axiosProfilePay,
  axiosProfileHistory,
} from "../../../../base/asyncActions/Profile";
import { useDispatch, useSelector } from "react-redux";
import { Input, InpMask } from "../../../../Components/Input/Input";
import RequestMoney from "../../../../Components/Modal/Request_money/RequestMoney";
import copy from "../../../../img/copy.png";
import InfoModal from "../../../../Components/InfoText/InfoModal";
import FormErrors from "../../../../Components/FormError/FormError";
import { getConfigHeaderAction} from "../../../../base/Reducers/configReducer";
const Balance = () => {
  const [isShown, setIsShown] = useState(false);
  let dispatch = useDispatch();
  let keyNum = 0;
  const balance = useSelector((state) => state.profile.balance);
  const referral = useSelector((state) => state.profile.referral);
  let total_page = useSelector((state) => state.profile.total_page);
  let current_page = useSelector((state) => state.profile.current_page);
  const history = useSelector((state) => state.profile.history);
  let [errorType, seterrorType] = useState({
    status: false,
    error: {
      fields: {
        summ: [],
        friend: [],
      },
    },
  });
  let [errorMessage, seterrorMessage] = useState({
    status: false,
    error: {
      message: "",
    },
  });
  useEffect(() => {
    dispatch(axiosProfileBalance());
    dispatch(axiosProfileRefferal());
    dispatch(getConfigHeaderAction("Баланс"))
    if (!history[0]) dispatch(axiosProfileHistory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const CopyText = (e) => {
    var copyText = document.querySelector(".refferal");
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");
  };
  const ShowClick = () => {
    if (total_page > current_page++) {
      dispatch(axiosProfileHistory(current_page++));
    }
  };
  const sendForm = async (e) => {
    e.preventDefault();
    const data = await new FormData(e.target);
    let obj = {};
    let response;
    [...data].forEach((e) => {
      obj[e[0]] = e[1];
    });
    !isShown
      ? (response = await dispatch(axiosProfilePay(obj)))
      : (response = await dispatch(axiosProfilePay(obj)));

    if (response.status && response.payment_url) {
      window.location.href = response.payment_url;
    }
    if (!response.status) {
      seterrorType(errorType => ({
        error: {
          fields: {
            summ: response.error?.fields.summ ? [...response.error?.fields.summ] : [],
            friend: response.error?.fields.friend ? [...response.error?.fields.friend] : []
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
  let History = history.map((el) => (
    <div key={++keyNum} className="black_config">
      <div className={s.History_data} >
        <p>
          {new Date(el.datetime).toLocaleString("ru", {
            month: "short",
            year: "numeric",
            day: "numeric",
          })}
        </p>
      </div>{" "}
      <div className={s.History_content}>
        <p className={s.Font_size14}>{el.action.type}</p>
        <div className={s.History_content_text}>
          <b className={s.Font_size24}>{el.action.message}</b>
          <b className={s.Font_size24}>-{el.summ}₽</b>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={s.Balance}>
      <div className={s.Balance_title + " title_config"}>
        <h1>Баланс: {balance}₽</h1>
      </div>
      <form onSubmit={(e) => sendForm(e)}>
        <div className={s.Balance_add}>
          <Input
            required
            minLength={"2"}
            placeholder={"Сумма"}
            pattern={"^[0-9]+$"}
            type={"number"}
            name={"summ"}
          />
          <Button
            className={s.Font_size14}
            type={"submit"}
            class={"btn blue"}
            text={"пополнить"}
          />
        </div>

        {/* КОМПОНЕНТ ОШИБКИ */}
        <FormErrors error={errorType.error.fields.summ} />
        {/* КОМПОНЕНТ ОШИБКИ */}
        {/* КОМПОНЕНТ ОШИБКИ */}
        <FormErrors error={errorMessage.error.message} />
        {/* КОМПОНЕНТ ОШИБКИ */}

        <div className={s.Balance_friend + " black_config"}>
          <input
            type="checkbox"
            id="Register_checkbox"
            className={s.custom_checkbox}
            onChange={(e) => setIsShown((current) => !current)}
          />

          <label htmlFor="Register_checkbox"></label>
          <p>Пополнить другу</p>
        </div>
        <div className={s.Input_friend}>
          {isShown ? (
            <InpMask
              pattern={"[+][7]\\s[(][0-9]{3}[)]\\s[0-9]{3}-[0-9]{2}-[0-9]{2}"}
              required
              placeholder={"Номер телефона друга"}
              type={"tel"}
              name={"friend"}
              className={"input"}
            />
          ) : (
            ""
          )}
          {/* КОМПОНЕНТ ОШИБКИ */}
          <FormErrors error={errorType.error.fields.friend} />
          {/* КОМПОНЕНТ ОШИБКИ */}

        </div>
      </form>
      <div className={s.Remove_balance}>
        <ModalContainer typeModalCont = "RequestMoney" />
      </div>
      <div className={s.Referal}>
        <div className={s.Referal_title + " title_config"}>
          <h1>Реферальный код</h1>
          <InfoModal text="texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext" classtwo="infoFuncpop" class="infoFunc"/>
        </div>
        <div className={s.Refferal_input}>
          <Input
            type={"text"}
            className="refferal"
            required
            pattern={"^[0-9]+$"}
            minLength={"2"}
            defaultValue={referral}
          />
          <img alt="" className={s.Referal_img} src={copy} onClick={CopyText}  />
        </div>
      </div>
      <div className={s.History}>
        <div className={s.History_title + " title_config"}>
          <h1>История</h1>
        </div>
        <div className={s.History_content_full}>
          {History}
          <div className={s.Message_button_margin} onClick={ShowClick}>
            <Button
              className={s.Show_more + " " + s.Font_size14}
              type={"submit"}
              class={"btn white"}
              text={"Показать ещё"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Balance;
