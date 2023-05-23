import barImage from '@/assets/Services/bar.jpg';
import dining1 from '@/assets/Services/Breakfast_1.jpg';
import dining2 from '@/assets/Services/Breakfast_2.jpg';
import dining3 from '@/assets/Services/Breakfast_3.jpg';
import elevatorImage from '@/assets/Services/elevator.jpg';
import massageImage from '@/assets/Services/massage.jpg';
import poolImage from '@/assets/Services/pool.jpg';
import tourImage from '@/assets/Services/tour.jpg';
import transferImage from '@/assets/Services/transfer.jpg';
// import sauna1 from '@/assets/Services/Wellness_1.JPG';
// import sauna2 from '@/assets/Services/Wellness_2.JPG';
// import sauna3 from '@/assets/Services/Wellness_3.JPG';
// import sauna4 from '@/assets/Services/Wellness_4.JPG';
// import sauna5 from '@/assets/Services/Wellness_5.JPG';

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
      'Experience culinary excellence at our exquisite restaurant, where flavors harmonize and impeccable service shines. Indulge in a fusion of global influences and local traditions, crafted with the finest ingredients. Immerse yourself in an inviting ambiance adorned with elegant decor, creating the perfect setting for memorable dining moments.',
  },
  {
    id: 1,
    title: 'Bar',
    imageSrc: barImage,
    imageAlt: 'Image of bar',
    images: [],
    description:
      'Unwind and socialize at our stylish bar, where every drink is a masterpiece. Enjoy the inviting ambiance, expertly crafted cocktails, and unforgettable moments. Cheers to a night of elegance, cherished memories, and the perfect blend of flavors that will leave you wanting more.',
  },
  {
    id: 2,
    title: 'Pool',
    imageSrc: poolImage,
    imageAlt: 'Image of pool',
    images: [],
    description:
      "Nestled amidst lush surroundings and boasting breathtaking views, our pool is a haven of tranquility. The glistening waters beckon you to take a refreshing dip and escape the cares of the day. Whether you're seeking a moment of solitude or a delightful gathering with loved ones, our pool provides the perfect setting for unforgettable moments.",
  },
  {
    id: 3,
    title: 'Massage',
    imageSrc: massageImage,
    imageAlt: 'Image of massage',
    images: [],
    description:
      'Indulge in a blissful escape and pamper your senses with our exquisite range of massage services at our hotel spa. Our dedicated team of skilled therapists are here to transport you to a realm of relaxation and rejuvenation. Discover the perfect massage experience that suits your needs, whether you desire a Half Body Massage, Relaxing Massage, Deep Tissue & Sport Massage, or Aromatherapy Massage.',
  },
  {
    id: 4,
    title: 'Sauna',
    imageSrc: massageImage,
    images: [
      {
        id: 0,
        imageSrc: massageImage,
        imageAlt: 'Carousel image 1 of sauna',
      },
      {
        id: 1,
        imageSrc: massageImage,
        imageAlt: 'Carousel image 2 of sauna',
      },
      {
        id: 2,
        imageSrc: massageImage,
        imageAlt: 'Carousel image 3 of sauna',
      },
      {
        id: 3,
        imageSrc: massageImage,
        imageAlt: 'Carousel image 4 of sauna',
      },
      {
        id: 4,
        imageSrc: massageImage,
        imageAlt: 'Carousel image 5 of sauna',
      },
    ],
    description:
      'Escape to a tranquil sanctuary within our hotel as you step into our inviting sauna. Experience customizable heat, allowing you to tailor the intensity to your preferences. Indulge in the detoxifying benefits, as the warmth promotes cleansing and revitalization. Soothe tired muscles and find relaxation within the serene ambiance. Let the sauna become your oasis of tranquility, where stress melts away and rejuvenation takes hold.',
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
