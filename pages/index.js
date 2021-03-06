import About from '../components/about';
import Posts from '../components/posts';
import MainLayout from '../layouts/main-layout';
import { getDatabase } from '../lib/notion';

const Home = ({ posts }) => {
  return (
    <MainLayout>
      <About />
      <Posts posts={posts} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const blogList = await getDatabase();
  const posts = blogList.map((page) => {
    const { type } = page.properties.Slug;
    const slug = page.properties.Slug[type].name;
    return {
      ...page,
      slug,
    };
  });
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default Home;
