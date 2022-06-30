import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import type { GeneralSliderProps } from "./types";

const GeneralSlider: React.FC<GeneralSliderProps> = ({ slides }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR ? (
    <Swiper
      breakpoints={{
        1024: {
          slidesPerView: 5,
        },
      }}
      modules={[Navigation]}
      navigation
      loop={slides.length >= 3}
      centeredSlides
      grabCursor
      spaceBetween={16}
      slidesPerView={3}
    >
      {slides.map((item) => (
        <SwiperSlide key={item.id}>{item.slide}</SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <div></div>
  );
};

export default GeneralSlider;
