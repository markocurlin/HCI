import Image from 'next/image';
import { NextSeo } from 'next-seo';
import mapImage from 'src/assets/mapImage.png';
import heroImage from 'src/assets/podstrana.jpg';
import SEO from 'src/data/next-seo.config';

import contacts from '@/constants/contacts';
import Layout from '@/layouts/Layout';

const Contact = () => {
  return (
    <>
      <NextSeo title={`${SEO.title} - Contact us`} />
      <Layout>
        <div className="h-130 w-full">
          <Image
            src={heroImage}
            alt="Hero image of beach"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="mx-auto mb-16 max-w-2xl p-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-black">
            Contact us
          </h2>
          <div className="my-4 grid grid-cols-1 items-center justify-items-center gap-y-8 gap-x-16 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-0">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="group container flex h-80 w-80 flex-col items-center justify-center overflow-hidden bg-white p-4"
              >
                <contact.iconSrc className="h-16 w-16 text-orange-600" />
                <p className="text-lg font-semibold text-black sm:text-xl">
                  {contact.title}
                </p>
                <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
          {/* retardu implementiraj mapu ovih dana */}
          <div className="w-full">
            <Image
              src={mapImage}
              alt="Image of map"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
