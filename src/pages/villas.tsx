import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useEffect, useRef, useState } from 'react';
import heroimage from 'src/assets/villas/heroimage.jpeg';
import villas from 'src/constants/villas';

import Carousel from '@/components/Carousel';
import SEO from '@/data/next-seo.config';
import Layout from '@/layouts/Layout';

const Villas = () => {
  const [id, setId] = useState(4);
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setId(4);
  }, [id]);

  return (
    <>
      <NextSeo title={`${SEO.title} - Villas`} />
      <Layout>
        <div className="h-130 w-full">
          <Image
            src={heroimage}
            alt="Hero image of villa"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl p-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-black">
              Villas
            </h2>
            {/* <div className="mt-4 flex flex-col md:flex-row justify-center items-center sm:mt-8">
             */}
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
                      src={villa.imageSrc}
                      alt={villa.imageAlt}
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between md:w-80 md:p-0">
                    <div>
                      <p className="text-justify text-lg font-semibold leading-snug tracking-tight text-black/70">
                        {villa.name}
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

        <div className="bg-white">
          {villas.map((villa) => (
            <div key={villa.id} ref={villa.id === id ? ref : null}>
              <div className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="container justify-around px-2 sm:px-8 lg:flex">
                  <div className="container p-2">
                    <p className="text-xl font-semibold text-black sm:text-2xl">
                      {villa.name}
                    </p>
                    <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                      {villa.description}
                    </p>
                    <div className="mt-1 flex">
                      <p className="mt-2 text-justify text-sm font-semibold leading-snug text-black/70 sm:text-lg">
                        MAX. OCCUPANCY:{' '}
                      </p>
                      <p className="mt-2 ml-1 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                        {villa.maxOccupancy}
                      </p>
                    </div>
                    <div className="mt-1 flex">
                      <p className="text-justify text-sm font-semibold leading-snug text-black/70 sm:text-lg">
                        BED CONFIGURATION:{' '}
                      </p>
                      <p className="ml-1 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                        {villa.bedConfiguration}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="bg-secondary bg-hover-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
                    >
                      BOOK NOW
                    </Link>
                  </div>
                  <div className="container mt-4 p-2 lg:mt-0 xl:mt-0">
                    {villa.amenities.map((amenitie, index) => (
                      <ul
                        key={`${index}-${amenitie}`}
                        className="ml-0 list-inside list-disc lg:ml-32"
                      >
                        <li className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
                          {amenitie}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div key={`${villa.id}-carousel`} className="h-130 w-full">
                <Carousel imageList={villa.images} />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Villas;
