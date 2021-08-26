import About from '../components/about';
import Posts from '../components/posts';
import MainLayout from '../layouts/main-layout';
import { getBlogList } from '../lib/notion';

const Home = ({ posts }) => {
  return (
    <MainLayout>
      <About />
      <Posts posts={posts} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const blogList = await getBlogList();
  return {
    props: {
      posts: blogList,
    },
  };
}

export default Home;
