import MainLayout from '../../layouts/main-layout';

const Post = (props) => {
  return <MainLayout></MainLayout>;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { slug: 'this-is-a-sample-blog-title' } }],
  };
}

export async function getStaticProps({ params }) {
  return { props: {} };
}

export default Post;
