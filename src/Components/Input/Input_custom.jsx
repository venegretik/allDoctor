import React from "react";
import s from './.input-validate.module.css';
const ElementCreate = Element => ({ input, meta, ...props }) => {
    const hasErorr = meta.touched && meta.error;
    return (
        <div className={s.InputError}>
            <Element {...props} {...input}  type={props.el_type} checked={input.value ? true : false} className={props.el_type === "text" || props.el_type === "tel" || props.el_type === "email"  ? s.Input : ""} />
            {hasErorr && <span>{meta.error}</span>}
        </div>
    )
}
export default ElementCreate;