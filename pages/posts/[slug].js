import Text from '../../components/blocks/text';
import MainLayout from '../../layouts/main-layout';
import { getBlocks, getBlogList, getPage } from '../../lib/notion';
import { formatDate } from '../../util';

const Post = ({ blocks, post }) => {
  const { last_edited_time, properties } = post;
  const { Title } = properties;
  const date = formatDate(last_edited_time);

  return (
    <MainLayout>
      <article>
        <div className="pb-5 pt-10">
          <h1 className="mb-3 text-5xl">
            <Text text={Title[Title.type]} />
          </h1>
          <p className="text-gray-400 text-sm">Last updated: {date}</p>
        </div>
      </article>
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const blogList = await getBlogList();
  return {
    fallback: false,
    paths: blogList.map((page) => ({ params: { slug: page.id } })),
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await getPage(slug);
  const blocks = await getBlocks(slug);

  return {
    props: {
      blocks,
      post,
    },
    revalidate: 1,
  };
}

export default Post;
