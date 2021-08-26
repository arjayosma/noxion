import Footer from '../components/footer';
import Header from '../components/header';
import SEO from '../components/seo';

const MainLayout = ({ children }) => {
  return (
    <main className="mx-auto px-5 py-5 text-gray-900 md:py-10 md:w-1/2">
      <Header />
      <SEO />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
