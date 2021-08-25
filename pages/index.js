import About from '../components/about';
import Header from '../components/header';
import MainLayout from '../layouts/main-layout';

const Home = () => {
  return (
    <MainLayout>
      <Header />
      <About />
    </MainLayout>
  );
};

export default Home;
