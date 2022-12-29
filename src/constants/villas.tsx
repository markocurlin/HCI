import villa11 from 'src/assets/villas/villa1-1.jpg';
import villa12 from 'src/assets/villas/villa1-2.jpg';
import villa13 from 'src/assets/villas/villa1-3.jpg';
import villa14 from 'src/assets/villas/villa1-4.jpg';
import villa15 from 'src/assets/villas/villa1-5.jpg';
import villa21 from 'src/assets/villas/villa2-1.jpg';
import villa22 from 'src/assets/villas/villa2-2.jpg';
import villa23 from 'src/assets/villas/villa2-3.jpg';
import villa24 from 'src/assets/villas/villa2-4.jpg';
import villa25 from 'src/assets/villas/villa2-5.jpg';

const villas = [
  {
    id: 0,
    name: 'Villa 1',
    href: '#',
    imageSrc: villa11,
    imageAlt: 'Villa 1',
    description:
      'Villa 1 provides a sophisticated blend of modern design and classic elegance that enhances the light, spacious atmosphere.  Provides leisure and business travelers with a luxurious retreat, where they can enjoy the atmosphere of this beautiful hotel.',
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
        imageSrc: villa12,
        imageAlt: 'Carousel image 1 of villa 1',
      },
      {
        id: 1,
        imageSrc: villa13,
        imageAlt: 'Carousel image 2 of villa 2',
      },
      {
        id: 2,
        imageSrc: villa14,
        imageAlt: 'Carousel image 3 of villa 3',
      },
      {
        id: 3,
        imageSrc: villa15,
        imageAlt: 'Carousel image 4 of villa 4',
      },
    ],
  },
  {
    id: 1,
    name: 'Villa 2',
    href: '#',
    imageSrc: villa21,
    imageAlt: 'Villa 2',
    description:
      'Villa 2 is the perfect combination of comfort and sophisticated luxury, inviting you to take your time and relax. Our Superior room is perfect for travelers who want a chic and fresh room to recharge and relax.',
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
        imageSrc: villa22,
        imageAlt: 'Carousel image 1 of Villa 2',
      },
      {
        id: 1,
        imageSrc: villa23,
        imageAlt: 'Carousel image 2 of Villa 2',
      },
      {
        id: 2,
        imageSrc: villa24,
        imageAlt: 'Carousel image 3 of Villa 2',
      },
      {
        id: 3,
        imageSrc: villa25,
        imageAlt: 'Carousel image 4 of Villa 2',
      },
    ],
  },
];

export default villas;
