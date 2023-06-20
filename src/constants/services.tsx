import dining1 from '@/assets/Services/Breakfast_1.jpg';
import elevatorImage from '@/assets/Services/elevator.jpg';
import poolImage from '@/assets/Services/pool.jpg';
import restaurantImage from '@/assets/Services/restaurant.jpg';
import sauna from '@/assets/Services/sauna.jpg';
import tourImage from '@/assets/Services/tour.jpg';
import transferImage from '@/assets/Services/transfer.jpg';
import massageImage from '@/assets/Services/Wellness_2.jpg';

export const pageInfo = {
  title: '- Services',
  description: 'This page is showcase of services',
};

export const services = [
  {
    id: 0,
    title: 'Breakfast',
    imageSrc: dining1,
    imageAlt: 'Image of breakfast',
    description:
      'The hotel restaurant with indoor seating offers an open-buffet breakfast.',
  },
  {
    id: 1,
    title: 'Restaurant',
    imageSrc: restaurantImage,
    imageAlt: 'Image of restaurant',
    description:
      'Welcome to our seaside restaurant, where culinary delights meet breathtaking ocean views. Nestled along the picturesque shoreline, our restaurant offers a truly enchanting dining experience.',
  },
  {
    id: 2,
    title: 'Pool',
    imageSrc: poolImage,
    imageAlt: 'Image of pool',
    description:
      'Fulfill all your holidays desires for relax and switch off completely, take a dip into paradise in swimming pool. Enjoy poolside refreshments and soak up the sun on our sunbed to complete your perfect holiday.',
    aditionalDescription: 'Operation hours: 11:00. - 23:00.',
  },
  {
    id: 3,
    title: 'Massage',
    imageSrc: massageImage,
    imageAlt: 'Image of massage',
    description: 'Time spent getting a massage is never wasted.',
    massageList: [
      {
        title: 'Half Body Massage',
        price: ['30 mins. €45'],
      },
      {
        title: 'Relaxing Massage',
        price: ['30 mins. €45', '60 mins. €70'],
      },
      {
        title: 'Deep Tissue / Sport Massage',
        price: ['30 mins. €55', '60 mins. €90'],
      },
      {
        title: 'Aromatherapy Massage',
        price: ['30 mins. €50', '60 mins. €75'],
      },
    ],
  },
  {
    id: 4,
    title: 'Sauna',
    imageSrc: sauna,
    imageAlt: 'Image of sauna',
    description:
      'Indulge in the detoxifying benefits, as the warmth promotes cleansing and revitalization. Let the sauna become your oasis of tranquility, where stress melts away and rejuvenation takes hold.',
  },
  {
    id: 5,
    title: 'Private airport shuttle',
    imageSrc: transferImage,
    imageAlt: 'Image of private airport shuttle',
    description:
      'Door to door service. Avoid waiting time at the airport or extra taxi cost from the bus stop to your accommodation. Upon arrival at the airport you will be greeted by your driver with a sign showing your name.',
  },
  {
    id: 6,
    title: 'Private tour shuttle',
    imageSrc: tourImage,
    imageAlt: 'Image of private tour shuttle',
    description:
      'Our private tours provide the greatest flexibility, comfort and convenience. You will be traveling with air-conditioned vehicles and experienced drivers.',
  },
  {
    id: 7,
    title: 'Elevator',
    imageSrc: elevatorImage,
    imageAlt: 'Image of elevator',
    description:
      'Deliver guests to their rooms quietly, efficiently, and comfortably.',
  },
];
