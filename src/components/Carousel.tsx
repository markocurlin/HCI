import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const imageList = [
  {
    id: 0,
    imageSrc:
      'https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg',
    imageAlt: 'Image slide 1',
  },
  {
    id: 1,
    imageSrc:
      'https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg',
    imageAlt: 'Image slide 2',
  },
  {
    id: 2,
    imageSrc:
      'https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg',
    imageAlt: 'Image slide 3',
  },
];

const Carousel = () => {
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
        /* className="mySwiper" */
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index}>
            {/* <Image className="object-fill w-full h-96" src={image.imageSrc} alt={image.imageAlt}/> */}
            <img
              className="h-96 w-full object-fill"
              src={image.imageSrc}
              alt={image.imageAlt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
