import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Carousel from '@/components/Carousel';
import { pageInfo, villas } from '@/constants/villas';
import Layout from '@/layouts/Layout';
import { Meta } from '@/layouts/Meta';

const Villas = () => {
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
            <div className="mx-8 mt-6 flex flex-col justify-center sm:px-10 lg:px-8">
              <div className="sm:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Villas
                </h1>
                <p className="text-md mt-4 text-justify leading-snug tracking-tight text-black/70 sm:text-xl">
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
            <div className="mx-8 mt-6 max-w-2xl sm:px-1 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              {villas.map((villa) => (
                <div
                  key={villa.id}
                  className="lg:grid lg:grid-cols-1 lg:gap-y-8"
                >
                  <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto">
                    <Image
                      src={villa.imageSrc}
                      alt={villa.imageAlt}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                    />
                    <div className="absolute bottom-0 left-0 z-20 p-6">
                      <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                        {villa.name}
                      </p>
                      <div className="flex py-0.5">
                        <p
                          onClick={() => setId(villa.id)}
                          className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                        >
                          Discover now
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-zinc-100 pb-8 sm:py-12 md:pt-0 lg:px-8">
          {villas.map((villa) => (
            <div
              key={villa.id}
              ref={villa.id === id ? ref : null}
              className="bg-zinc-100 pb-8 lg:p-8"
            >
              <div className="mx-auto mt-8 grid w-full max-w-screen-md grid-cols-12 md:mt-0 md:max-w-screen-2xl md:items-center lg:mt-16">
                {villa.id % 2 === 0 && (
                  <>
                    <div className="md:col-span-auto z-0 col-span-12 lg:z-20 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${villa.id}-carousel`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <Carousel imageList={villa.images} />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                      <div className="bg-white p-4 sm:p-12 md:px-8">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black lg:text-3xl">
                                {t(`${villa.name}`)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base lg:pr-24 xl:pr-32">
                                {t(`${villa.description1}`)}
                              </p>
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

                {villa.id % 2 !== 0 && (
                  <>
                    <div className="md:col-span-auto z-0 col-span-12 lg:z-20 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${villa.id}-carousel`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <Carousel imageList={villa.images} />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                      <div className="bg-white p-4 sm:p-12 md:px-8">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 lg:pl-24 xl:py-24 xl:pl-32">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black lg:text-3xl">
                                {t(`${villa.name}`)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                                {t(`${villa.description1}`)}
                              </p>
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

              <div className="mx-auto mt-16 mb-4 grid w-full max-w-screen-md grid-cols-11 justify-items-center px-10 sm:mt-24 md:mb-8 md:mt-16 md:max-w-screen-2xl md:px-24 lg:mt-24">
                <div className="container col-span-11 mb-16 bg-white p-4 sm:p-12 md:mb-16 lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-1 lg:mb-0">
                  {villas[0]!.facilities.map((facilitie, index) => (
                    <>
                      {index < 5 && (
                        <div key={`${index}-${facilitie.title}`}>
                          <div className="flex p-3">
                            <p className="w-40 p-1 text-sm font-semibold leading-snug text-black/70 sm:w-60 sm:text-lg">
                              {facilitie.title}
                            </p>
                            <ul
                              key={`${index}-${facilitie}`}
                              className="ml-0 list-inside list-disc"
                            >
                              {facilitie.details.map((details) => (
                                <li
                                  key={`${index}-${details}`}
                                  className="mx-4 w-40 p-1 text-justify text-sm font-normal leading-snug text-black/70 sm:w-60 sm:text-lg"
                                >
                                  {details}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </div>

                <div className="container col-span-11 bg-white p-12 lg:col-start-7 lg:col-end-12 lg:row-start-1 lg:row-end-1">
                  {villas[0]!.facilities.map((facilitie, index) => (
                    <>
                      {index > 5 && (
                        <div key={`${index}-${facilitie.title}`}>
                          <div className="flex p-3">
                            <p className="w-40 p-1 text-sm font-semibold leading-snug text-black/70 sm:w-60 sm:text-lg">
                              {facilitie.title}
                            </p>
                            <ul
                              key={`${index}-${facilitie}`}
                              className="ml-0 list-inside list-disc"
                            >
                              {facilitie.details.map((details) => (
                                <li
                                  key={`${index}-${details}`}
                                  className="mx-4 w-40 p-1 text-justify text-sm font-normal leading-snug text-black/70 sm:w-60 sm:text-lg"
                                >
                                  {details}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* }
        <div className="bg-zinc-100 pb-8 sm:py-12 lg:px-8">
          <div
            key={villas[0]!.id}
            ref={villas[0]!.id === id ? ref : null}
            className="bg-zinc-100 pb-8 lg:p-8"
          >
            <div className="mx-auto mt-8 grid w-full max-w-screen-md grid-cols-12 md:max-w-screen-2xl md:items-center">
              <div className="md:col-span-auto z-0 col-span-12 lg:z-20 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-1">
                <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                  <div
                    key={`${villas[0]!.id}-carousel`}
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <Carousel imageList={villas[0]!.images} />
                  </div>
                </div>
              </div>
              <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                <div className="bg-white p-4 sm:p-12 md:px-8">
                  <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                    <div className="container flex flex-col">
                      <div className="container">
                        <p className="text-xl font-semibold text-black lg:text-3xl">
                          {t(`${villas[0]!.name}`)}
                        </p>
                        <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base lg:pr-24 xl:pr-32">
                          {t(`${villas[0]!.description1}`)}
                        </p>
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
            </div>

            <div className="mx-auto my-8 grid w-full max-w-screen-md grid-cols-11 justify-items-center px-10 sm:my-24 md:max-w-screen-2xl md:px-24">
              <div className="container col-span-11 mt-4 bg-white p-12 lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-1">
                {villas[0]!.facilities.map((facilitie, index) => (
                  <>
                    {index < 5 && (
                      <div key={`${index}-${facilitie.title}`}>
                        <div className="flex p-3">
                          <p className="w-40 p-1 text-sm font-semibold leading-snug text-black/70 sm:w-60 sm:text-lg">
                            {facilitie.title}
                          </p>
                          <ul
                            key={`${index}-${facilitie}`}
                            className="ml-0 list-inside list-disc"
                          >
                            {facilitie.details.map((details) => (
                              <li
                                key={`${index}-${details}`}
                                className="mx-4 w-40 p-1 text-justify text-sm font-normal leading-snug text-black/70 sm:w-60 sm:text-lg"
                              >
                                {details}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>

              <div className="container col-span-11 mt-4 bg-white p-12 lg:col-start-7 lg:col-end-12 lg:row-start-1 lg:row-end-1">
                {villas[0]!.facilities.map((facilitie, index) => (
                  <>
                    {index > 5 && (
                      <div key={`${index}-${facilitie.title}`}>
                        <div className="flex p-3">
                          <p className="w-40 p-1 text-sm font-semibold leading-snug text-black/70 sm:w-60 sm:text-lg">
                            {facilitie.title}
                          </p>
                          <ul
                            key={`${index}-${facilitie}`}
                            className="ml-0 list-inside list-disc"
                          >
                            {facilitie.details.map((details) => (
                              <li
                                key={`${index}-${details}`}
                                className="mx-4 w-40 p-1 text-justify text-sm font-normal leading-snug text-black/70 sm:w-60 sm:text-lg"
                              >
                                {details}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*
        <div className="bg-zinc-100 pb-8 sm:py-12 lg:px-8">
          {villas.map((villa) => (
            <div
              key={villa.id}
              ref={villa.id === id ? ref : null}
              className="bg-zinc-100 pb-8 lg:p-8"
            >
              <div className="mx-auto mt-8 grid w-full max-w-screen-md grid-cols-12 md:max-w-screen-2xl md:items-center">
                {villa.id % 2 === 0 && (
                  <>
                    <div className="md:col-span-auto z-0 col-span-12 lg:z-20 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${villa.id}-carousel`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <Carousel imageList={villa.images} />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                      <div className="bg-white p-4 sm:p-12 md:px-8">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black lg:text-3xl">
                                {t(`${villa.name}`)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base lg:pr-24 xl:pr-32">
                                {t(`${villa.description1}`)}
                              </p>
                            </div>
                            {/*
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

                {villa.id % 2 !== 0 && (
                  <>
                    <div className="md:col-span-auto z-0 col-span-12 lg:z-20 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${villa.id}-carousel`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <Carousel imageList={villa.images} />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                      <div className="bg-white p-4 sm:p-12 md:px-8">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 lg:pl-24 xl:py-24 xl:pl-32">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black lg:text-3xl">
                                {t(`${villa.name}`)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                                {t(`${villa.description1}`)}
                              </p>
                            </div>
                            {/*}
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
        </div> */}

        {/* }
        <div>
          {villas.map((villa) => (
            <div key={villa.id} ref={villa.id === id ? ref : null}>
              <div className="flex flex-col items-center p-8">
                <p className="text-2xl font-semibold text-black sm:text-4xl">
                  {villa.name}
                </p>
                <hr className="my-4 w-14" />
                <p className="text-sm leading-snug text-black/60 sm:text-lg">
                  MARVELLOUS VILLA WITH AMAZING VIEW AND POOL
                </p>
                <Link
                  href="/contact/#book"
                  className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
                >
                  {t('BOOK NOW')}
                </Link>
              </div>

              <div className="flex h-auto w-full items-center justify-center bg-white">
                <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
                  <div className="px-8 pt-12 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pl-12">
                    <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
                      {villa.description1}
                    </p>
                  </div>

                  <div className="flex items-center justify-center px-8 py-12 lg:p-24 lg:pr-8 xl:pr-12">
                    <Image
                      src={villa.images[0]?.imageSrc!}
                      alt={villa.images[0]?.imageAlt!}
                      width={540}
                      height={764}
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>

              <div className="flex h-auto w-full items-center justify-center">
                <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
                  <div className="hidden items-center justify-center px-8 py-12 lg:flex lg:p-24 lg:pl-8 xl:pl-12">
                    <Image
                      src={villa.images[1]?.imageSrc!}
                      alt={villa.images[1]?.imageAlt!}
                      width={540}
                      height={764}
                      placeholder="blur"
                    />
                  </div>

                  <div className="px-8 pt-12 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pr-12 xl:pl-12">
                    <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
                      {villa.description2}
                    </p>
                  </div>

                  <div className="flex items-center justify-center px-8 py-12 lg:hidden lg:p-24 lg:pl-8 xl:pl-12">
                    <Image
                      src={villa.images[1]?.imageSrc!}
                      alt={villa.images[1]?.imageAlt!}
                      width={540}
                      height={764}
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50">
                <div className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="flex h-auto w-full items-center justify-center">
                    <div className="">
                      <div className="mb-12 flex flex-col items-center py-2">
                        <p className="text-2xl font-semibold text-black sm:text-4xl">
                          Facilities
                        </p>
                        <hr className="my-4 w-14" />
                        <p className="text-sm leading-snug text-black/60 sm:text-lg">
                          DETAILS ABOUT THE VILLA
                        </p>
                      </div>
                      <div className="">
                        <hr />
                        {villa.facilities?.map((facilitie, index) => (
                          <div key={`${index}-${facilitie.title}`}>
                            <div className="my-5 flex p-3">
                              <p className="w-40 p-1 text-sm font-semibold leading-snug text-black/70 sm:w-60 sm:text-lg">
                                {facilitie.title}
                              </p>
                              <ul className="flex flex-1 list-outside list-disc flex-wrap text-sm text-white">
                                {facilitie.details.map((details) => (
                                  <li
                                    key={`${index}-${details}`}
                                    className="mx-4 w-40 p-1 text-justify text-sm font-normal leading-snug text-black/70 sm:w-60 sm:text-lg"
                                  >
                                    {details}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <hr />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div key={`${villa.id}-carousel`} className="h-130 w-full">
                  <Carousel imageList={villa.images} />
                </div>
              </div>
            </div>
          ))}
      </div> */}
      </Layout>
    </>
  );
};

export default Villas;
