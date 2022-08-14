import React from "react";
import style from "./register.module.css";
import { Navigate } from "react-router-dom";
import { RegisterForm } from "../../../Components/Forms/RegisterForm";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Register = () => {
  const newUser = localStorage.getItem("isNewUser");
  const config = useSelector((state) => state.config.config);
  return (
    <div className={"Container"}>
      {newUser == "false" ? <Navigate to={"/main"} /> : false}
      <div className={style.form_container}>
        <h1 className={style.title} style={{color: config?.config.colors.color2}}>
          Завершите регистрацию, чтобы получить доступ к услугам
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export { Register };
