import Text from './text';

const Paragraph = ({ content }) => {
  return (
    <p className="break-words mb-3">
      <Text text={content.text} />
    </p>
  );
};

export default Paragraph;
