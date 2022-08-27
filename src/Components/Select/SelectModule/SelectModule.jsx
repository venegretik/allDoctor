import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProfileUtilityAudioAction } from "../../../base/Reducers/UserReducer";
import arrow from "../../../img/arrow.png";
import "../Select.css";
const SelectModule = (props) => {
    const [isShown, setIsShown] = useState(false);
    const config = useSelector((state) => state.config.config);
    const [Showtext, setShowText] = useState("Не найдено");
    let deviceAudioId = useSelector(state => state.profile.UtilityAudioId);
    const handleClick = (event) => {
        setIsShown((current) => !current);
    };
    let dispatch = useDispatch();
    const handleClickChange = (changeEvent) => {
        setShowText(changeEvent.target.title);
        localStorage.setItem(props.array[0].kind, changeEvent.target.title);
        let audioInput = props.array.filter(el => el.kind == "audioinput")
        if (audioInput[0]) {
            dispatch(ProfileUtilityAudioAction(changeEvent.target.id));
            localStorage.setItem(props.array[0].kind + "id", changeEvent.target.id);
        }

    }
    useEffect(() => {
        dispatch(ProfileUtilityAudioAction(deviceAudioId));
    }, [deviceAudioId]);
    useEffect(() => {
        if (props.array[0]) {
            let range = localStorage.getItem(props.array[0].kind);
            // eslint-disable-next-line
            if(!range){
                if (props.array[0].label !== "" && Showtext === "Не найдено") {
                    setShowText(props.array[0].label);
                }
            }
            else
            setShowText(range);
        }
    }, [props.array]);
    let arrayItems = props.array.map(el =>
        <label htmlFor={el.deviceId} key={el.deviceId}>
            <input type="radio" name="main-categories" title={el.label} id={el.deviceId} value={el.deviceId} onChange={handleClickChange} />
            {el.label}
        </label>)
    return (
        <div id="Select-hide1" onClick={handleClick}>
            <div className="Select_content">
                <p style={{
                    border: ` 1px solid ${config?.config.colors.color6}`,
                    color: config?.config.colors.color2
                }}>{Showtext}</p>
                <img src={arrow} className={isShown ? "Rotate_img" : ""} alt="" />
            </div>
            {isShown && (
                <div id="Select-menu" >
                    {props.array[0] ? arrayItems : ""}
                </div>
            )}
        </div>
    )
}
export default SelectModule;