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
          <div className="mt-4 flex flex-col items-center justify-center py-6 lg:mt-16 lg:mb-20 lg:flex-row">
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

            <div className="mx-10 mt-6 max-w-2xl sm:px-1 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="img-gradient group container my-12 h-96 overflow-hidden group-hover:opacity-95 lg:my-0 lg:block lg:h-auto">
                <Image
                  src={room1}
                  alt="soba1"
                  className="h-full w-full object-cover"
                  placeholder="blur"
                />
                <div className="absolute bottom-0 left-0 z-20 p-6">
                  <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                    The Deluxe suite
                  </p>
                  <div className="flex py-0.5">
                    <p
                      onClick={() => setId(0)}
                      className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                    >
                      Discover now
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto ">
                  <Image
                    src={room2}
                    alt="soba2"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute bottom-0 left-0 z-20 p-6">
                    <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                      Superior double room
                    </p>
                    <div className="flex py-0.5">
                      <p
                        onClick={() => setId(1)}
                        className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                      >
                        Discover now
                      </p>
                    </div>
                  </div>
                </div>
                <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto">
                  <Image
                    src={room3}
                    alt="soba3"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute bottom-0 left-0 z-20 p-6">
                    <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                      Standard double room
                    </p>
                    <div className="flex py-0.5">
                      <p
                        onClick={() => setId(2)}
                        className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                      >
                        Discover now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-100 pb-8 sm:py-12 lg:px-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              ref={room.id === id ? ref : null}
              className="bg-zinc-100 pb-8 lg:p-8"
            >
              <div className="mx-auto mt-8 grid w-full max-w-screen-md grid-cols-12 md:max-w-screen-2xl md:items-center">
                {room.id % 2 === 0 && (
                  <>
                    <div className="md:col-span-auto z-0 col-span-12 lg:z-20 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${room.id}-carousel`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <Carousel imageList={room.images} />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                      <div className="bg-white p-4 sm:p-12 md:px-8">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black lg:text-3xl">
                                {t(`${room.name}`)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base lg:pr-24 xl:pr-32">
                                {t(`${room.description}`)}
                              </p>
                            </div>

                            <div className="container mt-4 p-2 lg:mt-0 xl:mt-0">
                              {room.amenities.map((amenitie, index) => (
                                <ul
                                  key={`${index}-${amenitie}`}
                                  className="ml-0 list-inside list-disc"
                                >
                                  <li className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                                    {t(`${amenitie}`)}
                                  </li>
                                </ul>
                              ))}
                            </div>
                            <div>
                              <Link
                                href="/contact/#book"
                                className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
                              >
                                {t('BOOK NOW')}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {room.id % 2 !== 0 && (
                  <>
                    <div className="md:col-span-auto z-0 col-span-12 lg:z-20 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${room.id}-carousel`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <Carousel imageList={room.images} />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                      <div className="bg-white p-4 sm:p-12 md:px-8">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 lg:pl-24 xl:py-24 xl:pl-32">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black lg:text-3xl">
                                {t(`${room.name}`)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                                {t(`${room.description}`)}
                              </p>
                            </div>

                            <div className="container mt-4 p-2 lg:mt-0 xl:mt-0">
                              {room.amenities.map((amenitie, index) => (
                                <ul
                                  key={`${index}-${amenitie}`}
                                  className="ml-0 list-inside list-disc"
                                >
                                  <li className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                                    {t(`${amenitie}`)}
                                  </li>
                                </ul>
                              ))}
                            </div>
                            <div>
                              <Link
                                href="/contact/#book"
                                className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
                              >
                                {t('BOOK NOW')}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/*
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
        </div> */}
      </Layout>
    </>
  );
};

export default Rooms;
