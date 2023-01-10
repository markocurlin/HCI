import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import heroImage from '@/assets/home/heroImage.jpg';
import image1 from '@/assets/home/image1.jpg';
import image2 from '@/assets/home/image2.jpg';
import Carousel from '@/components/Carousel';
import { carouselImages, pageInfo } from '@/constants/home';
import Layout from '@/layouts/Layout';
import { Meta } from '@/layouts/Meta';

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <Layout
        meta={<Meta title={pageInfo.title} description={pageInfo.desription} />}
      >
        <div className="h-130 w-full">
          <Image
            src={heroImage}
            alt="Hero image of hotel"
            sizes="100vw, 100vh"
            className="h-full w-full object-cover object-center"
            placeholder="blur"
          />
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
              href="#"
              className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
            >
              {t('LEARN MORE')}
            </Link>
          </div>
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-white">
          <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <div className="px-8 pt-12 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pl-12">
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
                src={image1}
                alt="image1"
                width={540}
                height={764}
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-zinc-50">
          <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <div className="hidden items-center justify-center px-8 py-12 lg:flex lg:p-24 lg:pl-8 xl:pl-12">
              <Image
                src={image2}
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
                src={image2}
                alt="image2"
                width={540}
                height={764}
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className="h-130 w-full">
          <Carousel imageList={carouselImages} />
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-white">
          <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <div className="px-8 pt-12 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pl-12">
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
                src={image1}
                alt="image1"
                width={540}
                height={764}
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full items-center justify-center bg-zinc-50">
          <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <div className="hidden items-center justify-center px-8 py-12 lg:flex lg:p-24 lg:pl-8 xl:pl-12">
              <Image
                src={image2}
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
                src={image2}
                alt="image2"
                width={540}
                height={764}
                placeholder="blur"
              />
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

export default Index;
