import React from "react";
import s from "../../Pages/Views/My_Profile/Utility/Utility.module.css";
import SelectModule from "../Select/SelectModule/SelectModule";
import Slide from "../Slide/Slide"
import photo from "../../img/photo.png"
import { useEffect, useState, useRef } from "react";
const UtilityBlock = () => {
    
    useEffect(() => {
        Device();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let Device = async () => {
        const devices = await navigator.mediaDevices.enumerateDevices()
        setvideoArray([...devices.filter(el => el.kind === "videoinput")]);
        setaudioArray([...devices.filter(el => el.kind === "audioinput")]);
        setoutputArray([...devices.filter(el => el.kind === "audiooutput")]);
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        }).then((stream) => {
            let audioContext = new AudioContext();
            let analyser = audioContext.createAnalyser();
            let microphone = audioContext.createMediaStreamSource(stream);
            let javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 1024;
            microphone.connect(analyser);
            analyser.connect(javascriptNode);
            javascriptNode.connect(audioContext.destination);
            javascriptNode.onaudioprocess = function () {
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                var values = 0;

                var length = array.length;
                for (var i = 0; i < length; i++) {
                    values += (array[i]);
                }

                var average = values / length;
                colorPids(average);
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    let inputElement = useRef(null);
    let [videoStatus, setvideoStatus] = useState("");
    let [videoArray, setvideoArray] = useState([]);
    let [audioArray, setaudioArray] = useState([]);
    let [outputArray, setoutputArray] = useState([]);
    async function startWebcam() {
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        }).then((stream) => {
            let webcamStream;
            inputElement.current.srcObject = stream;
            inputElement.current.play();
            setvideoStatus(true);
            // eslint-disable-next-line
            webcamStream = stream;
            

        }).catch((error) => {
            console.log(error);
        });
    }

    function colorPids(vol) {
        let all_pids = [...document.querySelectorAll('.pid')];
        let amout_of_pids = Math.round(vol / 10);
        let elem_range = all_pids.slice(0, amout_of_pids)
        for (let i = 0; i < all_pids.length; i++) {
            all_pids[i].style.backgroundColor = "#e6e7e8";
        }
        for (let i = 0; i < elem_range.length; i++) {

            // console.log(elem_range[i]);
            elem_range[i].style.backgroundColor = "#407BFF";
        }
    }
    return (
        <div>
            <div className={s.Utility_text}>
                <p>Настройки видео</p>
                <SelectModule array={videoArray} />
            </div>
            <div className={s.Utility_Check_video} >
                <video ref={inputElement} muted style={videoStatus ? {
                    width: "100%",
                    height: "250px"
                } : { display: "none" }} controls autoPlay />
                {!videoStatus ? <div className={s.Utility_Check_video_content} >
                    <img src={photo} alt="" />
                    <button onClick={startWebcam}>Проверить видео</button>
                </div> : ""}

            </div>
            <div className={s.Utility_configuration_full}>
                <p className={s.check_volume}>Настройки звука</p>
                <div className={s.Utility_configuration}>
                    <div className={s.Utility_configuration_video}>
                        <p>Устройство ввода</p>
                        <SelectModule array={audioArray} />
                        <Slide />
                    </div>
                    <div className={s.Utility_configuration_volume}>
                        <p>Устройство вывода</p>
                        <SelectModule array={outputArray} />
                        <Slide />
                    </div>
                </div>
            </div>
            <div className={s.Utility_volume}>
                <p>Проверка микрофона</p>
                <div className="pids-wrapper">
                    <div className="pid"></div>
                    <div className="pid"></div>
                    <div className="pid"></div>
                    <div className="pid"></div>
                    <div className="pid"></div>
                    <div className="pid"></div>
                    <div className="pid"></div>
                    <div className="pid"></div>
                    <div className="pid"></div>
                    <div className="pid"></div>
                </div>
            </div>
        </div>
    )
}
export default UtilityBlock;