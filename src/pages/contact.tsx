import '../i18n';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
// import { useRef, useState } from 'react';
import room3 from 'src/assets/Home/Image_1.jpg';
import room2 from 'src/assets/Home/Image_2.jpg';
import room1 from 'src/assets/Home/Image_3.jpg';

// import heroImage from '@/assets/podstrana.jpg';
// import Form from '@/components/Form';
import Map from '@/components/Map';
import { contacts, pageInfo } from '@/constants/contacts';
import Layout from '@/layouts/Layout';
import { Meta } from '@/layouts/Meta';

const Contact = () => {
  const { t } = useTranslation();
  // const ref = useRef<null | HTMLDivElement>(null);

  /* <div className="absolute inset-x-0 top-20 z-20 flex flex-col items-center p-6"> */

  return (
    <>
      <Layout
        meta={<Meta title={pageInfo.title} description={pageInfo.desription} />}
      >
        <div className="bg-white">
          <div className="p-fix container mt-16 pl-8 md:pl-16 lg:pl-16 xl:pl-48">
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
                    href="/rooms"
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    Contact
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center py-6 lg:mt-2 lg:mb-20 lg:flex-row">
          <div className="mx-8 mt-6 flex flex-col justify-center sm:px-10 lg:px-8">
            <div className="sm:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Contact us
              </h1>
              <p className="text-md mt-4 text-justify leading-snug tracking-tight text-black/70 sm:text-xl">
                Have a question or need assistance? We are here to help you with
                anything you need!
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
            <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:block lg:h-auto">
              <Image
                src={room1}
                alt="The Deluxe suite"
                className="h-full w-full object-cover"
                placeholder="blur"
              />
              <div className="absolute bottom-0 left-0 z-20 p-6">
                <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                  Rooms
                </p>
                <div className="flex py-0.5">
                  <p className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white">
                    Discover now
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto">
                <Image
                  src={room2}
                  alt="Superior double room"
                  className="h-full w-full object-cover"
                  placeholder="blur"
                />
                <div className="absolute bottom-0 left-0 z-20 p-6">
                  <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                    Villas
                  </p>
                  <div className="flex py-0.5">
                    <p className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white">
                      Discover now
                    </p>
                  </div>
                </div>
              </div>
              <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto">
                <Image
                  src={room3}
                  alt="Standard double room"
                  className="h-full w-full object-cover"
                  placeholder="blur"
                />
                <div className="absolute bottom-0 left-0 z-20 p-6">
                  <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                    Services
                  </p>
                  <div className="flex py-0.5">
                    <p className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white">
                      Discover now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-100 p-12">
          <div className="flex items-center justify-evenly">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex h-96 w-96 flex-col items-center justify-center bg-white"
              >
                <div className="h-20 w-20 items-center justify-center">
                  <contact.iconSrc className="text-secondary" />
                </div>
                <p className="text-justify text-sm font-medium leading-snug text-black/70 sm:text-base">
                  {contact.title}
                </p>
                <p className="text-justify text-sm font-medium leading-snug text-black/70 sm:text-base">
                  {t(`${contact.text}`)}
                </p>
              </div>
            ))}
          </div>

          <div className="h-97 mt-12 flex items-center justify-center px-32 py-12">
            <Map />
          </div>
        </div>

        {/*
        <div
          id="book"
          className="mx-auto max-w-2xl p-4 pb-0 sm:px-6 sm:pt-8 lg:max-w-7xl lg:px-8"
        >
          <h2 className="text-center text-3xl font-semibold tracking-tight text-black">
            {t('Contact us')}
          </h2>
          <div className="mt-2 flex flex-col p-4 lg:flex-row lg:justify-around">
            <div className="h-98 w-full lg:w-5/12">
              <Form />
              <div>
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center py-2 sm:px-6"
                  >
                    <div className="mr-2 h-7 w-7 items-center justify-center">
                      <contact.iconSrc className="text-secondary" />
                    </div>
                    <p className="text-justify text-sm font-medium leading-snug text-black/70 sm:text-base">
                      {t(`${contact.text}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-97 w-full sm:p-6 lg:w-5/12">
              <Map />
            </div>
          </div>
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
                */}
      </Layout>
    </>
  );
};

export default Contact;
