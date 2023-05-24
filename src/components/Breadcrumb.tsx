import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Breadcrumb = ({ title }: any) => {
  const { t } = useTranslation();

  return (
    <nav aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <div className="flex items-center">
            <Link
              href="/"
              className="mr-2 text-xl font-medium text-gray-500 hover:text-gray-600"
            >
              {t('Home')}
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
          <p className="font-medium text-gray-900">{title}</p>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
