import { Disclosure, Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from 'src/assets/logowhite.png';

import { availableLanguages } from '../i18n';

export const navLinks = [
  { name: 'Home', path: '/', current: false },
  { name: 'Rooms', path: '/rooms', current: false },
  { name: 'Services', path: '/services', current: false },
  { name: 'About', path: '/about', current: false },
  { name: 'Contact', path: '/contact', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('En');

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-4 lg:px-28">
            <div className="relative flex h-16 items-center justify-between sm:h-24">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <Link href="/">
                    <span className="sr-only">Your Hotel</span>
                    <Image
                      className="block h-12 w-auto sm:h-20 lg:hidden"
                      src={logo}
                      alt="Hotel Božikovina logo"
                    />
                  </Link>
                  <Link href="/">
                    <span className="sr-only">Your Hotel</span>
                    <Image
                      className="hidden h-12 w-auto sm:h-20 lg:block"
                      src={logo}
                      alt="Hotel Božikovina logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex">
                    {navLinks.map((link, index) => {
                      return (
                        <ul key={index}>
                          <Link href={link.path}>
                            <li
                              key={index}
                              className={classNames(
                                link.current
                                  ? 'bg-secondary text-white'
                                  : 'text-white hover:text-gray-900',
                                'px-3 py-2 text-sm font-medium'
                              )}
                            >
                              {t(`${link.name}`)}
                            </li>
                          </Link>
                        </ul>
                      );
                    })}
                  </div>
                </div>
                <div className="hidden sm:block">
                  <a
                    href="#"
                    className="bg-secondary mx-5 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    {t('BOOK NOW')}
                  </a>
                </div>

                {/* Language dropdown */}
                <Listbox
                  as="div"
                  className="relative ml-3"
                  value={selectedLanguage}
                  onChange={setSelectedLanguage}
                >
                  <div>
                    <Listbox.Button className="flex w-10 items-center text-base font-medium text-white hover:text-gray-900 focus:outline-none">
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

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navLinks.map((link, index) => {
                return (
                  <ul key={index}>
                    <Link href={link.path}>
                      <li
                        key={index}
                        className={classNames(
                          link.current
                            ? 'bg-secondary text-white'
                            : 'text-white hover:text-gray-900',
                          'px-3 py-2text-sm font-medium'
                        )}
                      >
                        {link.name}
                      </li>
                    </Link>
                  </ul>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
