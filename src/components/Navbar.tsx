import { Dialog, Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import logo from '@/assets/logowhite.png';
import { navLinks, socialMedia } from '@/constants/navigation';

import image from '../assets/The Deluxe Double Room/DeluxeDoubleRoom_6.jpg';
import { availableLanguages } from '../i18n';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  const navbarRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('En');
  const { t, i18n } = useTranslation();

  const handleBeforeUnload = () => {
    i18n.changeLanguage('En');
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    window.addEventListener('beforeunload', handleBeforeUnload);
  }, [selectedLanguage]);

  const handleScroll = useCallback(() => {
    if (scrollPosition > window.scrollY && window.scrollY < 100) {
      navbarRef.current!.classList.remove('sticky-header-up');
      navbarRef.current!.classList.remove('sticky-header-down');
    } else if (scrollPosition < window.scrollY && window.scrollY < 100) {
      navbarRef.current!.classList.remove('sticky-header-up');
      navbarRef.current!.classList.remove('sticky-header-down');
    } else if (scrollPosition > window.scrollY) {
      navbarRef.current!.classList.add('sticky-header-up');
      navbarRef.current!.classList.remove('sticky-header-down');
    } else if (scrollPosition < window.scrollY) {
      navbarRef.current!.classList.add('sticky-header-down');
      navbarRef.current!.classList.remove('sticky-header-up');
    }
    setSrollPosition(window.scrollY);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div
        className="bg-primary sticky top-0 z-30 mx-auto max-w-full px-4 lg:px-20"
        ref={navbarRef}
      >
        <div className="relative flex h-16 items-center justify-between sm:h-24">
          <div className="w-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <Transition
                show={!isOpen}
                enter="transition-opacity duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Bars3Icon
                  className="block h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </Transition>
            </button>
          </div>

          <div className="-translate-y-1/ absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <span className="sr-only">Your Hotel</span>
              <Image
                className="h-12 w-auto object-cover object-center sm:h-20"
                src={logo}
                alt="Hotel Božikovina logo"
                sizes="100vw, 100vh"
                quality={100}
                placeholder="blur"
              />
            </Link>
          </div>

          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="bg-secondary bg-hover-secondary mx-5 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
              >
                {t('BOOK NOW')}
              </Link>
            </div>

            <Listbox
              as="div"
              className="relative z-10 ml-0 md:ml-3"
              value={selectedLanguage}
              onChange={setSelectedLanguage}
            >
              <div>
                <Listbox.Button className="flex w-10 items-center text-base font-medium text-white focus:outline-none">
                  <span className="truncate">{selectedLanguage}</span>
                  <span className="pointer-events-none flex items-center">
                    <ChevronDownIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Listbox.Options className="absolute top-6 -right-3 mt-1 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {availableLanguages.map((language) => (
                      <Listbox.Option
                        key={language}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-black'
                          }`
                        }
                        value={language}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {language}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300 sm:duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300 sm:duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
              <Image
                src={image}
                alt="Hero image of hotel"
                className="h-full w-full object-cover object-center"
                placeholder="blur"
              />
            </div>
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300 sm:duration-300"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300 sm:duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-lg">
                    <div className="absolute z-40 -ml-4 h-14 w-full bg-white sm:h-20">
                      <div className="z-50 w-auto px-8 py-3 sm:py-7 lg:px-24">
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
                        >
                          <span className="sr-only">Open main menu</span>
                          <XMarkIcon
                            className="block h-6 w-6 text-black"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="scroll-y flex h-full flex-col bg-white py-6 shadow-xl">
                      <div className="m-auto px-4 sm:mx-0 sm:mt-32 sm:mb-16 lg:px-20">
                        <div className="flex flex-col items-center sm:items-start">
                          {navLinks.map((link, index) => {
                            return (
                              <ul key={index}>
                                <Link href={link.path}>
                                  <li
                                    key={index}
                                    onClick={() => {
                                      if (currentPage === link.path)
                                        setIsOpen(false);
                                    }}
                                    className={classNames(
                                      currentPage === link.path
                                        ? 'text-black font-[600]'
                                        : 'text-black/60 hover:text-gray-900',
                                      'px-3 py-2 text-2xl sm:text-3xl font-normal'
                                    )}
                                  >
                                    {t(`${link.name}`)}
                                  </li>
                                </Link>
                              </ul>
                            );
                          })}
                          <div className="mt-16 flex flex-col items-center sm:items-start">
                            {socialMedia.map((media, index) => {
                              return (
                                <ul key={index}>
                                  <Link href={media.href} target="_blank">
                                    <li
                                      key={index}
                                      className="px-3 py-2 text-lg font-normal text-black/60 hover:text-gray-900 sm:text-xl"
                                    >
                                      {media.name}
                                    </li>
                                  </Link>
                                </ul>
                              );
                            })}
                          </div>

                          <div className="mt-16 px-3 py-2">
                            <Link
                              onClick={() => {
                                if (currentPage === '/contact')
                                  setIsOpen(false);
                              }}
                              href="/contact"
                              className="bg-secondary bg-hover-secondary inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
                            >
                              {t('BOOK NOW')}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Navbar;
