import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import room3 from 'src/assets/home/carousel-image1.jpg';
import room2 from 'src/assets/home/carousel-image5.jpg';
import room1 from 'src/assets/home/image1.jpg';

import Carousel from '@/components/Carousel';
import { pageInfo, rooms } from '@/constants/rooms';
import Layout from '@/layouts/Layout';
import { Meta } from '@/layouts/Meta';

const Rooms = () => {
  const [id, setId] = useState(4);
  const ref = useRef<null | HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setId(4);
  }, [id]);

  return (
    <>
      <Layout
        meta={<Meta title={pageInfo.title} description={pageInfo.desription} />}
      >
        <div className="bg-white">
          <div className="my-4 flex justify-center py-6 lg:my-16">
            <div className="mx-10 mt-6 flex flex-col justify-center sm:px-6 lg:px-8">
              <div className="sm:max-w-md">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Rooms & suites
                </h1>
                <p className="text-md mt-4 leading-snug tracking-tight text-black/70 sm:text-xl">
                  We d love to surprise you, but there s so much about our
                  luxury rooms and suites we just have to share. From the bold,
                  innovative design and Italian marble bathrooms.
                </p>
              </div>

              <div>
                <Link
                  href="#"
                  className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>

            <div className="mx-10 mt-6 hidden max-w-2xl sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="img-gradient aspect-w-3 aspect-h-4 overflow-hidden lg:block">
                <Image
                  src={room1}
                  alt="soba1"
                  className="h-full w-full object-cover"
                  placeholder="blur"
                />
                <div className="absolute bottom-0 left-0 z-20 p-6">
                  <p className="py-0.5 text-sm font-semibold leading-snug text-white sm:text-lg">
                    The Deluxe suite
                  </p>
                  <p className="py-0.5 text-xs font-light leading-snug text-white sm:text-base">
                    Discover now
                  </p>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="img-gradient aspect-w-3 aspect-h-2 overflow-hidden ">
                  <Image
                    src={room2}
                    alt="soba2"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute bottom-0 left-0 z-20 p-6">
                    <p className="py-0.5 text-sm font-semibold leading-snug text-white sm:text-lg">
                      Superior double room
                    </p>
                    <p className="py-0.5 text-xs font-light leading-snug text-white sm:text-base">
                      Discover now
                    </p>
                  </div>
                </div>
                <div className="img-gradient aspect-w-3 aspect-h-2 overflow-hidden">
                  <Image
                    src={room3}
                    alt="soba3"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute bottom-0 left-0 z-20 p-6">
                    <p className="py-0.5 text-sm font-semibold leading-snug text-white sm:text-lg">
                      Standard double room
                    </p>
                    <p className="py-0.5 text-xs font-light leading-snug text-white sm:text-base">
                      Discover now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl p-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <hr className="mb-16" />
            <div className="mt-4 grid grid-cols-1 items-center justify-items-center gap-y-8 gap-x-16 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-0">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="group container p-4 sm:w-80 sm:p-0"
                >
                  <div
                    onClick={() => setId(room.id)}
                    className="lg:aspect-none h-80 overflow-hidden bg-black group-hover:opacity-95 sm:w-80 sm:p-0"
                  >
                    <Image
                      src={room.imageSrc}
                      alt={room.imageAlt}
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between sm:w-80 sm:p-0">
                    <div>
                      <p className="text-justify text-lg font-semibold leading-snug tracking-tight text-black/70">
                        {t(`${room.name}`)}
                      </p>
                    </div>
                    <button
                      onClick={() => setId(room.id)}
                      className="bg-secondary bg-hover-secondary inline-flex items-center justify-center whitespace-nowrap border border-transparent p-2 text-base font-medium text-white shadow-sm"
                    >
                      <ArrowRightIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <hr className="mt-16" />
          </div>
        </div>

        <div className="bg-white">
          {rooms.map((room) => (
            <div key={room.id} ref={room.id === id ? ref : null}>
              <div className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="container justify-around px-2 sm:px-8 lg:flex">
                  <div className="container p-2">
                    <p className="text-xl font-semibold text-black sm:text-2xl">
                      {t(`${room.name}`)}
                    </p>
                    <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                      {t(`${room.description}`)}
                    </p>
                    <div className="mt-1 flex">
                      <p className="mt-2 text-justify text-sm font-semibold leading-snug text-black/70 sm:text-lg">
                        {t('MAX OCCUPANCY:')}{' '}
                      </p>
                      <p className="mt-2 ml-1 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                        {t(`${room.maxOccupancy}`)}
                      </p>
                    </div>
                    <div className="mt-1 flex">
                      <p className="text-justify text-sm font-semibold leading-snug text-black/70 sm:text-lg">
                        {t('BED CONFIGURATION:')}{' '}
                      </p>
                      <p className="ml-1 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                        {t(`${room.bedConfiguration}`)}
                      </p>
                    </div>
                    <Link
                      href="/contact/#book"
                      className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
                    >
                      {t('BOOK NOW')}
                    </Link>
                  </div>
                  <div className="container mt-4 p-2 lg:mt-0 xl:mt-0">
                    {room.amenities.map((amenitie, index) => (
                      <ul
                        key={`${index}-${amenitie}`}
                        className="ml-0 list-inside list-disc lg:ml-32"
                      >
                        <li className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                          {t(`${amenitie}`)}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>

              <div
                key={`${room.id}-carousel`}
                className="h-124 w-full px-0 sm:px-44"
              >
                <Carousel imageList={room.images} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-white py-12 sm:py-20 xl:px-20">
          <div className="container px-8 text-center sm:px-12 md:px-28 xl:w-3/5">
            <p className="text-xl font-semibold text-black sm:text-3xl">
              {t('Your unforgettable adventure awaits')}
            </p>
            <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
              {t(
                'Luxury Hotel Božikovina is warm and friendly hotel located in Podstrana just 7km from city of Split. This is a modern, relaxed luxury - Dalmatian style hotel, built in 2002 and at the highest European standards renovated in 2022. Thanks to its enchanting heritage, Podstrana is evolving into an elite cultural site, and its main attractions are a beautiful location with crystal clear sea, mild climate and beautiful pebble beaches.'
              )}
            </p>

            <Link
              href="#"
              className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
            >
              {t('LEARN MORE')}
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Rooms;
