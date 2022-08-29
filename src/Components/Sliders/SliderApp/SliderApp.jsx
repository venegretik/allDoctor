import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./SliderApp.module.css"
import "swiper/css";
import "swiper/css/pagination";
import "../SliderDots/SliderDots.css";
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import Loader from "../../Loading/Loader";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
const SliderApp = () => {
    const [Slider, setSlider] = useState([]),
        config = useSelector((state) => state.config.config),
        SliderInfo = async () => {
            setSlider(config?.module.welcome_screen.screen);
        };

    useEffect(() => {
        SliderInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                <div className={s.Button_Reviws}>
                                    <img alt="" src={el.image}  />
                                    <Link to="../login">
                                        <Button
                                            className={s.Reviews_send + " " + s.Font_size14}
                                            type={'submit'}
                                            class={'btn orange'}
                                            text={'Начать'}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
};

export default SliderApp;
