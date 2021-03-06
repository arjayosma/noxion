import Block from '../../components/blocks/block';
import Text from '../../components/blocks/renderer/text';
import MainLayout from '../../layouts/main-layout';
import { getBlocks, getDatabase, getPage } from '../../lib/notion';
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
        <section className="py-5">
          {blocks.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </section>
      </article>
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const blogList = await getDatabase();
  const paths = blogList.map((page) => {
    const { id } = page;
    const { type } = page.properties.Slug;
    const slug = page.properties.Slug[type].name;
    return {
      params: { id, slug },
    };
  });
  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filter = {
    property: 'Slug',
    select: {
      equals: slug,
    },
  };
  const blogList = await getDatabase(filter);
  const [blog] = blogList;
  const { id } = blog;
  const post = await getPage(id);
  const blocks = await getBlocks(id);

  const childBlocks = await Promise.all(
    blocks
      .filter(({ has_children }) => has_children)
      .map(async ({ id }) => {
        return {
          id,
          children: await getBlocks(id),
        };
      })
  );

  const blocksWithChildren = blocks.map((block) => {
    const { has_children, id, type } = block;
    if (has_children && !block[type].children) {
      block[type]['children'] = childBlocks.find(
        (child) => child.id === id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      blocks: blocksWithChildren,
      post,
    },
    revalidate: 1,
  };
}

export default Post;
