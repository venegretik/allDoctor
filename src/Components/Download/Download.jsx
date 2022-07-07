import s from "./Download.module.jsx";
import React from "react";
const Download = () => {
    return (
        <div className={s.Download_file}>
            <div className={s.Download_img}>
                <img src="" alt="" />
            </div>
            <div className={s.Download_text}>
                <p className={s.Font_size14}>Скачать заключение врача</p>
            </div>
        </div>
    )
}
export default Download;