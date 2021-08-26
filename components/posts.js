import Link from 'next/link';

import Text from './blocks/text';

const PostItem = ({ description, id, timestamp, title }) => {
  const date = new Date(timestamp).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="py-5">
      <div className="hover:bg-gray-100 p-10 rounded-lg">
        <header className="mb-5">
          <Link href={`/posts/${id}`}>
            <a>
              <h1 className="font-bold text-2xl">
                <Text text={title[title.type]} />
              </h1>
            </a>
          </Link>
          <small className="text-gray-400">{date}</small>
        </header>
        <p>
          <Text text={description[description.type]} />
        </p>
      </div>
    </div>
  );
};

const Posts = ({ posts }) => {
  return (
    <section className="divide-y">
      {posts.map((post, index) => {
        const { id, last_edited_time, properties } = post;
        return (
          <PostItem
            key={index}
            description={properties.Description}
            id={id}
            timestamp={last_edited_time}
            title={properties.Title}
          />
        );
      })}
    </section>
  );
};

export default Posts;
