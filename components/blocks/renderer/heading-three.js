import Text from './text';

const HeadingThree = ({ content }) => {
  return (
    <h3 className="mb-5 mt-1 text-lg">
      <Text text={content.text} />
    </h3>
  );
};

export default HeadingThree;
