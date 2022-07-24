import React from "react";
import s from './Result.module.css';
import { reduxForm } from "redux-form";
import file from "../../../../img/file.png";
import download from "../../../../img/download_file.png";
import { Input } from "../../../../Components/Input/Input";
import { axiosProfileResult } from "../../../../base/asyncActions/Profile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectResult from "../../../../Components/Select/SelectResult/SelectResult";
import { FileUploader } from "react-drag-drop-files";
import { axiosProfileUpload } from "../../../../base/asyncActions/Profile";
const Form_Result = () => {
    let dispatch = useDispatch();
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
    const sendForm = async (e) => {
        e.preventDefault()
        const data = await new FormData(e.target);
        let obj = {};
        [...data].forEach(e => { obj[e[0]] = e[1] });
        obj.file = file;
        dispatch(axiosProfileUpload(obj))
    }
    return (
        <form onChange={sendForm}>
            <Input name={"name"}
             minLength={'2'}
             pattern={'^[А-Яа-яЁё\s]+$'}
             type="text" placeholder="Название документа" />
            <div className={s.Form_Radio}>
                <Input id="Register_radio1" value={'0'} type="radio" name={"type"} />
                <label htmlFor="Register_radio1" className={s.gray + " " + s.Register_radio2}>Лабороторные</label>
                <Input id="Register_radio2" value={'1'} type="radio" name={"type"} />
                <label htmlFor="Register_radio2" className={s.gray + " " + s.Register_radio2}>Функциональные</label>
            </div>
            <div className={s.Form_Download}>
                <FileUploader  handleChange={handleChange} label="Нажмите или перетащите сюда файл" name="file" types={fileTypes} />
            </div>
            <button>выбрать файл</button>
            <div className={s.Form_Line}></div>
        </form>
    )
}

const Result = () => {
    let dispatch = useDispatch();
    const arraySort = [{
        title: "Все",
        branch_id: "0"
    },
    {
        title: "Лабораторные",
        branch_id: "1"
    },
    {
        title: "Функциональные",
        branch_id: "2"
    }]
    let file = useSelector((state) => state.profile.file_history)
    useEffect(() => {
        dispatch(axiosProfileResult());
    }, []);
    let file_array = file.map(
        el => <div className={s.Download_File_block}>
            <div className={s.Download_File_left}>
                <img src={file} alt="" />
                <div className={s.Download_File_left_text}>
                    <p className={s.Font_size16}>{el.name}</p>
                    <p className={s.Font_size14 + " " + s.gray}>{new Date(el.datetime).toLocaleString(
                        "ru",
                        {
                            month: "short",
                            year: "numeric",
                            day: "numeric",
                        }
                    )}</p>
                </div>
            </div>
            <div className={s.Download_File_right}>
                <div className={s.Download_File_right_text}>
                    <img src={download} alt="" />
                    <p className={s.Font_size14}>604КВ</p>
                </div>
                <p className={s.Font_size14 + " " + s.gray}>{el.type == 1 ? "лабораторные" : "функциональные"}</p>
            </div>
        </div>
    )
    return (
        <div className={s.ResultFull}>
            <div className={s.title}>
                <h1>Результаты исследований</h1>
            </div>
            <div className={s.formDownload}>
                <p className={s.Font_size14 + " " + s.gray}>Загрузить документ</p>
                <Form_Result />
            </div>
            <div className={s.Download_File}>
                <SelectResult array={arraySort} />
                <div className={s.Download_File_full}>
                    <div className={s.Form_Line}></div>
                    {file_array}
                </div>
                <div className={s.Form_Line}></div>
            </div>
        </div>
    )
}
export default Result;