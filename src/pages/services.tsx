// import Image from 'next/image';
// import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// import { useTranslation } from 'react-i18next';

// import Carousel from '@/components/Carousel';
// import { pageInfo, services } from '@/constants/services';
// import Layout from '@/layouts/Layout';
// import { Meta } from '@/layouts/Meta';

const Services = () => {
  const [id, setId] = useState(10);
  const ref = useRef<null | HTMLDivElement>(null);
  // const { t } = useTranslation();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setId(10);
  }, [id]);

  return (
    <></>
    /*
    <>
      <Layout
        meta={
          <Meta title={pageInfo.title} description={pageInfo.description} />
        }
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
                    href="/services"
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    Services
                  </Link>
                </li>
              </ol>
            </nav>
          </div>

          <div className="mt-4 flex flex-col items-center justify-center py-0 md:py-6 lg:mt-2 lg:mb-20 lg:flex-row">
            <div className="mx-8 mt-6 flex flex-col justify-center sm:px-10 lg:px-8">
              <div className="sm:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Services
                </h1>
                <p className="text-md mt-4 text-justify leading-snug tracking-tight text-black/70 sm:text-xl">
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
            <div className="mx-8 mt-6 max-w-2xl sm:px-1 lg:grid lg:max-w-4xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                {services.map((service) => (
                  <>
                    {service.id < 2 && (
                      <div
                        key={service.id}
                        className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto"
                      >
                        <Image
                          src={service.imageSrc}
                          alt={service.imageAlt}
                          className="h-full w-full object-cover"
                          placeholder="blur"
                        />
                        <div className="absolute bottom-0 left-0 z-20 p-6">
                          <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                            {service.title}
                          </p>
                          <div className="flex py-0.5">
                            <p
                              onClick={() => setId(service.id)}
                              className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                            >
                              Discover now
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>

              <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                {services.map((service) => (
                  <>
                    {service.id > 1 && service.id < 5 && (
                      <div
                        key={service.id}
                        className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto "
                      >
                        <Image
                          src={service.imageSrc}
                          alt={service.imageAlt}
                          className="h-full w-full object-cover"
                          placeholder="blur"
                        />
                        <div className="absolute bottom-0 left-0 z-20 p-6">
                          <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                            {service.title}
                          </p>
                          <div className="flex py-0.5">
                            <p
                              onClick={() => setId(service.id)}
                              className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                            >
                              Discover now
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>

              <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                {services.map((service) => (
                  <>
                    {service.id > 4 && (
                      <div
                        key={service.id}
                        className="img-gradient my-12 h-96 overflow-hidden lg:my-0 lg:h-auto "
                      >
                        <Image
                          src={service.imageSrc}
                          alt={service.imageAlt}
                          className="h-full w-full object-cover"
                          placeholder="blur"
                        />
                        <div className="absolute bottom-0 left-0 z-20 p-6">
                          <p className="py-0.5 text-lg font-semibold leading-snug text-white">
                            {service.title}
                          </p>
                          <div className="flex py-0.5">
                            <p
                              onClick={() => setId(service.id)}
                              className="link-underline link-underline-white py-0.5 text-base font-light leading-snug text-white"
                            >
                              Discover now
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-100 pb-8 sm:pb-12 md:pt-0 lg:px-8">
          {services.map((service) => (
            <div
              key={service.id}
              ref={service.id === id ? ref : null}
              className="bg-zinc-100 pb-8 lg:p-8"
            >
              <div className="mx-auto mt-8 grid w-full max-w-screen-sm grid-cols-12 md:max-w-screen-2xl md:items-center lg:px-2">
                {service.id % 2 === 0 && (
                  <>
                    <div className="md:col-span-auto z-0 col-span-12 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${service.id}-image`}
                          className="absolute inset-0"
                        >
                          {service.images.length > 0 ? (
                            <Carousel imageList={service.images} />
                          ) : (
                            <Image
                              src={service.imageSrc}
                              alt={service.imageAlt}
                              className="h-full w-full object-cover"
                              placeholder="blur"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                      <div className="bg-white p-4 sm:p-12 md:px-8">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black lg:text-3xl">
                                {t(`${service.title}`)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                                {t(`${service.description}`)}
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

                {service.id % 2 !== 0 && (
                  <>
                    <div className="md:col-span-auto z-0 col-span-12 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-1">
                      <div className="image-padding relative block h-0 w-full overflow-hidden bg-gray-300">
                        <div
                          key={`${service.id}-image`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          {service.images.length > 0 ? (
                            <Carousel imageList={service.images} />
                          ) : (
                            <Image
                              src={service.imageSrc}
                              alt={service.imageAlt}
                              className="h-full w-full object-cover"
                              placeholder="blur"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-auto relative z-10 col-span-12 -mt-8 px-10 md:px-24 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-1 lg:mt-0 lg:px-0">
                      <div className="bg-white p-4 sm:p-12 md:px-8">
                        <div className="mx-auto max-w-xl py-8 px-4 sm:px-6 lg:max-w-2xl lg:px-2 xl:py-24">
                          <div className="container flex flex-col">
                            <div className="container">
                              <p className="text-xl font-semibold text-black lg:text-3xl">
                                {t(`${service.title}`)}
                              </p>
                              <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-base">
                                {t(`${service.description}`)}
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
            </div>
          ))}
        </div>
      </Layout>
    </>
    */
  );
};

export default Services;
