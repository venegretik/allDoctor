import React from "react";
import './Button.css';
import { useState } from "react";
import { useSelector } from "react-redux";
const Button = (props) => {
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };
   const config = useSelector((state) => state.config.config);

   const styleBlue = {
    backgroundColor: !isHover ? config?.config.colors.color10 : config?.config.colors.color12,
    color: config?.config.colors.color1
   };
   const styleOrange = {
    backgroundColor: !isHover ? config?.config.colors.color7 : config?.config.colors.color13,
    color: config?.config.colors.color2
   };
   const styleWhite = {
    backgroundColor: !isHover ? config?.config.colors.color1 : config?.config.colors.color11,
    color: config?.config.colors.color4,
    border: `1px solid ${config?.config.colors.color6}`
   };
    return (
            <button type={props.type} className={props.class}  
            style={props.class === "btn blue" ? styleBlue : props.class === "btn orange" ? styleOrange : props.class === "btn white" ? styleWhite : {}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              {props.text}
            </button>
    )
}
export default Button;