import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Carousel from '@/components/Carousel';
import { home, pageInfo } from '@/constants/home';
import Layout from '@/layouts/Layout';
import { Meta } from '@/layouts/Meta';

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <Layout
        meta={<Meta title={pageInfo.title} description={pageInfo.desription} />}
      >
        <div className="hero-img-gradient h-130 w-full">
          <Image
            src={home.images[0]?.imageSrc!}
            alt={home.images[0]?.imageAlt!}
            sizes="100vw, 100vh"
            className="h-full w-full object-cover object-center"
            placeholder="blur"
          />
          {/* }inset-x-0 top-0 h-auto sm:h-[53rem]
          hero-img-gradient */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center p-6">
            <p className="py-0.5 text-xl font-normal leading-snug text-white sm:text-5xl">
              AN UNRIVALLED WELCOME
            </p>

            <div className="flex py-0.5">
              <p className="py-0.5 text-lg font-light italic leading-snug text-white sm:text-3xl">
                in the heart of Podstrana
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary flex h-auto w-full items-center justify-center py-12 sm:py-20 xl:px-20">
          <div className="container px-8 text-center sm:px-12 md:px-28 xl:w-3/5">
            <p className="text-xl font-semibold text-white sm:text-3xl">
              {t('Welcome to Luxury Hotel Božikovina')}
            </p>
            <p className="mt-2 text-justify text-sm leading-snug text-white/70 sm:text-lg">
              {t(
                'Luxury Hotel Božikovina is warm and friendly hotel located in Podstrana just 7km from city of Split. This is a modern, relaxed luxury - Dalmatian style hotel, built in 2002 and at the highest European standards renovated in 2022. Thanks to its enchanting heritage, Podstrana is evolving into an elite cultural site, and its main attractions are a beautiful location with crystal clear sea, mild climate and beautiful pebble beaches.'
              )}
            </p>

            <Link
              href="/contact/#book"
              className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
            >
              {t('LEARN MORE')}
            </Link>
          </div>
        </div>

        <div className="bg-zinc-100 pb-8 sm:pb-20 md:pt-0 lg:px-8">
          <div className="bg-zinc-100 pb-8 lg:p-8">
            <div className="mx-auto grid w-full max-w-screen-sm grid-cols-12 md:max-w-screen-2xl md:items-center lg:mt-16 lg:px-2">
              <div className="md:col-span-auto z-0 col-span-12 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-1">
                <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                  <div className="absolute inset-0">
                    <Image
                      src={home.images[1]?.imageSrc!}
                      alt={home.images[1]?.imageAlt!}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                <div className="bg-white p-4 sm:p-12 md:px-8">
                  <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                    <div className="container flex flex-col">
                      <div className="container">
                        <p className="text-xl font-semibold text-black lg:text-3xl">
                          {t('A different perspective')}
                        </p>
                        <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                          {t(
                            'Hotel Bozikovina is a family-run, award-winning design hotel with sustainability at its foundation. You will find us at a comfortable distance from the noise and rush of the old city centre. Close enough to discover the rich cultural heritage and its nearby natural amenities. A carefree retreat with a priceless view of the Adriatic Sea, just a few steps from a pebble beach.'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 grid w-full max-w-screen-sm grid-cols-12 md:max-w-screen-2xl md:items-center lg:mt-24 lg:px-2">
              <div className="md:col-span-auto z-0 col-span-12 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-1">
                <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                  <div className="absolute inset-0 h-full w-full object-cover">
                    <Image
                      src={home.images[2]?.imageSrc!}
                      alt={home.images[2]?.imageAlt!}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                <div className="bg-white p-4 sm:p-12 md:px-8">
                  <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                    <div className="container flex flex-col">
                      <div className="container">
                        <p className="text-xl font-semibold text-black lg:text-3xl">
                          {t('Workplace and beyond')}
                        </p>
                        <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                          {t(
                            'Meaningful gatherings can only be held in an equally significant space. Following the same line and concept, we host an array of events, from private celebrations to business meetings. As in every supportive home, our professional staff is fully committed to your desired results, whatever the context.'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
        <div className="h-auto w-full bg-zinc-100 pb-20 sm:h-[55rem] sm:px-48">
          <Carousel imageList={home.carouselImages} />
        </div>
        

        <div className="bg-zinc-100 pb-20 w-full h-[20rem] md:h-[40rem] 2xl:h-[55rem] sm:px-48">
          <Carousel imageList={home.carouselImages} />
        </div> */}

        <div className="h-3xl h-[20rem] bg-zinc-100 p-0 pb-20 md:h-[48rem] lg:px-[4.5rem] xl:px-[4.5rem] 2xl:h-[58rem]">
          <Carousel imageList={home.carouselImages} />
        </div>

        <div className="bg-zinc-100 pb-8 sm:pb-20 md:pt-0 lg:px-8">
          <div className="bg-zinc-100 pb-8 lg:p-8">
            <div className="mx-auto grid w-full max-w-screen-sm grid-cols-12 md:max-w-screen-2xl md:items-center lg:px-2">
              <div className="md:col-span-auto z-0 col-span-12 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-1">
                <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                  <div className="absolute inset-0">
                    <Image
                      src={home.images[3]?.imageSrc!}
                      alt={home.images[3]?.imageAlt!}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                <div className="bg-white p-4 sm:p-12 md:px-8">
                  <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                    <div className="container flex flex-col">
                      <div className="container">
                        <p className="text-xl font-semibold text-black lg:text-3xl">
                          {t('Unique in every way')}
                        </p>
                        <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                          {t(
                            'Hotel Božikovina has been a trailblazer in green sustainable design hotels on this side of Adriatic, and since then many have followed this path. Hospitality and the environment are two closely related concepts. That is why, from the very beginning, we were determined to make decisions that would not comprise our shared future.'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 grid w-full max-w-screen-sm grid-cols-12 md:max-w-screen-2xl md:items-center lg:mt-24 lg:px-2">
              <div className="md:col-span-auto z-0 col-span-12 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-1">
                <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                  <div className="absolute inset-0 h-full w-full object-cover">
                    <Image
                      src={home.images[4]?.imageSrc!}
                      alt={home.images[4]?.imageAlt!}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                <div className="bg-white p-4 sm:p-12 md:px-8">
                  <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                    <div className="container flex flex-col">
                      <div className="container">
                        <p className="text-xl font-semibold text-black lg:text-3xl">
                          {t('Be a Part of the Story')}
                        </p>
                        <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                          {t(
                            'From reception to the bar and ultimately to the iconic terrace, the story of Hotel Božikovina is unfolded before guests eyes. Walls are enhanced with framed photographs capturing the 1930s when the hotel started its journey and follows through to the modern luxurious art-deco style used today to continue this special story that Hotel Park has been telling for a century.'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-white py-12 sm:py-20 xl:px-20">
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
              href="/contact/#book"
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

export default Index;
