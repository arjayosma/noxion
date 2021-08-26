import Text from './text';

const NumberedList = ({ content }) => {
  return (
    <ol className="list-decimal ml-5">
      <li>
        <Text text={content.text} />
      </li>
    </ol>
  );
};

export default NumberedList;
