import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import logo from 'src/assets/logowhite.png';

import contacts from '@/constants/contacts';
import { navLinks, socialMedia } from '@/constants/navigation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-primary w-full p-4 sm:p-6">
        <div className="mx-auto max-w-full px-4 sm:px-28">
          <div className="p-4 px-4 md:px-6 md:py-8">
            <div className="flex flex-col items-center">
              <Link href="/" className="mb-6 flex items-center sm:mb-8">
                <span className="sr-only">Your Hotel</span>
                <Image
                  className="h-20 w-auto sm:h-24"
                  src={logo}
                  alt="Hotel Božikovina logo"
                  placeholder="blur"
                />
              </Link>
              <ul className="mb-4 flex flex-wrap items-center justify-center text-sm text-white sm:mb-6">
                {navLinks.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={link.path}
                        className="mx-4 text-justify text-sm font-semibold uppercase leading-snug text-white hover:text-zinc-100 sm:text-lg"
                      >
                        {t(`${link.name}`)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="mb-4 flex flex-wrap items-center text-sm text-white sm:mb-6">
                {socialMedia.map((media, index) => {
                  return (
                    <li key={index}>
                      <div className="mx-4 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                        <Link
                          href={media.href}
                          target="_blank"
                          className="text-primary text-hover-primary"
                          aria-label={`Check out ${media.name} page`}
                        >
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d={media.iconUrl}
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <ul className="mb-4 flex flex-col items-center text-sm text-white sm:mb-6">
                {contacts.map((contact, index) => {
                  return (
                    <li key={index}>
                      <p className="text-justify text-sm font-medium leading-snug text-white/80 sm:text-base">
                        {t(`${contact.text}`)}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <span className="text-center text-sm text-white/80 sm:text-center">
                © {new Date().getFullYear()} Hotel Božikovina.{' '}
                {t('All Rights Reserved.')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
