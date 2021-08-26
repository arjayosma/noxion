import Text from './text';

const HeadingTwo = ({ content }) => {
  return (
    <h2 className="mb-5 mt-3 text-2xl">
      <Text text={content.text} />
    </h2>
  );
};

export default HeadingTwo;
