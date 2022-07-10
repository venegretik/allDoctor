import React from "react";
import s from './.input-validate.module.css';
const ElementCreate = Element => ({ input, meta, ...props }) => {
    console.log(input)
    console.log(meta)
    console.log(props)
    return (
            <Element {...props} {...input} type={props.el_type} className={props.el_type === "input" ? s.Input : ""} />
    )
}
export default ElementCreate;