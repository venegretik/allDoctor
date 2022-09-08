import React from "react";
import s from "../../Pages/Views/My_Profile/Utility/Utility.module.css";
import SelectModule from "../Select/SelectModule/SelectModule";
import Slide from "../Slide/Slide"
import { useSelector } from "react-redux";
import photo from "../../img/photo.png"
import { useEffect, useState, useRef } from "react";
const UtilityBlock = () => {
    const [Id, setId] = useState("");
    const [VideoId, setVideoId] = useState("");
    const [statusModule, setStatusModule] = useState(false);
    let audioId = localStorage.getItem("audioinputid");
    let videoId = localStorage.getItem("videoinputid");
    let inputElement = useRef(null),
        [videoStatus, setvideoStatus] = useState(""),
        [videoArray, setvideoArray] = useState([]),
        [audioArray, setaudioArray] = useState([]),
        [outputArray, setoutputArray] = useState([]);
    useEffect(() => {
        window.localStreamAudio?.getTracks().forEach((track) => {
            track.stop();
        });
        window.localStreamVideo?.getTracks().forEach((track) => {
            track.stop();
        });
        window.localStreamAudioDisabled?.shutdown();
        //функция создания трека
        Device();
        startWebcam();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Id, VideoId]);

    //получаем id трека из select для того чтобы поменять устройтво
    let deviceAudioId = useSelector(state => state.profile.UtilityAudioId);
    let deviceVideoId = useSelector(state => state.profile.UtilityVideoId);
    useEffect(() => {
        if (deviceAudioId) {
            if (Id !== deviceAudioId) {
                setStatusModule(true)
                setId(deviceAudioId);
            }
            setId(deviceAudioId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deviceAudioId]);
    useEffect(() => {
        if (deviceVideoId) {
            if (VideoId !== deviceVideoId) {
                setStatusModule(true)
                setVideoId(deviceVideoId);
            }
            setId(deviceVideoId);
        }
    }, [deviceVideoId]);
    let Device = async () => {
        navigator.mediaDevices.getUserMedia({
            //audio - если у нас есть девайс айди, пишем его, если нет, вставляем дефолт микро
            audio: { deviceId: { exact: audioId ? audioId : "default" } }
        }).then(async (stream) => {
            window.localStreamAudio = stream;
            const devices = await navigator.mediaDevices.enumerateDevices();
            setvideoArray([...devices.filter(el => el.kind === "videoinput")]);
            setaudioArray([...devices.filter(el => el.kind === "audioinput")]);
            setoutputArray([...devices.filter(el => el.kind === "audiooutput")]);
            let audioContext = new AudioContext();
            let analyser = audioContext.createAnalyser();
            let microphone = audioContext.createMediaStreamSource(stream);
            var javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 1024;
            microphone.connect(analyser);
            analyser.connect(javascriptNode);
            javascriptNode.connect(audioContext.destination);
            //основная проблема с этим кодом, я не знаю как остановить его выполнение, 
            //трек выключаеться, но этот код продолжает работу(это можно увидеть в настройке звука, начинают очень сильно мигать ячейки)
            javascriptNode.onaudioprocess = function () {
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                var values = 0;
                var length = array.length;
                for (let i = 0; i < length; i++) {
                    values += (array[i]);
                }
                var average = values / length;
                colorPids(average);
                if (statusModule) {
                    //вот эта строка заставляет выключиться текущий поток, нам нужно выключить прошлый
                    setStatusModule(false)
                }
            }
            javascriptNode.shutdown =
                function () {
                    this.disconnect();
                    this.onaudioprocess = null;
                };
            window.localStreamAudioDisabled = javascriptNode;

        }).catch((error) => {
            console.log(error);
        });
    }

    //вебка
    let startWebcam = async () => {
        navigator.mediaDevices.getUserMedia({
            video: videoId ? { deviceId: { exact: videoId } } : true
        }).then((stream) => {
            window.localStreamVideo = stream;
            let webcamStream;
            inputElement.current.srcObject = stream;
            inputElement.current.play();
            // eslint-disable-next-line
            webcamStream = stream;
        }).catch((error) => {
            console.log(error);
        });
    }
    let ShowVideo = () => {
        setvideoStatus(true);
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
        <div className={"black_config"}>
            <div className={s.Utility_text}>
                <p>Настройки видео</p>
                <SelectModule array={videoArray} />
            </div>
            <div className={s.Utility_Check_video} >
                <video ref={inputElement} allow="accelerometer; autoplay; encrypted-media; camera 'self';" muted style={videoStatus ? {
                    width: "100%",
                    height: "250px"
                } : { display: "none" }} controls autoPlay />
                {!videoStatus ? <div className={s.Utility_Check_video_content} >
                    <img alt="" src={photo} />
                    <button disabled={videoId ? false : true} onClick={ShowVideo}>Проверить видео</button>
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