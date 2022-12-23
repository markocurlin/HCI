import Image from 'next/image';
import heroimage from 'src/assets/rooms/heroimage.jpg';
import rooms from 'src/constants/rooms';

import Carousel from '@/components/Carousel';
import Layout from '@/layouts/Layout';

const Rooms = () => {
  return (
    <>
      <Layout>
        <div className="h-130 w-full">
          <Image
            src={heroimage}
            alt="Hero image of room"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl p-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-black">
              Rooms and suites
            </h2>

            <div className="mt-4 grid grid-cols-1 items-center justify-items-center gap-y-8 gap-x-16 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-0">
              {rooms.map((room) => (
                <div key={room.id} className="container p-4 sm:w-80 sm:p-0">
                  <div className="lg:aspect-none h-80 overflow-hidden bg-black group-hover:opacity-75 sm:w-80 sm:p-0">
                    <Image
                      src={room.imageSrc}
                      alt={room.imageAlt}
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between sm:w-80 sm:p-0">
                    <div>
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
                className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <div className="container justify-around px-2 sm:px-8 lg:flex">
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

              <div className="h-130 w-full">
                <Carousel imageList={room.images} />
              </div>
            </>
          ))}
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-white py-12 sm:py-20 xl:px-20">
          <div className="container px-8 text-center sm:px-12 md:px-28 xl:w-3/5">
            <p className="text-xl font-semibold text-black sm:text-3xl">
              Your unforgettable adventure awaits
            </p>
            <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
              Luxury Hotel Božikovina is warm and friendly hotel located in
              Podstrana just 7km from city of Split. This is a modern, relaxed
              luxury - Dalmatian style hotel, built in 2002 and at the highest
              European standards renovated in 2022. Thanks to its enchanting
              heritage, Podstrana is evolving into an elite cultural site, and
              its main attractions are a beautiful location with crystal clear
              sea, mild climate and beautiful pebble beaches.
            </p>

            <a
              href="#"
              className="bg-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Rooms;
