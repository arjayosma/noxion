import Text from './text';

const Paragraph = ({ content }) => {
  return (
    <p>
      <Text text={content.text} />
    </p>
  );
};

export default Paragraph;
