import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import NavbarTest2 from '@/components/NavbarTest2';

type ILayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

// const Layout = ({ children }: { children: any }) => {
//  <main>{children}</main>
const Layout = (props: ILayoutProps) => {
  return (
    <>
      {props.meta}
      <NavbarTest2 />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
