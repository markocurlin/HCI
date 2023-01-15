import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
/*
import barimage from '@/assets/services/bar1.jpg';
import diningimage from '@/assets/services/dining.jpg';
import heroimage1 from '@/assets/services/heroimage-1.jpg';
import heroimage2 from '@/assets/services/heroimage-2.jpg';
import heroimage3 from '@/assets/services/heroimage-3.jpg';
import heroimage4 from '@/assets/services/heroimage-4.jpg';
import heroimage5 from '@/assets/services/heroimage-5.jpg';
import heroimage6 from '@/assets/services/heroimage-6.jpg';
import heroimage7 from '@/assets/services/heroimage-7.jpg';
import poolimage from '@/assets/services/pool1.jpg'; */
import room3 from 'src/assets/home/carousel-image1.jpg';
import room2 from 'src/assets/home/carousel-image5.jpg';

// import room1 from 'src/assets/home/image1.jpg';
import { pageInfo, services } from '@/constants/services';
import Layout from '@/layouts/Layout';
import { Meta } from '@/layouts/Meta';

const Services = () => {
  const [id, setId] = useState(4);
  const ref = useRef<null | HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setId(10);
  }, [id]);

  return (
    <>
      <Layout
        meta={
          <Meta title={pageInfo.title} description={pageInfo.description} />
        }
      >
        <div className="bg-white">
          <div className="mt-4 flex flex-col items-center justify-center py-6 lg:mt-16 lg:mb-20 lg:flex-row">
            <div className="mx-10 mt-6 flex flex-col justify-center sm:px-6 lg:px-8">
              <div className="sm:max-w-md">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Services
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

            <div className="mx-10 mt-6 max-w-2xl sm:px-1 lg:grid lg:max-w-4xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
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
                      Restaurant
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
                <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto">
                  <Image
                    src={room3}
                    alt="soba3"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute bottom-0 left-0 z-20 p-6">
                    <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                      Bar
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
                      Pool
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
                <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto">
                  <Image
                    src={room3}
                    alt="soba3"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute bottom-0 left-0 z-20 p-6">
                    <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                      Massage
                    </p>
                    <div className="flex py-0.5">
                      <p
                        onClick={() => setId(3)}
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
                      Sauna
                    </p>
                    <div className="flex py-0.5">
                      <p
                        onClick={() => setId(4)}
                        className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                      >
                        Discover now
                      </p>
                    </div>
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
                      Private airport shuttle
                    </p>
                    <div className="flex py-0.5">
                      <p
                        onClick={() => setId(5)}
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
                      Private tour shuttle
                    </p>
                    <div className="flex py-0.5">
                      <p
                        onClick={() => setId(6)}
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
                      Elevator
                    </p>
                    <div className="flex py-0.5">
                      <p
                        onClick={() => setId(7)}
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
          {services.map((service) => (
            <div
              key={service.id}
              ref={service.id === id ? ref : null}
              className="bg-zinc-100 pb-8 sm:p-8"
            >
              <div className="mx-auto mt-8 grid w-full max-w-screen-sm grid-cols-12 sm:px-2 md:max-w-screen-2xl md:items-center">
                {service.id % 2 === 0 && (
                  <>
                    <div className="md:col-span-auto z-0 col-span-12 sm:z-20 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${service.id}-image`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <Image
                            src={service.imageSrc}
                            alt={service.imageAlt}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 md:mt-0 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-1">
                      <div className="bg-white p-4 sm:p-12 md:px-8 lg:py-4">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black sm:text-4xl">
                                {t(`${service.title}`)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base lg:pr-24 xl:pr-32">
                                {t(`${service.description}`)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {service.id % 2 !== 0 && (
                  <>
                    <div className="md:col-span-auto z-0 col-span-12 sm:z-20 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${service.id}-image`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <Image
                            src={service.imageSrc}
                            alt={service.imageAlt}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 md:mt-0 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-1">
                      <div className="bg-white p-4 sm:p-12 md:px-8 lg:py-4">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 lg:pl-24 xl:py-24 xl:pl-32">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black sm:text-4xl">
                                {t(`${service.title}`)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                                {t(`${service.description}`)}
                              </p>
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

        {/* services.map((service, index) => (
          <div
            key={index}
            className="flex h-auto w-full items-center justify-center bg-zinc-50"
          >
            <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
              {index % 2 === 0 && (
                <div className="hidden items-center justify-center px-8 py-12 lg:flex lg:p-24 lg:pl-8 xl:pl-12">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={540}
                    height={764}
                    placeholder="blur"
                  />
                </div>
              )}

              <div className="px-8 pt-12 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pr-12 xl:pl-12">
                <p className="text-xl font-semibold text-black sm:text-3xl">
                  {service.title}
                </p>

                <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
                  {service.description}
                </p>
              </div>

              {index % 2 === 0 && (
                <div className="flex items-center justify-center px-8 py-12 lg:hidden lg:p-24 lg:pl-8 xl:pl-12">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={540}
                    height={764}
                    placeholder="blur"
                  />
                </div>
              )}

              {index % 2 !== 0 && (
                <div className="flex items-center justify-center px-8 py-12 lg:p-24 lg:pr-8 xl:pr-12">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={540}
                    height={764}
                    placeholder="blur"
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="flex h-auto w-full items-center justify-center bg-zinc-50">
          <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <div className="hidden items-center justify-center px-8 py-12 lg:flex lg:p-24 lg:pl-8 xl:pl-12">
              <Image
                src={diningimage}
                alt="image2"
                width={540}
                height={764}
                placeholder="blur"
              />
            </div>

            <div className="px-8 pt-12 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pr-12 xl:pl-12">
              <p className="text-xl font-semibold text-black sm:text-3xl">
                {t('Workplace and beyond')}
              </p>

              <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
                {t(
                  'Meaningful gatherings can only be held in an equally significant space. Following the same line and concept, we host an array of events, from private celebrations to business meetings. As in every supportive home, our professional staff is fully committed to your desired results, whatever the context.'
                )}
              </p>
            </div>

            <div className="flex items-center justify-center px-8 py-12 lg:hidden lg:p-24 lg:pl-8 xl:pl-12">
              <Image
                src={diningimage}
                alt="image2"
                width={540}
                height={764}
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-zinc-50">
          <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <div className="px-8 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pl-12">
              <p className="text-xl font-semibold text-black sm:text-3xl">
                {t('A different perspective')}
              </p>

              <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
                {t(
                  'Hotel Bozikovina is a family-run, award-winning design hotel with sustainability at its foundation. You will find us at a comfortable distance from the noise and rush of the old city centre. Close enough to discover the rich cultural heritage and its nearby natural amenities. A carefree retreat with a priceless view of the Adriatic Sea, just a few steps from a pebble beach.'
                )}
              </p>
            </div>

            <div className="flex items-center justify-center px-8 py-12 lg:p-24 lg:pr-8 xl:pr-12">
              <Image
                src={barimage}
                alt="image1"
                width={540}
                height={764}
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-white">
          <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <div className="hidden items-center justify-center px-8 py-12 lg:flex lg:p-24 lg:pl-8 xl:pl-12">
              <Image src={poolimage} alt="image2" width={540} height={764} />
            </div>

            <div className="px-8 pt-12 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pr-12 xl:pl-12">
              <p className="text-xl font-semibold text-black sm:text-3xl">
                {t('Workplace and beyond')}
              </p>

              <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
                {t(
                  'Meaningful gatherings can only be held in an equally significant space. Following the same line and concept, we host an array of events, from private celebrations to business meetings. As in every supportive home, our professional staff is fully committed to your desired results, whatever the context.'
                )}
              </p>
            </div>

            <div className="flex items-center justify-center px-8 py-12 lg:hidden lg:p-24 lg:pl-8 xl:pl-12">
              <Image
                src={diningimage}
                alt="image2"
                width={540}
                height={764}
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-white">
          <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <div className="px-8 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pl-12">
              <p className="text-xl font-semibold text-black sm:text-3xl">
                {t('A different perspective')}
              </p>

              <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
                {t(
                  'Hotel Bozikovina is a family-run, award-winning design hotel with sustainability at its foundation. You will find us at a comfortable distance from the noise and rush of the old city centre. Close enough to discover the rich cultural heritage and its nearby natural amenities. A carefree retreat with a priceless view of the Adriatic Sea, just a few steps from a pebble beach.'
                )}
              </p>
            </div>

            <div className="flex items-center justify-center px-8 py-12 lg:p-24 lg:pr-8 xl:pr-12">
              <Image
                src={barimage}
                alt="image1"
                width={540}
                height={764}
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-white pb-12 sm:py-20 xl:px-20">
          <div className="container px-8 text-center sm:px-12 md:px-28 xl:w-3/5">
            <p className="text-xl font-semibold text-black sm:text-3xl">
              {t('Your unforgettable adventure awaits')}
            </p>
            <p className="mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
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

export default Services;
