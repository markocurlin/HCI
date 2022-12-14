import Image from 'next/image';
import image3 from 'src/assets/image3.jpg';

import Layout from '@/layouts/Layout';

const rooms = [
  {
    id: 0,
    name: 'Standard double room',
    href: '#',
    imageSrc: image3,
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
  },
  {
    id: 1,
    name: 'Superior double room',
    href: '#',
    imageSrc: image3,
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
  },
  {
    id: 2,
    name: 'The Deluxe suite',
    href: '#',
    imageSrc: image3,
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
  },
];

const Rooms = () => {
  return (
    <>
      <Layout>
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
              {/* <Image src={room.imageSrc} alt={room.imageAlt} className="object-scale-down"/> */}
              <div className="h-124 w-full bg-black">
                <div className="h-104 bg-gray-300"></div>
                <div className="bg-primary h-24"></div>
              </div>
            </>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Rooms;
