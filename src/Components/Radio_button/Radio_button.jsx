import React from "react";
import './Radio.css';
const Radio_button = (props) => {
    return (
        <div className="Radio">
            <input type="radio" id={props.el_id} name="radio-group"  />
            <label htmlFor={props.el_id}>Apple</label>
        </div>
    )
}
export default Radio_button