import { Dialog, Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import image from 'src/assets/imagebg.jpg';
import logo from 'src/assets/logowhite.png';

import { navLinks, socialMedia } from '@/constants/navbar';

import { availableLanguages } from '../i18n';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const NavbarTest2 = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('En');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);
  return (
    <>
      <div className="bg-primary mx-auto max-w-full px-4 lg:px-20">
        <div className="relative flex h-16 items-center justify-between sm:h-24">
          <div className="z-50 w-auto">
            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon
                  className="block h-6 w-6 text-black"
                  aria-hidden="true"
                />
              ) : (
                <Bars3Icon
                  className="block h-6 w-6 text-white"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          <div className="-translate-y-1/ absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <span className="sr-only">Your Hotel</span>
              <Image
                className="h-12 w-auto sm:h-20"
                src={logo}
                alt="Hotel Božikovina logo"
              />
            </Link>
          </div>

          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
            <div className="hidden md:block">
              <Link
                href="#"
                className="bg-secondary bg-hover-secondary mx-5 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm"
              >
                {t('BOOK NOW')}
              </Link>
            </div>

            {/* Language dropdown */}
            <Listbox
              as="div"
              className="relative ml-0 md:ml-3"
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

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
              <Image
                src={image}
                alt="Hero image of hotel"
                className="h-full w-full object-cover object-center"
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
                    <div className="scroll-y flex h-full flex-col bg-white py-6 shadow-xl">
                      <div className="mt-32 mb-16 px-4 lg:px-20">
                        <div className="flex flex-col items-center sm:items-start">
                          {navLinks.map((link, index) => {
                            return (
                              <ul key={index}>
                                <Link href={link.path}>
                                  <li
                                    key={index}
                                    className={classNames(
                                      currentPage === link.path
                                        ? 'text-black font-medium'
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
                                  <Link href={media.href}>
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
                              href="#"
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

export default NavbarTest2;
