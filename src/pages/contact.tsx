import '../i18n';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Breadcrumb from '@/components/Breadcrumb';
import Carousel from '@/components/Carousel';
import ScrollToTop from '@/components/ScrollToTop';
import {
  carouselImages,
  contacts,
  pageInfo,
  showcase,
} from '@/constants/contacts';
import Layout from '@/layouts/Layout';
import { Meta } from '@/layouts/Meta';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Layout
        meta={<Meta title={pageInfo.title} description={pageInfo.desription} />}
      >
        <ScrollToTop />

        <div className="p-fix container mt-16 bg-white pl-8 md:pl-16 lg:pl-16 xl:pl-16 2xl:pl-48">
          <Breadcrumb title={t('Contact')} />
        </div>

        <div className="mt-4 flex flex-col items-center justify-center py-6 lg:mt-2 lg:mb-20 lg:flex-row">
          <div className="mx-8 mt-6 flex flex-col justify-center sm:px-10 lg:px-8">
            <div className="sm:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {t('Contact')}
              </h1>
              <p className="mt-4 text-justify text-base leading-snug tracking-tight text-black/70 sm:text-xl">
                {t(
                  'Book your unforgettable stay at our exceptional hotel today. Experience luxury, impeccable service, and top-notch amenities. Create cherished memories and prepare for a remarkable experience. Book now and let us exceed your expectations at our remarkable hotel.'
                )}
              </p>
            </div>

            <div className="mt-3 flex flex-col">
              {contacts.map((contact) => (
                <div key={contact.id} className="flex flex-col">
                  <p className="mt-3 text-justify text-lg font-medium leading-snug tracking-tight text-black/70 sm:text-xl">
                    {t(contact.title)}
                  </p>
                  <p className="text-justify text-base leading-snug tracking-tight text-black/70 sm:text-lg">
                    {t(contact.text)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-8 mt-6 max-w-2xl sm:px-1 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:block lg:h-auto">
              <Image
                src={showcase[0]?.imageSrc!}
                alt={showcase[0]?.imageAlt!}
                className="h-full w-full object-cover"
                placeholder="blur"
              />
              <div className="absolute bottom-0 left-0 z-20 p-6">
                <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                  {t('Rooms')}
                </p>
                <div className="flex py-0.5">
                  <Link href="/rooms">
                    <p className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white">
                      {t('Discover now')}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto">
                <Image
                  src={showcase[1]?.imageSrc!}
                  alt={showcase[1]?.imageAlt!}
                  className="h-full w-full object-cover"
                  placeholder="blur"
                />
                <div className="absolute bottom-0 left-0 z-20 p-6">
                  <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                    {t('Villas')}
                  </p>
                  <div className="flex py-0.5">
                    <Link href="/villas">
                      <p className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white">
                        {t('Discover now')}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto">
                <Image
                  src={showcase[2]?.imageSrc!}
                  alt={showcase[2]?.imageAlt!}
                  className="h-full w-full object-cover"
                  placeholder="blur"
                />
                <div className="absolute bottom-0 left-0 z-20 p-6">
                  <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                    {t('Services')}
                  </p>
                  <div className="flex py-0.5">
                    <Link href="/services">
                      <p className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white">
                        {t('Discover now')}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-4xl h-[20rem] p-0 pb-24 md:h-[48rem] lg:px-[4rem] xl:px-[4rem] 2xl:h-[58rem]">
          <Carousel imageList={carouselImages} />
        </div>
      </Layout>
    </>
  );
};

export default Contact;
