import Link from 'next/link';
import { formatDate } from '../util';

import Text from './blocks/renderer/text';

const PostItem = ({ description, id, slug, timestamp, title }) => {
  const date = formatDate(timestamp);
  return (
    <div key={id} className="py-5">
      <div className="hover:bg-gray-100 p-10 rounded-lg">
        <header className="mb-5">
          <Link href={`/posts/${slug}`}>
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
      {posts.map(({ id, last_edited_time, properties, slug }, index) => {
        return (
          <PostItem
            key={index}
            description={properties.Description}
            id={id}
            slug={slug}
            timestamp={last_edited_time}
            title={properties.Title}
          />
        );
      })}
    </section>
  );
};

export default Posts;
