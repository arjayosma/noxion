import Text from './text';

const HeadingOne = ({ content }) => {
  return (
    <h1 className="mb-5 mt-5 text-4xl">
      <Text text={content.text} />
    </h1>
  );
};

export default HeadingOne;
