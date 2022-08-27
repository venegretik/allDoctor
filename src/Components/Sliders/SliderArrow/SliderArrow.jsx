import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./SliderStyle.css";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getSymptoms } from "../../../base/asyncActions/getMainPageInfo";
import Loader from "../../Loading/Loader";
import { Link } from "react-router-dom";

const SliderArrow = () => {
  const availableScreenWidth = window.screen.availWidth;
  let slide = 5.3;
  if (availableScreenWidth <= 768 && availableScreenWidth > 420) {
    slide = 3.6;
  } else if (availableScreenWidth <= 420) {
    slide = 2.8;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section style={{ marginBottom: "80px" }}>
      <h1 className="CardSwiperTitle title_config">Симптомы</h1>
      <div>
        <Swiper
          slidesPerView={slide}
          spaceBetween={10}
          slidesPerGroup={1}
          initialSlide={4}
          loop={true}
          centeredSlides ={true} 
          navigation={slide <= 4 ? false : true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {!Symptoms ? (
            <Loader />
          ) : (
            Symptoms.map((item) => (
              <SwiperSlide key={item.symptom_id}>
                <Link to={"/doctor-list/" + item.branch_id + "/" + item.specialization_id} className="swiperCard">
                  <img className="swiperCardImg" src={item.image} alt="" />
                  <p className="switepCardText black_config" >{item.title}</p>
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
