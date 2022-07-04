import React from "react";
import s from './.input-validate.module.css';
const ElementCreate = Element => ({input, meta, ...props}) => {
    const hasErorr = meta.touched && meta.error;
    return(
        <div>
            <Element {...props} {...input} className={hasErorr ? s.error : ""}/>
            {hasErorr && <span>{meta.error}</span>}
        </div>        
    )
}
export default ElementCreate;