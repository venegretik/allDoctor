import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosRegister } from "../../base/asyncActions/RegistrPost";
import style from "../../Pages/Views/Register/register.module.css";
import { Input, InpDateMask } from "../Input/Input";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import FormErrors from "../FormError/FormError";
import { Navigate } from "react-router";

const RegisterForm = () => {
  const dispatch = useDispatch();
  let [errorType, seterrorType] = useState({
    status: false,
    error: {
      fields: {
        firstname: [],
        lastname: [],
        secondname: [],
        birthday: [],
        email:[]
      },
    },
  });
  let [errorMessage, seterrorMessage] = useState({
    status: false,
    error: {
      message: "",
    },
  });
  const [response, setResponse] = useState(false);
  const sendForm = async (e) => {
    e.preventDefault();
    const data = await new FormData(e.target);
    let status = await dispatch(axiosRegister(data))
    if(status.status){
      setResponse(status.status);
    }
    else {
      seterrorType(errorType => ({
        error: {
          fields: {
            firstname: status.error?.fields.firstname ? [...status.error.fields.firstname] : [],
            lastname: status.error?.fields.lastname ? [...status.error.fields.lastname] : [],
            secondname: status.error?.fields.secondname ? [...status.error.fields.secondname] : [],
            birthday: status.error?.fields.birthday ? [...status.error.fields.birthday] : [],
            email: status.error?.fields.email ? [...status.error.fields.email] : []
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

  return (
    <form className={style.form_body} onSubmit={(e) => sendForm(e)}>
      {response ? <Navigate to={"/main"} /> : false}
      <Input
        required
        minLength={"2"}
        pattern={"^[A-Za-z??-????-??????\\s]+$"}
        placeholder={"??????"}
        type={"text"}
        name={"firstname"}
      />
      <FormErrors error={errorType.error?.fields.firstname} />
      <Input
        required
        minLength={"2"}
        pattern={"^[A-Za-z??-????-??????\\s]+$"}
        placeholder={"??????????????"}
        type={"text"}
        name={"lastname"}
      />
      <FormErrors error={errorType.error?.fields.lastname} />
      <Input
        required
        minLength={"2"}
        pattern={"^[A-Za-z??-????-??????\\s]+$"}
        placeholder={"????????????????"}
        type={"text"}
        name={"secondname"}
      />
      <FormErrors error={errorType.error?.fields.secondname} />
      <div className={style.radio_block}>
        <p>??????</p>
        <Input
          type={"radio"}
          required
          labeltext={"??????????????"}
          name={"gender"}
          value={"0"}
        />

        <Input
          type={"radio"}
          required
          labeltext={"??????????????"}
          name={"gender"}
          value={"1"}
        />
      </div>
      <InpDateMask
        required
        type={"text"}
        placeholder={"???????? ????????????????"}
        name={"birthday"}
      />
      <FormErrors error={errorType.error?.fields.birthday} />
      <Input
        required
        placeholder={"?????????????????????? ??????????"}
        type={"email"}
        name={"email"}
      />
      <FormErrors error={errorType.error?.fields.email} />
      <div className={style.policyBlock}>
        <Input
          required
          type={"checkbox"}
          label={{
            width: "10px",
          }}
          value={true}
          name={"policy"}
        />

        <p className={style.policy}>
          ?? ????????????????{" "}
          <Link className={style.policyLink} to={"../private/user"}>
            ?????????????? ?????????????????????????????????? ????????????????????
          </Link>{" "}
          ?? ?????? ???????? ???????????????? ????{" "}
          <Link className={style.policyLink} to={"../private/perosnal"}>
            ?????????????????? ???????????????????????? ????????????
          </Link>
        </p>
      </div>

      <Button type={"submit"} class={"btn blue"} text={"????????????"} />
        <FormErrors error={errorMessage?.error.message} />
    </form>
  );
};

export { RegisterForm };
