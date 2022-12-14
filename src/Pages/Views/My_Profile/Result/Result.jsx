import React from "react";
import s from './Result.module.css';
import download from "../../../../img/download_file.png";
import { Input } from "../../../../Components/Input/Input";
import { axiosProfileResult } from "../../../../base/asyncActions/Profile";
import { useEffect, useState } from "react";
import InfoModal from "../../../../Components/InfoText/InfoModal";
import { useDispatch, useSelector } from "react-redux";
import PDF from "../../../../img/file.png";
import Loader from "../../../../Components/Loading/Loader";
import SelectResult from "../../../../Components/Select/SelectResult/SelectResult";
import { FileUploader } from "react-drag-drop-files";
import FormErrors from "../../../../Components/FormError/FormError";
import Button from "../../../../Components/Button/Button";
import MessageContainer from "../../../../Components/UploadFile/UploadFile";
import { axiosProfileUpload } from "../../../../base/asyncActions/Profile";
import { getConfigHeaderAction } from "../../../../base/Reducers/configReducer";
import "./drop.css"
const FormResult = () => {
    let dispatch = useDispatch();
    let [fileUpload, setFile] = useState("");
    const config = useSelector(state => state.config.config);
    const availableScreenWidth = window.screen.availWidth;
    const UploadFile = useSelector(state => state.profile.UploadFile);
    const handleChangeFile = async (file) => {
        setFile(file)
        console.log(file)
    }
    const handleChange = async (e) => {
        e.preventDefault();
        let obj = {};
        const data = await new FormData(e.target);
        [...data].forEach((e) => {
            obj[e[0]] = e[1];
        });
        if (availableScreenWidth <= 980)
            obj.file = UploadFile
        else
            obj.file = fileUpload;
        let response = await dispatch(axiosProfileUpload(obj));

        if (!response.status) {
            seterrorType(errorType => ({
                error: {
                    fields: {
                        type: response.error?.fields.type ? [...response.error.fields.type] : [],
                        name: response.error?.fields.name ? [...response.error.fields.name] : [],
                        file: response.error?.fields.file ? [...response.error.fields.file] : [],
                    }
                }
            }))
            seterrorMessage(errorMessage => ({
                error: {
                    message: response.error?.message
                }
            }))
        }
        else
            dispatch(axiosProfileResult(1, 0, true));
    };
    let [errorMessage, seterrorMessage] = useState({
        status: false,
        error: {
            message: "",
        },
    });
    let [errorType, seterrorType] = useState({
        status: false,
        error: {
            fields: {
                type: [],
                name: [],
                file: []
            },
        },
    });
    return (
        <form onSubmit={handleChange}>
            <Input name={"name"}
                minLength={'2'}
                required
                type="text" placeholder="???????????????? ??????????????????" />
                <FormErrors error={errorType.error?.fields.name} />
            <div className={s.Form_Radio}>
                <div className={s.Form_Input} style={{}}>
                    <Input id="Register_radio1" value={'0'} type="radio" name={"type"} labeltext={"????????????????????????"} label={{
                        margin: "0px 10px 0px 10px",
                        color: config?.config.colors.color4
                    }} />
                    <InfoModal className={s.Info} text="texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext" classtwo="infoLabpop" class="infoLab" />
                </div>
                <div className={s.Form_Input}>
                    <Input id="Register_radio2" value={'1'} type="radio" name={"type"} labeltext={"????????????????????????????"} label={{
                        margin: "0px 10px 0px 40px",
                        color: config?.config.colors.color4
                    }} />
                    <InfoModal text="texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext" classtwo="infoFuncpop" class="infoFunc" />
                </div>
            </div>
                <FormErrors error={errorType.error?.fields.type} />
            <div className={s.Form_Download}>
                <FileUploader handleChange={handleChangeFile} id={"Upload"} label="?????????????? ?????? ???????????????????? ???????? ????????" name="file" classes="drop_area" />
                <label htmlFor="Upload" className={s.labelDownload}>{!fileUpload ? "?????????????? ?????? ???????????????????? ???????? ????????" : fileUpload.name}</label>
            </div>
                <FormErrors error={errorType.error?.fields.file} />
            <MessageContainer type={"button"} />

            <div className={s.UploadFile}>
                <Button
                    className={s.Font_size14}
                    type={'submit'}
                    class={'btn blue'}
                    text={'?????????????????? ????????'}
                />
            </div>

            <div className={s.Form_Line}></div>
            {/* ?????????????????? ???????????? */}
            <FormErrors error={errorMessage.error.message} />
            {/* ?????????????????? ???????????? */}
        </form>
    )
}

const Result = () => {
    let dispatch = useDispatch();
    let file = useSelector((state) => state.profile.file_history)
    let [statusDoc, setStatus] = useState(false);
    useEffect(() => {
        async function fetchMyAPI() {
            let statusDoctor = await dispatch(axiosProfileResult(1, 0, true));
            setStatus(statusDoctor.status);
            dispatch(getConfigHeaderAction("????????????????????"))
        }
        fetchMyAPI()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let page = useSelector((state) => state.profile.current_page);
    let total_page = useSelector((state) => state.profile.total_page);
    let type_file = useSelector((state) => state.profile.type_file);
    const onClickShow = () => {
        if (page++ > total_page) {

        }
        else
            dispatch(axiosProfileResult(page++, type_file));
    }
    const arraySort = [{
        title: "??????",
        branch_id: "0"
    },
    {
        title: "????????????????????????",
        branch_id: "1"
    },
    {
        title: "????????????????????????????",
        branch_id: "2"
    }]
    let keyNum = 0;
    let file_array = file.map(
        el => <div className={s.Download_File_PDF} key={++keyNum}><div className={s.Download_File_block}>
            <div className={s.Download_File_left}>
                <div className={s.Download_File_left_text}>
                    <div className={s.Download_file_flex}>
                        <img alt="" src={PDF} />
                        <b className={s.Font_size16}>{el.name}</b>
                    </div>
                    <p className={s.Font_size14 + " " + s.gray + " gray_config"}>{new Date(el.datetime).toLocaleString(
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
                <a href={el.file} target="_blank" rel="noreferrer" download>
                    <div className={s.Download_File_right_text + " black_config"}>
                        <img alt="" src={download} />
                        <p className={s.Font_size14}>604????</p>
                    </div>
                </a>
                <p className={s.Font_size14 + " " + s.gray + " gray_config"}>{el.type === 1 ? "????????????????????????" : "????????????????????????????"}</p>
            </div>
        </div>
            <div className={s.Form_Line}></div>
        </div>
    )
    return (
        <div className={s.ResultFull + " black_config"}>
            <div className={s.title + " title_config"} >
                <h1>???????????????????? ????????????????????????</h1>
            </div>
            <div className={s.formDownload}>
                <p className={s.Font_size14 + " " + s.gray + " gray_config"}>?????????????????? ????????????????</p>
                <FormResult />
            </div>
            <div className={s.Download_File}>
                <SelectResult array={arraySort} />
                <div className={s.Download_File_full}>
                    <div className={s.Form_Line}></div>
                    {statusDoc ? file_array : <Loader />}
                    <div className={s.Message_button_margin} onClick={onClickShow}>
                        <Button
                            className={s.Show_more + " " + s.Font_size14}
                            type={'submit'}
                            class={'btn white'}
                            text={'???????????????? ??????'}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Result;