import Image from 'next/image';
import { NextSeo } from 'next-seo';
import heroimage from 'src/assets/villas/heroimage.jpeg';

import SEO from '@/data/next-seo.config';
import Layout from '@/layouts/Layout';

const Villas = () => {
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
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Villas;
