import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {axiosRegister} from "../../base/asyncActions/RegistrPost";
import style from "../../Pages/Views/Register/register.module.css";
import {Input} from "../Input/Input";
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import {Navigate} from "react-router";

const RegisterForm = () => {
  const dispatch = useDispatch()
  const date = new Date().toISOString().split('T')[0]
  const [response, setResponse] = useState(false)
  const sendForm = async (e) => {
    e.preventDefault()
    const data = await new FormData(e.target)
    setResponse(await dispatch(axiosRegister(data)))
  }

  return (
    <form className={style.form_body} onSubmit={(e) => sendForm(e)}>
      {response ? <Navigate to={'/main'}/> : false}
      <Input required
             labeltext={'Ваше имя'}
             label={{display: 'flex', flexDirection: 'column-reverse', gap: '10px'}}
             minLength={'2'}
             pattern={'^[А-Яа-яЁё\s]+$'}
             placeholder={'Имя'}
             type={'text'}
             name={'firstname'}/>
      <Input required
             labeltext={'Ваша фамилия'}
             label={{display: 'flex', flexDirection: 'column-reverse', gap: '10px'}}
             minLength={'2'}
             pattern={'^[А-Яа-яЁё\s]+$'}
             placeholder={'Фамилия'}
             type={'text'}
             name={'lastname'}/>
      <Input required
             labeltext={'Ваше отчество'}
             label={{display: 'flex', flexDirection: 'column-reverse', gap: '10px'}}
             minLength={'2'}
             pattern={'^[А-Яа-яЁё\s]+$'}
             placeholder={'Отчество'}
             type={'text'}
             name={'secondname'}/>
      <div className={style.radio_block}>
        <p>Пол</p>
        <Input type={'radio'}
               required
               name={'gender'}
               labeltext={'Мужчина'}
               value={'0'}/>

        <Input type={'radio'}
               required
               name={'gender'}
               labeltext={'Женщина'}
               value={'1'}/>
      </div>
      <Input required
             labeltext={'Дата рождения'}
             label={{display: 'flex', flexDirection: 'column-reverse', gap: '10px'}}
             type={'date'}
             max={date}
             name={'birthday'}/>
      <Input required
             labeltext={'Ваша почта'}
             label={{display: 'flex', flexDirection: 'column-reverse', gap: '10px'}}
             placeholder={'Электронная почта'}
             type={'email'}
             name={'email'}/>
      <div className={style.policyBlock}>
        <Input required
               label={{width: 'fit-content'}}
               type={'checkbox'}
               name={'policy'}
        />

        <p className={style.policy}>Я принимаю <Link className={style.policyLink} to={'#'}>условия пользовательского
          соглашения</Link> и даю своё согласие на <Link className={style.policyLink} to={'#'}>обработку
          персональных данных</Link>
        </p>
      </div>

      <Button
        type={'submit'}
        class={'btn blue'}
        text={'готово'}
      />
    </form>
  );
};

export {RegisterForm};