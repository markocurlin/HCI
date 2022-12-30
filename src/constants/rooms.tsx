import deluxeroom1 from 'src/assets/rooms/deluxeroom-1.jpeg';
import deluxeroom2 from 'src/assets/rooms/deluxeroom-2.jpg';
import deluxeroom3 from 'src/assets/rooms/deluxeroom-3.jpg';
import deluxeroom4 from 'src/assets/rooms/deluxeroom-4.jpg';
import deluxeroom5 from 'src/assets/rooms/deluxeroom-5.jpg';
import standardroom1 from 'src/assets/rooms/standardroom-1.jpg';
import standardroom2 from 'src/assets/rooms/standardroom-2.jpeg';
import standardroom3 from 'src/assets/rooms/standardroom-3.jpg';
import standardroom4 from 'src/assets/rooms/standardroom-4.jpg';
import standardroom5 from 'src/assets/rooms/standardroom-5.jpg';
import superiorroom1 from 'src/assets/rooms/superiorroom-1.jpeg';
import superiorroom2 from 'src/assets/rooms/superiorroom-2.png';
import superiorroom3 from 'src/assets/rooms/superiorroom-3.jpg';
import superiorroom4 from 'src/assets/rooms/superiorroom-4.jpg';
import superiorroom5 from 'src/assets/rooms/superiorroom-5.jpg';

const rooms = [
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
      'Hairdryer',
      'Complimentary bottle of wine',
      'Air conditioning',
      'Flat-screen TV with cable',
      'Welcome fruit basket',
      'Work desk and chair',
      'In-room coffee and tea',
    ],
    maxOccupancy: '2 adults, 2 Children (11 years old and below)',
    bedConfiguration: 'Two (2) Double Beds or One (1) King Bed',
    images: [
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
      'Hairdryer',
      'Complimentary bottle of wine',
      'Air conditioning',
      'Flat-screen TV with cable',
      'Welcome fruit basket',
      'Work desk and chair',
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

export default rooms;
