import React from "react";
import './Select.css';
const Select_custom = (props) => {
    return (
        <div id="Select-hide">
            <h1>Select</h1>
            <div id="Select-menu">
                <input type="radio" name="main-categories" id="_1234" value="1234" />
                <input type="radio" name="main-categories" id="_2345" value="2345" />
                <input type="radio" name="main-categories" id="_3456" value="3456" />
                <input type="radio" name="main-categories" id="_4567" value="4567" />
            </div>
        </div>
    )
}
export default Select_custom;