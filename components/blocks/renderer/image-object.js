import Text from './text';

const ImageObject = ({ content }) => {
  const { caption, type } = content;
  const [cap] = caption;
  return (
    <figure className="my-3 relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={cap?.plain_text || 'Image from Notion'}
        className="rounded"
        loading="lazy"
        src={content[type].url}
      />
      {caption && (
        <figcaption className="italic text-sm text-gray-400">
          <Text text={caption} />
        </figcaption>
      )}
    </figure>
  );
};

export default ImageObject;
