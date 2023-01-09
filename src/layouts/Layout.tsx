import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type ILayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout = (props: ILayoutProps) => {
  return (
    <>
      {props.meta}
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
