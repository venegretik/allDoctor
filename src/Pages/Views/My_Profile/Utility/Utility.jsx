import React from "react";
import s from "./Utility.module.css";
import UtilityBlock from "../../../../Components/UtilityBlock/UtilityBlock";
import "./Sound.css";
const Utility = () => {
  
  return (
    <div className={s.Utility_full}>
      <div className={s.Utility_title}>
        <h1 className="title_config">Проверка оборудования</h1>
      </div>
      <UtilityBlock/>
    </div>
  );
};
export default Utility;
