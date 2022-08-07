import React from "react";
import s from "./Utility.module.css";
import Select_custom from "../../../../Components/Select/Select";
import Slide from "../../../../Components/Slide/Slide";
import photo from "../../../../img/photo.png"
const Utility = () => {
  return (
    <div className={s.Utility_full}>
      <div className={s.Utility_title}>
        <h1>Проверка оборудования</h1>
      </div>
      <div className={s.Utility_text}>
        <p>Настройки видео</p>
        <Select_custom />
      </div>
      <div className={s.Utility_Check_video}>
        <div className={s.Utility_Check_video_content}>
          <img src={photo} alt="" />
          <button>Проверить видео</button>
        </div>
      </div>
      <div className={s.Utility_configuration_full}>
        <p className={s.check_volume}>Настройки звука</p>
        <div className={s.Utility_configuration}>
          <div className={s.Utility_configuration_video}>
            <p>Устройство ввода</p>
            <Select_custom />
            <Slide />
          </div>
          <div className={s.Utility_configuration_volume}>
            <p>Устройство вывода</p>
            <Select_custom />
            <Slide />
          </div>
        </div>
      </div>
      <div className={s.Utility_volume}>
        <p>Проверка микрофона</p>
        <div className={s.Utility_items}>
            <div className={s.Utility_item_active}></div>
            <div className={s.Utility_item_active}></div>
            <div className={s.Utility_item_active}></div>
            <div className={s.Utility_item_active}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
            <div className={s.Utility_item_unactive}></div>
        </div>
      </div>
    </div>
  );
};
export default Utility;
