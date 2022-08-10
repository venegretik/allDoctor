import React from "react";
import s from "./Change_login.module.css";
import Button from "../../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { axiosProfileEmailEdit } from "../../../base/asyncActions/Profile";
import { Input } from "../../Input/Input";
import { InpMask } from "../../Input/Input";
const ChangeLogin = (props) => {
  let [Modal, setModal] = useState(false),
    [isShown, setIsShown] = useState(1),
    dispatch = useDispatch(),
    showFunc = () => {
      setModal(true);
      setIsShown(1);
    }
  const sendForm = async (e) => {
    e.preventDefault();
    const data = await new FormData(e.target);
    let obj = {};
    [...data].forEach((e) => {
      obj[e[0]] = e[1];
    });

    if (isShown === 3) {
      dispatch(axiosProfileEmailEdit());
      setIsShown(++isShown);
    }
    if (isShown === 2) {
      dispatch(axiosProfileEmailEdit(obj.code));
      setIsShown(++isShown);
    }
    if (isShown === 1) {
      dispatch(axiosProfileEmailEdit());
      setIsShown(++isShown);
    }

  };
  return (
    <div>
      <p
        onClick={() => showFunc()}
        className={s.Profile_replace_tel_link + " " + s.Font_size14}
      >
        Изменить
      </p>
      {Modal ? <div className={s.ChangeLoginFull}>
        <div className={s.ChangeLogin}>
          <div className={s.ChangeLoginTitle}>
            <h1 className={s.Font_size24}>{props.type_el == "phone" ? "Изменить телефон" : "Изменить email"}</h1>
          </div>
          <div className={s.ChangeLoginMain}>

            {isShown === 1 ? (
              <form onSubmit={(e) => { sendForm(e) }}>
                <div className={s.ChangeLoginMain_step1}>
                  <p className={s.Font_size14}>
                    Мы отправим код подтверждения на ваш текущий номер +7 999 156 46 75
                  </p>
                  <div className={s.ChangeLoginButton}>
                    <div className={s.ChangeMargin}>
                      <Button
                        text={"Получить код"}
                        class="blue btn"
                        type="submit"
                      />
                    </div>
                    <div onClick={e => setModal(false)}>
                      <Button text="отмена" class="btn white" />
                    </div>
                  </div>
                </div>
              </form>
            ) : isShown === 2 ? (
              <form>
                <div className={s.ChangeLoginMain_step2}>
                  <Input pattern={'[0-9]{4}'} required placeholder={'Код из SMS'} type={'text'} className={'input'}
                    maxLength={4} name="code" />
                  <p className={s.Font_size14}>Отправить другой код через 00:46</p>
                  <div className={s.ChangeLoginButton} >
                    <div className={s.ChangeMargin}>
                      <Button
                        text={"Подтвердить"}
                        class="blue btn"
                        type="submit"
                      />
                    </div>
                    <div onClick={e => setModal(false)}>
                      <Button text="отмена" class="btn white" />
                    </div>
                  </div>
                </div>
              </form>
            ) : isShown === 3 ? (
              <form>
                <div className={s.ChangeLoginMain_step3}>
                  {props.type_el == "phone" ? <InpMask pattern={'[+][7]\\s[(][0-9]{3}[)]\\s[0-9]{3}-[0-9]{2}-[0-9]{2}'} required
                    placeholder={'Номер телефона'} type={'tel'} className={'input'} /> : <Input required
                      placeholder={'Электронная почта'}
                      type={'email'}
                      name={'email'} />}
                  <div className={s.ChangeLoginButton} >
                    <div className={s.ChangeMargin}>
                      <Button
                        text={"Изменить"}
                        class="blue btn"
                        type="submit"
                      />
                    </div>
                    <div onClick={e => setModal(false)}>
                      <Button text="отмена" class="btn white" />
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              ""
            )}
          </div>

        </div>
      </div> : ""}
    </div>
  );
};
export default ChangeLogin;
