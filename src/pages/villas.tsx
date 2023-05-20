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
          <div className="container mt-16 pl-8 md:pl-16 lg:pl-16 xl:pl-16 2xl:pl-48">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                <li>
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="mr-2 text-xl font-medium text-gray-900"
                    >
                      Home
                    </Link>
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>

                <li className="text-xl">
                  <Link
                    href="/villas"
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    Villas
                  </Link>
                </li>
              </ol>
            </nav>
          </div>

          <div className="mt-4 flex flex-col items-center justify-center py-0 md:py-6 lg:mt-2 lg:mb-20 lg:flex-row">
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
                  href="/contact/#book"
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
                  className="img-gradient my-12  h-auto overflow-hidden lg:my-0 lg:block"
                >
                  <Image
                    src={villa.imageSrc}
                    alt={villa.imageAlt}
                    className="h-full w-full object-cover"
                    // fill={true}
                    sizes="100vw, 100vh"
                    quality={100}
                    placeholder="blur"
                    blurDataURL="https://drive.google.com/uc?export=view&id=1N3ZvyFfciBXAHWefS85a_0f_HEAZOYUy"
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
              ))}
            </div>
          </div>
        </div>

        <div className="bg-zinc-100 pb-8 sm:pb-12 md:pt-0 lg:px-8">
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
                <div className="container col-span-11 mb-16 bg-white p-4 sm:p-14 md:mb-16 lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-1 lg:mb-0 lg:px-4 lg:py-12">
                  {villa.facilities.map((facilitie, index) => (
                    <div key={`${villa.name}-facilities-${index}`}>
                      {index < 5 && (
                        <div>
                          <div className="flex px-3 py-3.5">
                            <p className="mr-2 w-32 p-1 text-sm font-semibold leading-snug text-black/70 sm:min-w-[40%] sm:text-lg">
                              {facilitie.title}
                            </p>
                            <ul
                              key={`${villa.name}-${facilitie.title}`}
                              className="ml-0 list-outside list-disc sm:min-w-[60%]"
                            >
                              {facilitie.details.map((details) => (
                                <li
                                  key={`${villa.name}-${facilitie.title}-${details}`}
                                  className="mx-4 p-1 text-sm font-normal leading-snug text-black/70 sm:text-lg"
                                >
                                  {details}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="container col-span-11 bg-white p-4 sm:p-14 lg:col-start-7 lg:col-end-12 lg:row-start-1 lg:row-end-1 lg:px-4 lg:py-12">
                  {villa.facilities.map((facilitie, index) => (
                    <div key={`${villa.name}-facilities-${index}`}>
                      {index > 5 && (
                        <div>
                          <div className="flex p-3">
                            <p className="mr-2 w-32 p-1 text-sm font-semibold leading-snug text-black/70 sm:min-w-[40%] sm:text-lg">
                              {facilitie.title}
                            </p>
                            <ul
                              key={`${villa.name}-${facilitie.title}`}
                              className="ml-0 list-outside list-disc sm:min-w-[60%]"
                            >
                              {facilitie.details.map((details) => (
                                <li
                                  key={`${villa.name}-${facilitie.title}-${details}`}
                                  className="mx-4 p-1 text-sm font-normal leading-snug text-black/70 sm:text-lg"
                                >
                                  {details}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Villas;
