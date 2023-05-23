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
        className={`bg-secondary scroll-button fixed bottom-10 right-10 z-50 flex h-14 w-14 items-center justify-center rounded-full ${
          showButton ? 'show' : 'hide'
        }`}
      >
        <ChevronUpIcon className="mb-1 h-10 w-10 text-white" />
      </div>
    </>
  );
};

export default ScrollToTop;

/*
{showButton && 
      <div onClick={handleButton} className="bg-secondary flex justify-center items-center fixed bottom-10 right-10 h-14 w-14 rounded-full z-50">
        <ChevronUpIcon className="h-10 w-10 text-white mb-1"/>
      </div>}

*/
