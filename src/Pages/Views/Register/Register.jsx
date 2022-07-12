import React from "react";
import style from "./register.module.css";
import { Navigate } from "react-router-dom";
import { RegisterForm } from "../../../Components/Forms/RegisterForm";
import { useEffect } from "react";
import { useState } from "react";

const Register = () => {
  const newUser = localStorage.getItem("isNewUser");
  return (
    <div className={"Container"}>
      {newUser == "false" ? <Navigate to={"/main"} /> : false}
      <div className={style.form_container}>
        <h1 className={style.title}>
          Завершите регистрацию, чтобы получить доступ к услугам
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export { Register };
