import React from "react";
import s from './Result.module.css';
import download from "../../../../img/download_file.png";
import { Link } from "react-router-dom";
import { Input } from "../../../../Components/Input/Input";
import { axiosProfileResult } from "../../../../base/asyncActions/Profile";
import { useEffect, useState } from "react";
import InfoModal from "../../../../Components/InfoText/InfoModal";
import { useDispatch, useSelector } from "react-redux";
import PDF from "../../../../img/file.png";
import SelectResult from "../../../../Components/Select/SelectResult/SelectResult";
import { FileUploader } from "react-drag-drop-files";
import FormErrors from "../../../../Components/FormError/FormError";
import Button from "../../../../Components/Button/Button";
import MessageContainer from "../../../../Components/UploadFile/UploadFile";
import { axiosProfileUpload } from "../../../../base/asyncActions/Profile";
import { getConfigHeaderAction} from "../../../../base/Reducers/configReducer";
import "./drop.css"
const FormResult = () => {
    let dispatch = useDispatch();
    const [Showtext, setShowText] = useState("");
    const [radioValue, setRadioValue] = useState(null);
    let [submit, setsubmit] = useState(null);
    const config = useSelector(state => state.config.config);
    const handleChange = async (file) => {
        if (radioValue && Showtext.length > 4) {
            let obj = {};
            obj.file = file;
            obj.name = Showtext;
            obj.type = radioValue;
            let response = await dispatch(axiosProfileUpload(obj));
            setsubmit(obj)
            if (!response.status) {
                seterrorMessage(errorMessage => ({
                    error: {
                        message: response.error?.message
                    }
                }))
            }
        }
        else {
            alert('Заполните все поля');
        }
    };
    const onChangeInput = async (e) => {
        setShowText(e.target.value);
    }
    const onChangeRadio = async (e) => {
        setRadioValue(e.target.value);
    }
    let [errorMessage, seterrorMessage] = useState({
        status: false,
        error: {
            message: "",
        },
    });
    return (
        <form>
            <Input name={"name"}
                minLength={'2'}
                pattern={'^[А-Яа-яЁё]+$'}
                required
                value={Showtext}
                onChange={onChangeInput}
                type="text" placeholder="Название документа" />
            <div className={s.Form_Radio}>
                <div className={s.Form_Input} style={{}}>
                    <Input id="Register_radio1" value={'0'} type="radio" name={"type"} onChange={onChangeRadio} labeltext={"Лабороторные"} label={{
                        margin: "0px 10px 0px 10px",
                        color: config?.config.colors.color4
                    }} />
                    <InfoModal className={s.Info} text="texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext" classtwo="infoLabpop" class="infoLab"/>
                </div>
                <div className={s.Form_Input}>
                    <Input id="Register_radio2" value={'1'} type="radio" name={"type"} onChange={onChangeRadio} labeltext={"Функциональные"} label={{
                        margin: "0px 10px 0px 40px",
                        color: config?.config.colors.color4
                    }} />
                    <InfoModal text="texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext" classtwo="infoFuncpop" class="infoFunc" />
                </div>
            </div>
            <div className={s.Form_Download}>
                <FileUploader handleChange={handleChange} label="Нажмите или перетащите сюда файл" name="file" classes="drop_area" />
            </div>
            <MessageContainer data={submit} type={"button"} />
            <div className={s.Form_Line}></div>
            {/* КОМПОНЕНТ ОШИБКИ */}
            <FormErrors error={errorMessage.error.message} />
            {/* КОМПОНЕНТ ОШИБКИ */}
        </form>
    )
}

const Result = () => {
    let dispatch = useDispatch();
    const config = useSelector(state => state.config.config);
    let file = useSelector((state) => state.profile.file_history)
    useEffect(() => {

        if (!file[0])
            dispatch(axiosProfileResult());
            dispatch(getConfigHeaderAction("Результаты"))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);
    let page = useSelector((state) => state.profile.current_page);
    let total_page = useSelector((state) => state.profile.total_page);
    const onClickShow = () => {
        if (page++ > total_page) {

        }
        else
            dispatch(axiosProfileResult(page++));
    }
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
    let keyNum = 0;
    let file_array = file.map(
        el => <div className={s.Download_File_PDF}><div key={++keyNum} className={s.Download_File_block}>
            <div className={s.Download_File_left}>
                <img src={file} alt="" />
                <div className={s.Download_File_left_text}>
                    <div className={s.Download_file_flex}>
                        <img src={PDF} alt="" />
                        <b className={s.Font_size16}>{el.name}</b>
                    </div>
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
                <Link to={el.file} target="_blank" download>
                    <div className={s.Download_File_right_text} style={{ color: config?.config.colors.color2 }}>
                        <img src={download} alt="" />
                        <p className={s.Font_size14}>604КВ</p>
                    </div>
                </Link>
                <p className={s.Font_size14 + " " + s.gray} style={{ color: config?.config.colors.color4 }}>{el.type === 1 ? "лабораторные" : "функциональные"}</p>
            </div>
        </div>
            <div className={s.Form_Line}></div>
        </div>
    )
    return (
        <div className={s.ResultFull} style={{ color: config?.config.colors.color2 }}>
            <div className={s.title} >
                <h1>Результаты исследований</h1>
            </div>
            <div className={s.formDownload}>
                <p className={s.Font_size14 + " " + s.gray} style={{ color: config?.config.colors.color4 }}>Загрузить документ</p>
                <FormResult />
            </div>
            <div className={s.Download_File}>
                <SelectResult array={arraySort} />
                <div className={s.Download_File_full}>
                    <div className={s.Form_Line}></div>
                    {file_array}
                    <div className={s.Message_button_margin} onClick={onClickShow}>
                        <Button
                            className={s.Show_more + " " + s.Font_size14}
                            type={'submit'}
                            class={'btn white'}
                            text={'Показать ещё'}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Result;