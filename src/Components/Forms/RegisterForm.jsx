import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosRegister } from "../../base/asyncActions/RegistrPost";
import style from "../../Pages/Views/Register/register.module.css";
import { Input } from "../Input/Input";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Navigate } from "react-router";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const date = new Date().toISOString().split("T")[0];
  const [response, setResponse] = useState(false);
  const sendForm = async (e) => {
    e.preventDefault();
    const data = await new FormData(e.target);
    setResponse(await dispatch(axiosRegister(data)));
  };

  return (
    <form className={style.form_body} onSubmit={(e) => sendForm(e)}>
      {response ? <Navigate to={"/main"} /> : false}
      <Input
        required
        minLength={"2"}
        pattern={"^[А-Яа-яЁёs]+$"}
        placeholder={"Имя"}
        type={"text"}
        name={"firstname"}
      />
      <Input
        required
        minLength={"2"}
        pattern={"^[А-Яа-яЁёs]+$"}
        placeholder={"Фамилия"}
        type={"text"}
        name={"lastname"}
      />
      <Input
        required
        minLength={"2"}
        pattern={"^[А-Яа-яЁёs]+$"}
        placeholder={"Отчество"}
        type={"text"}
        name={"secondname"}
      />
      <div className={style.radio_block}>
        <p>Пол</p>
        <Input
          type={"radio"}
          required
          labeltext={"Мужчина"}
          name={"gender"}
          value={"0"}
        />

        <Input
          type={"radio"}
          required
          labeltext={"Женщина"}
          name={"gender"}
          value={"1"}
        />
      </div>
      <Input
        required
        type={"date"}
        label={{
          display: "flex",
          flexDirection: "column-reverse",
          gap: "10px",
        }}
        max={date}
        name={"birthday"}
      />
      <Input
        required
        placeholder={"Электронная почта"}
        type={"email"}
        name={"email"}
      />
      <div className={style.policyBlock}>
        <Input
          required
          type={"checkbox"}
          label={{
            width: "10px",
          }}
          name={"policy"}
        />

        <p className={style.policy}>
          Я принимаю{" "}
          <Link className={style.policyLink} to={"../private/user"}>
            условия пользовательского соглашения
          </Link>{" "}
          и даю своё согласие на{" "}
          <Link className={style.policyLink} to={"../private/perosnal"}>
            обработку персональных данных
          </Link>
        </p>
      </div>

      <Button type={"submit"} class={"btn blue"} text={"готово"} />
    </form>
  );
};

export { RegisterForm };
