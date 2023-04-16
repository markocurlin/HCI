import deluxeroom1 from 'src/assets/rooms/deluxeroom-1.jpeg';
import standardroom1 from 'src/assets/rooms/standardroom-1.jpg';
import standardroom2 from 'src/assets/rooms/standardroom-2.jpeg';
import standardroom3 from 'src/assets/rooms/standardroom-3.jpg';
import standardroom4 from 'src/assets/rooms/standardroom-4.jpg';
import standardroom5 from 'src/assets/rooms/standardroom-5.jpg';
import superiorroom1 from 'src/assets/rooms/superiorroom-1.jpeg';
/*
import photo1 from 'src/assets/sobekamera/photo1.jpg';
import photo2 from 'src/assets/sobekamera/photo2.jpg';
import photo3 from 'src/assets/sobekamera/photo3.jpg';
import photo4 from 'src/assets/sobekamera/photo4.jpg';
import photo5 from 'src/assets/sobekamera/photo5.jpg';
import photo6 from 'src/assets/sobekamera/photo6.jpg';
import photo7 from 'src/assets/sobekamera/photo7.jpg';
import photo8 from 'src/assets/sobekamera/photo8.jpg'; */
import photomob1 from 'src/assets/sobemob/photo1.jpg';
import photomob2 from 'src/assets/sobemob/photo2.jpg';
import photomob3 from 'src/assets/sobemob/photo3.jpg';
import photomob4 from 'src/assets/sobemob/photo4.jpg';
import photomob5 from 'src/assets/sobemob/photo5.jpg';

export const pageInfo = {
  title: '- Rooms',
  desription: 'This page is showcase of rooms',
};

export const rooms = [
  {
    id: 0,
    name: 'The Deluxe suite',
    href: '#',
    imageSrc: deluxeroom1,
    imageAlt: 'The Deluxe suite',
    description:
      'The Deluxe Suite provides a sophisticated blend of modern design and classic elegance that enhances the light, spacious atmosphere.  Provides leisure and business travelers with a luxurious retreat, where they can enjoy the atmosphere of this beautiful hotel.',
    amenities: [
      'Complimentary wireless Internet',
      'Mini Bar',
      'Mini cooler',
      /* 'Hairdryer', */
      'Complimentary bottle of wine',
      'Air conditioning',
      'Flat-screen TV with cable',
      'Welcome fruit basket',
      /* 'Work desk and chair', */
      'In-room coffee and tea',
    ],
    maxOccupancy: '2 adults, 2 Children (11 years old and below)',
    bedConfiguration: 'Two (2) Double Beds or One (1) King Bed',
    images: [
      /*
      {
        id: 0,
        imageSrc: deluxeroom2,
        imageAlt: 'Carousel image 1 of deluxe room',
      },
      {
        id: 1,
        imageSrc: deluxeroom3,
        imageAlt: 'Carousel image 2 of deluxe room',
      },
      {
        id: 2,
        imageSrc: deluxeroom4,
        imageAlt: 'Carousel image 3 of deluxe room',
      },
      {
        id: 3,
        imageSrc: deluxeroom5,
        imageAlt: 'Carousel image 4 of deluxe room',
      },
      {
        id: 0,
        imageSrc: photo1,
        imageAlt: 'Carousel image 1 of deluxe room',
      },
      {
        id: 1,
        imageSrc: photo2,
        imageAlt: 'Carousel image 2 of deluxe room',
      },
      {
        id: 2,
        imageSrc: photo3,
        imageAlt: 'Carousel image 3 of deluxe room',
      },
      {
        id: 3,
        imageSrc: photo4,
        imageAlt: 'Carousel image 4 of deluxe room',
      },
      {
        id: 4,
        imageSrc: photo5,
        imageAlt: 'Carousel image 1 of deluxe room',
      },
      {
        id: 5,
        imageSrc: photo6,
        imageAlt: 'Carousel image 2 of deluxe room',
      },
      {
        id: 6,
        imageSrc: photo7,
        imageAlt: 'Carousel image 3 of deluxe room',
      },
      {
        id: 7,
        imageSrc: photo8,
        imageAlt: 'Carousel image 4 of deluxe room',
      }, */
    ],
  },
  {
    id: 1,
    name: 'Superior double room',
    href: '#',
    imageSrc: superiorroom1,
    imageAlt: 'Superior double room',
    description:
      'The Superior Room is the perfect combination of comfort and sophisticated luxury, inviting you to take your time and relax. Our Superior room is perfect for travelers who want a chic and fresh room to recharge and relax.',
    amenities: [
      'Complimentary wireless Internet',
      'Mini Bar',
      'Mini cooler',
      'Hairdryer',
      'Air conditioning',
      'Flat-screen TV with cable',
      'Work desk and chair',
      'In-room coffee and tea',
    ],
    maxOccupancy: '2 adults, 2 Children (11 years old and below)',
    bedConfiguration: 'Two (2) Double Beds or One (1) King Bed',
    images: [
      /*
      {
        id: 0,
        imageSrc: superiorroom2,
        imageAlt: 'Carousel image 1 of superior room',
      },
      {
        id: 1,
        imageSrc: superiorroom3,
        imageAlt: 'Carousel image 2 of superior room',
      },
      {
        id: 2,
        imageSrc: superiorroom4,
        imageAlt: 'Carousel image 3 of superior room',
      },
      {
        id: 3,
        imageSrc: superiorroom5,
        imageAlt: 'Carousel image 4 of superior room',
      }, */
      {
        id: 0,
        imageSrc: photomob1,
        imageAlt: 'Carousel image 1 of superior room',
      },
      {
        id: 1,
        imageSrc: photomob2,
        imageAlt: 'Carousel image 2 of superior room',
      },
      {
        id: 2,
        imageSrc: photomob3,
        imageAlt: 'Carousel image 3 of superior room',
      },
      {
        id: 3,
        imageSrc: photomob4,
        imageAlt: 'Carousel image 4 of superior room',
      },
      {
        id: 4,
        imageSrc: photomob5,
        imageAlt: 'Carousel image 4 of superior room',
      },
    ],
  },
  {
    id: 2,
    name: 'Standard double room',
    href: '#',
    imageSrc: standardroom1,
    imageAlt: 'Standard double room',
    description:
      'The Standard double room is the perfect combination of comfort and sophisticated luxury, inviting you to take your time and relax. Our Superior room is perfect for travelers who want a chic and fresh room to recharge and relax.',
    amenities: [
      'Complimentary wireless Internet',
      'Mini Bar',
      'Mini cooler',
      /* 'Hairdryer', */
      'Complimentary bottle of wine',
      'Air conditioning',
      'Flat-screen TV with cable',
      'Welcome fruit basket',
      /* 'Work desk and chair', */
      'In-room coffee and tea',
    ],
    maxOccupancy: '2 adults, 2 Children (11 years old and below)',
    bedConfiguration: 'Two (2) Double Beds or One (1) King Bed',
    images: [
      {
        id: 0,
        imageSrc: standardroom2,
        imageAlt: 'Carousel image 1 of standard room',
      },
      {
        id: 1,
        imageSrc: standardroom3,
        imageAlt: 'Carousel image 2 of standard room',
      },
      {
        id: 2,
        imageSrc: standardroom4,
        imageAlt: 'Carousel image 3 of standard room',
      },
      {
        id: 3,
        imageSrc: standardroom5,
        imageAlt: 'Carousel image 4 of standard room',
      },
    ],
  },
];
