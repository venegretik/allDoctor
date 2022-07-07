import React from "react";
import './Radio.css';
const Radio_button = (props) => {
    return (
        <div className="Radio">
            <input type="radio" id="Register_radio1" name="radio-group" checked />
            <label htmlFor="Register_radio1">{props.text}</label>
        </div>
    )
}
export default Radio_button