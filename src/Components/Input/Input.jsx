import React from 'react';
import './Input.css'
import InputMask from 'react-input-mask'
export const InpMask = (props) => {
  return (
    <InputMask mask='+7 (999) 999-99-99' onChange={props.onChange} value={props.value} {...props} />
  );
};
export const InpDateMask = (props) => {
  return <InputMask mask='99-99-9999' onChange={props.onChange} value={props.value} {...props}/>

};
export const Input = (props) => {
  return (
    <label style={props.label}>
      <input {...props} />
      {props.labeltext}
    </label>
  );
};
