import React from 'react';
import './Input.css'
import InputMask from 'react-input-mask'


export const InputPhone = (props) => {
  return (
    <InputMask mask="+7 (999) 999-99-99" onChange={props.onChange} value={props.value} {...props}/>
  );
};
export const Input = (props) => {
  return (
    <input {...props}/>
  );
};