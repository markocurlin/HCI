import barImage from '@/assets/Services/bar.jpg';
import dining1 from '@/assets/Services/Breakfast_1.jpg';
import dining2 from '@/assets/Services/Breakfast_2.jpg';
import dining3 from '@/assets/Services/Breakfast_3.jpg';
import elevatorImage from '@/assets/Services/elevator.jpg';
import massageImage from '@/assets/Services/massage.jpg';
import poolImage from '@/assets/Services/pool.jpg';
import tourImage from '@/assets/Services/tour.jpg';
import transferImage from '@/assets/Services/transfer.jpg';
/*
import sauna1 from '@/assets/Services/Wellness_1.jpg';
import sauna2 from '@/assets/Services/Wellness_2.jpg';
import sauna3 from '@/assets/Services/Wellness_3.jpg';
import sauna4 from '@/assets/Services/Wellness_4.jpg';
import sauna5 from '@/assets/Services/Wellness_5.jpg'; */

export const aaa = 3;

export const pageInfo = {
  title: '- Services',
  description: 'This page is showcase of services',
};

export const services = [
  {
    id: 0,
    title: 'Restaurant',
    imageSrc: dining1,
    imageAlt: 'Image of restaurant',
    images: [
      {
        id: 0,
        imageSrc: dining1,
        imageAlt: 'Carousel image 1 of dining',
      },
      {
        id: 1,
        imageSrc: dining2,
        imageAlt: 'Carousel image 2 of dining',
      },
      {
        id: 2,
        imageSrc: dining3,
        imageAlt: 'Carousel image 3 of dining',
      },
    ],
    description:
      'Restaurant Méditerranée pays homage to Mediterranean cuisine and local flavors, bringing the culinary traditions of Dalmatia into a new era. Whether you want the Adriatic catch of the day, premium meat delicacies, or a taste of the region, your Restaurant Méditerranée dining experience promises an adventure through Dalmatia, enhanced by an extensive wine list and creative desserts.',
  },
  {
    id: 1,
    title: 'Bar',
    imageSrc: barImage,
    imageAlt: 'Image of bar',
    images: [],
    description:
      'Have a cup of coffee in the mornings, spend the afternoons sipping cocktails, and round off your days with a glass of wine. Whether you are a local or a guest of the hotel, Bar Split brings people together with artfully crafted hot and cold beverages.',
  },
  {
    id: 2,
    title: 'Pool',
    imageSrc: poolImage,
    imageAlt: 'Image of pool',
    images: [],
    description:
      'Take a break from swimming and freshen up with a variety of flavorful smoothies, freshly squeezed juices, and lush cocktails depending on the time of the day.',
  },
  {
    id: 3,
    title: 'Massage',
    imageSrc: massageImage,
    imageAlt: 'Image of massage',
    images: [],
    description:
      'Our selection of massages, manicures, pedicures, and therapies are designed to make you look and feel your best. Don’t miss our Nuvola zero-gravity dry floatation bed to fully release any tension for a stress-free holiday.',
  },
  {
    id: 4,
    title: 'Sauna',
    imageSrc: massageImage,
    // imageSrc: sauna2,
    imageAlt: 'Image of sauna',
    images: [
      /*
      {
        id: 0,
        imageSrc: sauna1,
        imageAlt: 'Carousel image 1 of sauna',
      },
      {
        id: 1,
        imageSrc: sauna2,
        imageAlt: 'Carousel image 2 of sauna',
      },
      {
        id: 2,
        imageSrc: sauna3,
        imageAlt: 'Carousel image 3 of sauna',
      },
      {
        id: 3,
        imageSrc: sauna4,
        imageAlt: 'Carousel image 4 of sauna',
      },
      {
        id: 4,
        imageSrc: sauna5,
        imageAlt: 'Carousel image 5 of sauna',
      },
      */
    ],
    description:
      'Release your physical and mental tension with our steam sauna or traditional Finnish sauna. Speed up your circulation with a cold rain shower or detox your whole self with curative halotherapy.',
  },
  {
    id: 5,
    title: 'Private airport shuttle',
    imageSrc: transferImage,
    imageAlt: 'Image of private airport shuttle',
    images: [],
    description:
      'Door to door service, avoid waiting time at the airport or extra taxi cost from the bus stop to your accommodation. Upon arrival at the airport you will be greeted by your driver with a sign showing your name.',
  },
  {
    id: 6,
    title: 'Private tour shuttle',
    imageSrc: tourImage,
    imageAlt: 'Image of private tour shuttle',
    images: [],
    description:
      'Our private tours provide the greatest flexibility, comfort and convenience. You will be traveling with air-conditioned vehicles and experienced drivers.',
  },
  {
    id: 7,
    title: 'Elevator',
    imageSrc: elevatorImage,
    imageAlt: 'Image of elevator',
    images: [],
    description:
      'Elevator deliver guests to their rooms quietly, efficiently, and comfortably.',
  },
];
