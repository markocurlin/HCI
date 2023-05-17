import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = ({ imageList }: any) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="z-20 h-full w-full object-cover"
      >
        {imageList.map((image: any) => (
          <SwiperSlide key={image.id}>
            <Image
              className="h-full w-full object-cover"
              src={image.imageSrc}
              alt={image.imageAlt}
              fill={true}
              sizes="100vw, 100vh"
              quality={100}
              placeholder="blur"
              blurDataURL="https://drive.google.com/uc?export=view&id=1N3ZvyFfciBXAHWefS85a_0f_HEAZOYUy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
