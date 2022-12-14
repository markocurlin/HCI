import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
