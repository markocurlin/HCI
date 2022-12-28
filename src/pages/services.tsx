import Image from 'next/image';
import Link from 'next/link';
import barimage from 'src/assets/bar.jpg';
import diningimage from 'src/assets/dining.jpg';
import heroimage1 from 'src/assets/heroimage-1.jpg';
import heroimage2 from 'src/assets/heroimage-2.jpg';
import heroimage3 from 'src/assets/heroimage-3.jpg';
import heroimage4 from 'src/assets/heroimage-4.jpg';
import heroimage5 from 'src/assets/heroimage-5.jpg';
import heroimage6 from 'src/assets/heroimage-6.jpg';
import heroimage7 from 'src/assets/heroimage-7.jpg';
import poolimage from 'src/assets/pool.jpg';

import Layout from '@/layouts/Layout';

const Services = () => {
  return (
    <Layout>
      <div className="relative mt-10 overflow-hidden bg-white lg:my-10">
        <div className="pt-8 pb-80 sm:pt-24 sm:pb-40 lg:pt-60 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesnt care if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            src={heroimage1}
                            alt="heroimage1"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={heroimage2}
                            alt="heroimage2"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={heroimage3}
                            alt="heroimage3"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={heroimage4}
                            alt="heroimage4"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={heroimage5}
                            alt="heroimage5"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={heroimage6}
                            alt="heroimage6"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={heroimage7}
                            alt="heroimage7"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-auto w-full items-center justify-center bg-zinc-50">
        <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
          <div className="hidden items-center justify-center px-8 py-12 lg:flex lg:p-24 lg:pl-8 xl:pl-12">
            <Image src={diningimage} alt="image2" width={540} height={764} />
          </div>

          <div className="px-8 pt-12 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pr-12 xl:pl-12">
            <p className="text-xl font-semibold text-black sm:text-3xl">
              Workplace and beyond
            </p>

            <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
              Meaningful gatherings can only be held in an equally significant
              space. Following the same line and concept, we host an array of
              events, from private celebrations to business meetings. As in
              every supportive home, our professional staff is fully committed
              to your desired results, whatever the context.
            </p>
          </div>

          <div className="flex items-center justify-center px-8 py-12 lg:hidden lg:p-24 lg:pl-8 xl:pl-12">
            <Image src={diningimage} alt="image2" width={540} height={764} />
          </div>
        </div>
      </div>

      <div className="flex h-auto w-full items-center justify-center bg-zinc-50">
        <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
          <div className="px-8 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pl-12">
            <p className="text-xl font-semibold text-black sm:text-3xl">
              A different perspective
            </p>

            <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
              Hotel Bozikovina is a family-run, award-winning design hotel with
              sustainability at its foundation. You will find us at a
              comfortable distance from the noise and rush of the old city
              centre. Close enough to discover the rich cultural heritage and
              its nearby natural amenities. A carefree retreat with a priceless
              view of the Adriatic Sea, just a few steps from a pebble beach.
            </p>
          </div>

          <div className="flex items-center justify-center px-8 py-12 lg:p-24 lg:pr-8 xl:pr-12">
            <Image src={barimage} alt="image1" width={540} height={764} />
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
              Workplace and beyond
            </p>

            <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
              Meaningful gatherings can only be held in an equally significant
              space. Following the same line and concept, we host an array of
              events, from private celebrations to business meetings. As in
              every supportive home, our professional staff is fully committed
              to your desired results, whatever the context.
            </p>
          </div>

          <div className="flex items-center justify-center px-8 py-12 lg:hidden lg:p-24 lg:pl-8 xl:pl-12">
            <Image src={diningimage} alt="image2" width={540} height={764} />
          </div>
        </div>
      </div>

      <div className="flex h-auto w-full items-center justify-center bg-white">
        <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
          <div className="px-8 sm:px-12 md:px-28 lg:w-5/12 lg:p-7 lg:pl-12">
            <p className="text-xl font-semibold text-black sm:text-3xl">
              A different perspective
            </p>

            <p className="w-custom mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
              Hotel Bozikovina is a family-run, award-winning design hotel with
              sustainability at its foundation. You will find us at a
              comfortable distance from the noise and rush of the old city
              centre. Close enough to discover the rich cultural heritage and
              its nearby natural amenities. A carefree retreat with a priceless
              view of the Adriatic Sea, just a few steps from a pebble beach.
            </p>
          </div>

          <div className="flex items-center justify-center px-8 py-12 lg:p-24 lg:pr-8 xl:pr-12">
            <Image src={barimage} alt="image1" width={540} height={764} />
          </div>
        </div>
      </div>

      <div className="flex h-auto w-full items-center justify-center bg-white pb-12 sm:py-20 xl:px-20">
        <div className="container px-8 text-center sm:px-12 md:px-28 xl:w-3/5">
          <p className="text-xl font-semibold text-black sm:text-3xl">
            Your unforgettable adventure awaits
          </p>
          <p className="mt-2 text-justify text-sm leading-snug text-black/60 sm:text-lg">
            Luxury Hotel Božikovina is warm and friendly hotel located in
            Podstrana just 7km from city of Split. This is a modern, relaxed
            luxury - Dalmatian style hotel, built in 2002 and at the highest
            European standards renovated in 2022. Thanks to its enchanting
            heritage, Podstrana is evolving into an elite cultural site, and its
            main attractions are a beautiful location with crystal clear sea,
            mild climate and beautiful pebble beaches.
          </p>

          <Link
            href="#"
            className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
