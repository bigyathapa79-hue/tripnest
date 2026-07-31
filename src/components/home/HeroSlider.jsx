import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import heroSlides from "../../data/heroSlides";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      effect="fade"
      loop={true}
      speed={1000}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="h-screen"
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-screen w-full">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
