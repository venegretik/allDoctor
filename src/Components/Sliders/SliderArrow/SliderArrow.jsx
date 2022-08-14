import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./SliderStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSymptoms } from "../../../base/asyncActions/getMainPageInfo";
import Loader from "../../Loading/Loader";
import { Link } from "react-router-dom";

const SliderArrow = () => {
  const config = useSelector((state) => state.config.config);
  const availableScreenWidth = window.screen.availWidth;
  let slide = 5;
  if (availableScreenWidth <= 768 && availableScreenWidth > 420) {
    slide = 4;
  } else if (availableScreenWidth <= 420) {
    slide = 3;
  }
  const [Symptoms, setSymptoms] = useState([]),
    dispatch = useDispatch(),
    SymptomInfo = async () => {
      const response = await dispatch(getSymptoms());
      if (response.status) {
        setSymptoms(response.data.items);
      }
    };
  useEffect(() => {
    SymptomInfo();
  }, []);
  return (
    <section style={{ marginBottom: "80px" }}>
      <h1 className="CardSwiperTitle">Симптомы</h1>
      <div>
        <Swiper
          slidesPerView={slide}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          navigation={slide <= 4 ? false : true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {!Symptoms ? (
            <Loader />
          ) : (
            Symptoms.map((item) => (
              <SwiperSlide key={item.symptom_id}>
                <Link to={"/razdeli"} className="swiperCard">
                  <img className="swiperCardImg" src={item.image} alt="" />
                  <p className="switepCardText" style={{color: config?.config.colors.color2}}>{item.title}</p>
                </Link>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderArrow;
