import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import heroimage from 'src/assets/villas/heroimage.jpeg';

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
        <div className="h-130 w-full">
          <Image
            src={heroimage}
            alt="Hero image of villa"
            sizes="100vw, 100vh"
            className="h-full w-full object-cover object-center"
            placeholder="blur"
          />
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl p-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-black">
              {t('Villas')}
            </h2>

            <div className="mt-0 flex flex-col items-center justify-center md:mt-4 md:flex-row">
              {villas.map((villa) => (
                <div
                  key={villa.id}
                  className="group container mx-0 my-4 p-4 md:mx-6 md:mb-0 md:w-80 md:p-0"
                >
                  <div
                    onClick={() => setId(villa.id)}
                    className="lg:aspect-none h-80 overflow-hidden bg-black group-hover:opacity-95 md:w-80 md:p-0"
                  >
                    <Image
                      src={villa.images[0]?.imageSrc!}
                      alt={villa.images[0]?.imageAlt!}
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between md:w-80 md:p-0">
                    <div>
                      <p className="text-justify text-lg font-semibold leading-snug tracking-tight text-black/70">
                        {t(`${villa.name}`)}
                      </p>
                    </div>
                    <button
                      onClick={() => setId(villa.id)}
                      className="bg-secondary bg-hover-secondary inline-flex items-center justify-center whitespace-nowrap border border-transparent p-2 text-base font-medium text-white shadow-sm"
                    >
                      <ArrowRightIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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

export default Villas;
