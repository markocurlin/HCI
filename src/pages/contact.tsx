// import Layout from "@/layouts/Layout";
import NavbarTest2 from '@/components/NavbarTest2';
import contacts from '@/constants/contacts';

const Contact = () => {
  return (
    <>
      <NavbarTest2 />
      {/*
      <Layout>
        <p>Contact us</p>
      </Layout> */}

      <div className="mt-4 grid grid-cols-1 items-center justify-items-center gap-y-8 gap-x-16 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-0">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="group container h-80 w-80 overflow-hidden bg-white p-4 shadow sm:rounded-lg"
          >
            <contact.iconSrc className="h-20 w-20" />
            <p className="text-xl font-semibold text-black sm:text-3xl">
              {contact.title}
            </p>
            <p className="mt-2 text-justify text-sm leading-snug text-black/70 sm:text-lg">
              {contact.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
