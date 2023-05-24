import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleButton = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        onClick={handleButton}
        className={`bg-secondary scroll-button fixed bottom-5 right-5 z-20 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full sm:bottom-10 sm:right-10 ${
          showButton ? 'show' : 'hide'
        }`}
      >
        <ChevronUpIcon className="mb-1 h-10 w-10 text-white" />
      </div>
    </>
  );
};

export default ScrollToTop;
