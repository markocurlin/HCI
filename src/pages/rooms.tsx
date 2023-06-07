import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Breadcrumb from '@/components/Breadcrumb';
import Carousel from '@/components/Carousel';
import ScrollToTop from '@/components/ScrollToTop';
import { pageInfo, rooms, roomsShowcase } from '@/constants/rooms';
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
        <ScrollToTop />
        <div className="bg-white">
          <div className="p-fix container mt-16 pl-8 md:pl-16 lg:pl-16 xl:pl-16 2xl:pl-48">
            <Breadcrumb title={t('Rooms')} />
          </div>

          <div className="mt-4 flex flex-col items-center justify-center py-0 md:py-6 lg:mt-2 lg:mb-20 lg:flex-row">
            <div className="mx-8 mt-6 flex flex-col justify-center lg:px-8">
              <div className="sm:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  {t(roomsShowcase.title)}
                </h1>
                <p className="mt-4 text-justify leading-snug tracking-tight text-black/70 sm:text-xl">
                  {t(roomsShowcase.description)}
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
                >
                  {t('CONTACT US')}
                </Link>
              </div>
            </div>

            <div className="mx-8 mt-6 max-w-2xl sm:px-1 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:block lg:h-auto">
                <Image
                  src={roomsShowcase.rooms[0]!.imageSrc}
                  alt={roomsShowcase.rooms[0]!.imageAlt}
                  className="h-full w-full object-cover"
                  placeholder="blur"
                />
                <div className="absolute bottom-0 left-0 z-20 p-6">
                  <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                    {t(roomsShowcase.rooms[0]!.title)}
                  </p>
                  <div className="flex py-0.5">
                    <p
                      onClick={() => setId(0)}
                      className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                    >
                      {t('Discover now')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto">
                  <Image
                    src={roomsShowcase.rooms[1]!.imageSrc}
                    alt={roomsShowcase.rooms[1]!.imageAlt}
                    className="h-full w-full object-cover"
                    // fill={true}
                    // sizes="100vw, 100vh"
                    quality={100}
                    placeholder="blur"
                    // blurDataURL="https://drive.google.com/uc?export=view&id=1N3ZvyFfciBXAHWefS85a_0f_HEAZOYUy"
                  />
                  <div className="absolute bottom-0 left-0 z-20 p-6">
                    <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                      {t(roomsShowcase.rooms[1]!.title)}
                    </p>
                    <div className="flex py-0.5">
                      <p
                        onClick={() => setId(1)}
                        className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                      >
                        {t('Discover now')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto">
                  <Image
                    src={roomsShowcase.rooms[2]!.imageSrc}
                    alt={roomsShowcase.rooms[2]!.imageAlt}
                    className="h-full w-full object-cover"
                    // fill={true}
                    // sizes="100vw, 100vh"
                    quality={100}
                    placeholder="blur"
                    // blurDataURL="https://drive.google.com/uc?export=view&id=1N3ZvyFfciBXAHWefS85a_0f_HEAZOYUy"
                  />
                  <div className="absolute bottom-0 left-0 z-20 p-6">
                    <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                      {t(roomsShowcase.rooms[2]!.title)}
                    </p>
                    <div className="flex py-0.5">
                      <p
                        onClick={() => setId(roomsShowcase.rooms[2]!.id)}
                        className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                      >
                        {t('Discover now')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-100 pb-8 sm:pb-12 md:pt-0 lg:px-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              ref={room.id === id ? ref : null}
              className="bg-zinc-100 pb-8 lg:p-8"
            >
              <div className="mx-auto mt-8 grid w-full max-w-screen-md grid-cols-12 md:max-w-screen-2xl md:items-center">
                {room.id % 2 === 0 && (
                  <>
                    <div className="z-0 col-span-12 lg:z-20 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${room.id}-carousel`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <Carousel imageList={room.images} />
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                      <div className="h-fix bg-white p-4 sm:p-12 md:px-8">
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
                                    {t(amenitie)}
                                  </li>
                                </ul>
                              ))}
                            </div>
                            <div>
                              <Link
                                href="/contact"
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
                    <div className="z-0 col-span-12 lg:z-20 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${room.id}-carousel`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <Carousel imageList={room.images} />
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                      <div className="h-fix bg-white p-4 sm:p-12 md:px-8">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 lg:pl-24 xl:py-24 xl:pl-32">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black lg:text-3xl">
                                {t(room.name)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                                {t(room.description)}
                              </p>
                            </div>

                            <div className="container mt-4 p-2 lg:mt-0 xl:mt-0">
                              {room.amenities.map((amenitie, index) => (
                                <ul
                                  key={`${index}-${amenitie}`}
                                  className="ml-0 list-inside list-disc"
                                >
                                  <li className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                                    {t(amenitie)}
                                  </li>
                                </ul>
                              ))}
                            </div>
                            <div>
                              <Link
                                href="/contact"
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
      </Layout>
    </>
  );
};

export default Rooms;
