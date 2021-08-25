import SEO from '../components/seo';

const MainLayout = ({ children }) => {
  return (
    <main className="mx-auto px-5 py-10 text-gray-900 w-1/2">
      <SEO />
      {children}
    </main>
  );
};

export default MainLayout;
