import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./SliderApp.module.css"
import "swiper/css";
import "swiper/css/pagination";
import "../SliderDots/SliderDots.css";
import { Pagination } from "swiper";
import { getSlider } from "../../../base/asyncActions/getMainPageInfo";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loading/Loader";

const SliderApp = () => {
    const [Slider, setSlider] = useState([]),
        config = useSelector((state) => state.config.config),
        dispatch = useDispatch(),
        SliderInfo = async () => {
            setSlider(config?.module.welcome_screen.screen);
        };

    useEffect(() => {
        SliderInfo();
    }, []);
    return (
        <section style={{ marginBottom: "70px" }}>
            {!Slider ? (
                <Loader />
            ) : (
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                >
                    {Slider.map((el, key) => (
                        <SwiperSlide
                            key={key}
                            style={{
                                backgroundColor: "#407BFF",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div>
                                <div className={s.SliderText}>
                                    <h1>{el.title}</h1>
                                    <p>{el.description}</p>
                                </div>
                                <img src={el.image} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
};

export default SliderApp;
