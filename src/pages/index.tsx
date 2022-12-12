// import { useRouter } from 'next/router';

// import { Meta } from '@/layouts/Meta';
// import { Main } from '@/components/Main';
import Image from 'next/image';
import Link from 'next/link';
import image1 from 'src/assets/image1.jpg';
import image2 from 'src/assets/image2.jpg';
import image3 from 'src/assets/image3.jpg';
import image from 'src/assets/imagebg.jpg';

import { Navbar } from '@/templates/Navbar';

const Index = () => {
  // const router = useRouter();

  return (
    <>
      <Navbar />
      <Image
        src={image}
        alt="image"
        // width={500}
        // height={500}
      />

      <div className="bg-primary flex h-auto w-full items-center justify-center py-12 sm:py-20 xl:px-20">
        <div className="container px-24 text-center sm:px-24 md:px-28 xl:w-3/5">
          <p className="text-xl font-semibold text-white sm:text-3xl">
            Welcome to Luxury Hotel Božikovina
          </p>
          <p className="mt-2 text-justify text-sm leading-snug text-white/70 sm:text-lg">
            Luxury Hotel Božikovina is warm and friendly hotel located in
            Podstrana just 7km from city of Split. This is a modern, relaxed
            luxury - Dalmatian style hotel, built in 2002 and at the highest
            European standards renovated in 2022. Thanks to its enchanting
            heritage, Podstrana is evolving into an elite cultural site, and its
            main attractions are a beautiful location with crystal clear sea,
            mild climate and beautiful pebble beaches.
          </p>

          <a
            href="#"
            className="bg-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      <div className="align-center flex h-auto w-full items-center justify-center bg-white">
        <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
          <div className="px-24 pt-12 sm:px-24 md:px-28 lg:w-5/12 lg:p-7 lg:pl-12">
            <p className="text-xl font-semibold text-black sm:text-3xl">
              A different perspective
            </p>

            <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
              Hotel Bozikovina is a family-run, award-winning design hotel with
              sustainability at its foundation. You will find us at a
              comfortable distance from the noise and rush of the old city
              centre. Close enough to discover the rich cultural heritage and
              its nearby natural amenities. A carefree retreat with a priceless
              view of the Adriatic Sea, just a few steps from a pebble beach.
            </p>
          </div>

          <div className="flex items-center justify-center px-24 py-12 lg:p-24 lg:pr-12">
            <Image src={image1} alt="image1" width={540} height={764} />
          </div>
        </div>
      </div>

      <div className="align-center flex h-auto w-full items-center justify-center bg-zinc-50">
        <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
          <div className="flex items-center justify-center px-24 py-12 lg:p-24 lg:pl-12">
            <Image src={image2} alt="image2" width={540} height={764} />
          </div>

          <div className="px-24 pb-12 sm:px-24 md:px-28 lg:w-5/12 lg:p-7 lg:pr-12">
            <p className="text-xl font-semibold text-black sm:text-3xl">
              Workplace and beyond
            </p>

            <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
              Meaningful gatherings can only be held in an equally significant
              space. Following the same line and concept, we host an array of
              events, from private celebrations to business meetings. As in
              every supportive home, our professional staff is fully committed
              to your desired results, whatever the context.
            </p>
          </div>
        </div>
      </div>

      <Image
        src={image3}
        alt="image3"
        // width={500}
        // height={500}
      />

      <div className="align-center flex h-auto w-full items-center justify-center bg-white">
        <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
          <div className="px-24 pt-12 sm:px-24 md:px-28 lg:w-5/12 lg:p-7 lg:pl-12">
            <p className="text-xl font-semibold text-black sm:text-3xl">
              A different perspective
            </p>

            <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
              Hotel Bozikovina is a family-run, award-winning design hotel with
              sustainability at its foundation. You will find us at a
              comfortable distance from the noise and rush of the old city
              centre. Close enough to discover the rich cultural heritage and
              its nearby natural amenities. A carefree retreat with a priceless
              view of the Adriatic Sea, just a few steps from a pebble beach.
            </p>
          </div>

          <div className="flex items-center justify-center px-24 py-12 lg:p-24 lg:pr-12">
            <Image src={image1} alt="image4" width={540} height={764} />
          </div>
        </div>
      </div>

      <div className="align-center flex h-auto w-full items-center justify-center bg-zinc-50">
        <div className="container lg:flex lg:items-center lg:justify-center lg:space-x-8">
          <div className="flex items-center justify-center px-24 py-12 lg:p-24 lg:pl-12">
            <Image src={image2} alt="image5" width={540} height={764} />
          </div>

          <div className="px-24 pb-12 sm:px-24 md:px-28 lg:w-5/12 lg:p-7 lg:pr-12">
            <p className="text-xl font-semibold text-black sm:text-3xl">
              Workplace and beyond
            </p>

            <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
              Meaningful gatherings can only be held in an equally significant
              space. Following the same line and concept, we host an array of
              events, from private celebrations to business meetings. As in
              every supportive home, our professional staff is fully committed
              to your desired results, whatever the context.
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-auto w-full items-center justify-center bg-white py-12 sm:py-20 xl:px-20">
        <div className="container px-24 text-center sm:px-24 md:px-28 xl:w-3/5">
          <p className="text-xl font-semibold text-black sm:text-3xl">
            Your unforgettable adventure awaits
          </p>
          <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
            Luxury Hotel Božikovina is warm and friendly hotel located in
            Podstrana just 7km from city of Split. This is a modern, relaxed
            luxury - Dalmatian style hotel, built in 2002 and at the highest
            European standards renovated in 2022. Thanks to its enchanting
            heritage, Podstrana is evolving into an elite cultural site, and its
            main attractions are a beautiful location with crystal clear sea,
            mild climate and beautiful pebble beaches.
          </p>

          <a
            href="#"
            className="bg-secondary mt-6 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      <div className="bg-primary h-auto w-full md:flex md:items-center md:justify-center"></div>

      <Link href="/rooms"></Link>
    </>
  );
};

export default Index;

/*

return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >

      <Header />

      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a>
      <h1 className="text-2xl font-bold">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        Next.js Boilerplate is a starter code for your Next js project by
        putting developer experience first .{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
        VSCode, Netlify, PostCSS, Tailwind CSS.
      </p>
      <h2 className="text-lg font-semibold">Next js Boilerplate Features</h2>
      <p>Developer experience first:</p>
      <ul>
        <li>
          <span role="img" aria-label="fire">
            🔥
          </span>{' '}
          <a href="https://nextjs.org" rel="nofollow">
            Next.js
          </a>{' '}
          for Static Site Generator
        </li>
        <li>
          <span role="img" aria-label="art">
            🎨
          </span>{' '}
          Integrate with{' '}
          <a href="https://tailwindcss.com" rel="nofollow">
            Tailwind CSS
          </a>
        </li>
        <li>
          <span role="img" aria-label="nail_care">
            💅
          </span>{' '}
          PostCSS for processing Tailwind CSS
        </li>
        <li>
          <span role="img" aria-label="tada">
            🎉
          </span>{' '}
          Type checking Typescript
        </li>
        <li>
          <span role="img" aria-label="pencil2">
            ✏️
          </span>{' '}
          Linter with{' '}
          <a href="https://eslint.org" rel="nofollow">
            ESLint
          </a>
        </li>
        <li>
          <span role="img" aria-label="hammer_and_wrench">
            🛠
          </span>{' '}
          Code Formatter with{' '}
          <a href="https://prettier.io" rel="nofollow">
            Prettier
          </a>
        </li>
        <li>
          <span role="img" aria-label="fox_face">
            🦊
          </span>{' '}
          Husky for Git Hooks
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🚫
          </span>{' '}
          Lint-staged for running linters on Git staged files
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🗂
          </span>{' '}
          VSCode configuration: Debug, Settings, Tasks and extension for
          PostCSS, ESLint, Prettier, TypeScript
        </li>
        <li>
          <span role="img" aria-label="robot">
            🤖
          </span>{' '}
          SEO metadata, JSON-LD and Open Graph tags with Next SEO
        </li>
        <li>
          <span role="img" aria-label="robot">
            ⚙️
          </span>{' '}
          <a
            href="https://www.npmjs.com/package/@next/bundle-analyzer"
            rel="nofollow"
          >
            Bundler Analyzer
          </a>
        </li>
        <li>
          <span role="img" aria-label="rainbow">
            🌈
          </span>{' '}
          Include a FREE minimalist theme
        </li>
        <li>
          <span role="img" aria-label="hundred">
            💯
          </span>{' '}
          Maximize lighthouse score
        </li>
      </ul>
      <p>Built-in feature from Next.js:</p>
      <ul>
        <li>
          <span role="img" aria-label="coffee">
            ☕
          </span>{' '}
          Minify HTML &amp; CSS
        </li>
        <li>
          <span role="img" aria-label="dash">
            💨
          </span>{' '}
          Live reload
        </li>
        <li>
          <span role="img" aria-label="white_check_mark">
            ✅
          </span>{' '}
          Cache busting
        </li>
      </ul>
      <h2 className="text-lg font-semibold">Our Stater code Philosophy</h2>
      <ul>
        <li>Minimal code</li>
        <li>SEO-friendly</li>
        <li>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          Production-ready
        </li>
      </ul>
      <p>
        Check our GitHub project for more information about{' '}
        <a href="https://github.com/ixartz/Next-js-Boilerplate">
          Nextjs Boilerplate
        </a>
        . You can also browse our{' '}
        <a href="https://creativedesignsguru.com/category/nextjs/">
          Premium NextJS Templates
        </a>{' '}
        on our website to support this project.
      </p>
    </Main>

    */
