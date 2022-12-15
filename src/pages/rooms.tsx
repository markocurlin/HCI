import Image from 'next/image';
import deluxeroom1 from 'src/assets/rooms/deluxeroom-1.jpeg';
import deluxeroom2 from 'src/assets/rooms/deluxeroom-2.jpg';
import heroimage from 'src/assets/rooms/heroimage.jpg';
import standardroom1 from 'src/assets/rooms/standardroom-1.jpg';
import standardroom2 from 'src/assets/rooms/standardroom-2.jpeg';
import superiorroom1 from 'src/assets/rooms/superiorroom-1.jpeg';
import superiorroom2 from 'src/assets/rooms/superiorroom-2.png';

import Layout from '@/layouts/Layout';

const rooms = [
  {
    id: 0,
    name: 'Standard double room',
    href: '#',
    imageSrc: standardroom1,
    imageAlt: 'Standard double room',
    description:
      'The Superior Room is the perfect combination of comfort and sophisticated luxury, inviting you to take your time and relax. Our Superior room is perfect for travelers who want a chic and fresh room to recharge and relax.',
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
    images: standardroom2,
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
    images: superiorroom2,
  },
  {
    id: 2,
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
    images: deluxeroom2,
  },
];

const Rooms = () => {
  return (
    <>
      <Layout>
        <div className="h-124 w-full bg-gray-300">
          <Image
            src={heroimage}
            alt="Hero image of room"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-black">
              Rooms and suites
            </h2>
            <div className="mt-8 grid grid-cols-1 items-center justify-items-center gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-0">
              {rooms.map((room) => (
                <div key={room.id} className="group relative w-80">
                  <div className="lg:aspect-none h-80 w-80 overflow-hidden bg-gray-200 group-hover:opacity-75">
                    <Image
                      src={room.imageSrc}
                      alt={room.imageAlt}
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <span aria-hidden="true" className="absolute inset-0" />
                      <p className="text-justify text-lg font-semibold leading-snug tracking-tight text-black/70">
                        {room.name}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="bg-secondary inline-flex items-center justify-center whitespace-nowrap border border-transparent p-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white">
          {rooms.map((room) => (
            <>
              <div
                key={room.id}
                className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <div className="container justify-around lg:flex">
                  <div className="container p-2">
                    <p className="text-xl font-semibold text-black sm:text-2xl">
                      {room.name}
                    </p>
                    <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                      {room.description}
                    </p>
                    <div className="mt-1 flex">
                      <p className="mt-2 text-justify text-sm font-semibold leading-snug text-black/70 sm:text-lg">
                        MAXIMUM OCCUPANCY:{' '}
                      </p>
                      <p className="mt-2 ml-1 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                        {room.maxOccupancy}
                      </p>
                    </div>
                    <div className="mt-1 flex">
                      <p className="text-justify text-sm font-semibold leading-snug text-black/70 sm:text-lg">
                        BED CONFIGURATION:{' '}
                      </p>
                      <p className="ml-1 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                        {room.bedConfiguration}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="bg-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      BOOK NOW
                    </a>
                  </div>
                  <div className="container mt-4 p-2 lg:mt-0 xl:mt-0">
                    {room.amenities.map((amenitie, index) => (
                      <ul
                        key={`${index}-${amenitie}`}
                        className="ml-0 list-inside list-disc lg:ml-32"
                      >
                        <li className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                          {amenitie}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-124 w-full">
                <div className="h-104">
                  <Image
                    src={room.images}
                    alt={room.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-primary h-24"></div>
              </div>

              <div className="flex h-auto w-full items-center justify-center bg-white py-12 sm:py-20 xl:px-20">
                <div className="container px-24 text-center sm:px-24 md:px-28 xl:w-3/5">
                  <p className="text-xl font-semibold text-black sm:text-3xl">
                    Your unforgettable adventure awaits
                  </p>
                  <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                    Luxury Hotel Božikovina is warm and friendly hotel located
                    in Podstrana just 7km from city of Split. This is a modern,
                    relaxed luxury - Dalmatian style hotel, built in 2002 and at
                    the highest European standards renovated in 2022. Thanks to
                    its enchanting heritage, Podstrana is evolving into an elite
                    cultural site, and its main attractions are a beautiful
                    location with crystal clear sea, mild climate and beautiful
                    pebble beaches.
                  </p>

                  <a
                    href="#"
                    className="bg-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Rooms;
