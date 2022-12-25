import Footer from '@/components/Footer';
// import Navbar from '@/components/Navbar';
import NavbarTest2 from '@/components/NavbarTest2';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <NavbarTest2 />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
