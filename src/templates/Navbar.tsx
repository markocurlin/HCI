import Image from 'next/image';
import logo from 'src/assets/logowhite.png';

const Navbar = () => (
  <>
    <div className="bg-primary relative">
      <div className="mx-auto max-w-full px-4 sm:px-28">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start md:w-0 md:flex-1 lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <Image className="h-12 w-auto sm:h-20" src={logo} alt="logo" />
              {/*
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
/> */}
            </a>
          </div>

          {/* hamburger */}
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden items-center md:flex">
            <button
              type="button"
              className="group inline-flex items-center rounded-md text-base font-medium text-white hover:text-gray-900 focus:outline-none"
              aria-expanded="false"
            >
              <span>En</span>
              <svg
                className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <div className="">
              <a
                href="#"
                className="bg-secondary mx-5 inline-flex items-center justify-center whitespace-nowrap border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                BOOK NOW
              </a>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export { Navbar };
