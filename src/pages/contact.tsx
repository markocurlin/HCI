import '../i18n';

import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';
import heroImage from 'src/assets/podstrana.jpg';
import SEO from 'src/data/next-seo.config';

import Form from '@/components/Form';
import Map from '@/components/Map';
import contacts from '@/constants/contacts';
import Layout from '@/layouts/Layout';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={`${SEO.title} - Contact us`} />
      <Layout>
        <div className="h-130 w-full">
          <Image
            src={heroImage}
            alt="Hero image of beach"
            sizes="100vw, 100vh"
            className="h-full w-full object-cover object-center"
            placeholder="blur"
          />
        </div>

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
      </Layout>
    </>
  );
};

export default Contact;
