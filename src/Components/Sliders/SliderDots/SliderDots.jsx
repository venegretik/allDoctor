import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SliderDots.css";
import { Pagination } from "swiper";
import { getSlider } from "../../../base/asyncActions/getMainPageInfo";
import { useDispatch } from "react-redux";
import Loader from "../../Loading/Loader";

const SliderDots = () => {
  const [Slider, setSlider] = useState([]),
    dispatch = useDispatch(),
    SliderInfo = async () => {
      const response = await dispatch(getSlider());
      if (response.status) {
        setSlider(response.data.items);
      }
    };

  useEffect(() => {
    SliderInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section style={{ marginBottom: "40px" }}>
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
                backgroundColor: el.backgroud_color,
                backgroundImage: "url(" + el.backgroud_image + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <a target={el.url ? "blank" : ""} href={el.url ? el.url : "#cancel"}>
                <img src={el.image} alt="" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default SliderDots;
