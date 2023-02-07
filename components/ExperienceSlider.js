import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { experienceNav, experienceData } from './data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper';

const ExperienceSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div id="experience" className="flex justify-center py-6 ">
        {/* <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold ">
          Companies I worked for
        </h2> */}

        <div className="relative flex justify-center h-[40px] md:h-[100px] border-none">
          <svg
            height="100"
            width="700"
            className="hidden md:block stroke-[#646464] text-[100px] font-display uppercase fill-transparent tracking-tight"
          >
            <text x="0" y="75">
              Experience
            </text>
          </svg>
          <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold absolute  md:top-1/2 transform md:-translate-x-10 xl:-translate-x-16 md:-translate-y-1/2">
            Companies
          </h2>
        </div>
      </div>

      <Swiper
        style={{
          '--swiper-navigation-color': '#c3c3c3',
          '--swiper-pagination-color': '#f3f3f3',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        //centeredSlides={true}
        loop={true}
        spaceBetween={5}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
      >
        {experienceData.map((singleDataItem, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div
                className="min-h-[540px] md:min-h-[580px] px-4 py-4 bg-primary text-white"
                dangerouslySetInnerHTML={{ __html: singleDataItem.description }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="bg-white">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          onSwiper={setThumbsSwiper}
          spaceBetween={2}
          slidesPerView={3}
          freeMode={false}
          watchSlidesProgress={true}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {experienceNav.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="h-[40px] flex items-center py-2 text-sm capitalize">
                  {item.name}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ExperienceSlider;
