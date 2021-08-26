import Text from './text';

const BulletedList = ({ content }) => {
  return (
    <ul className="list-disc ml-5">
      <li>
        <Text text={content.text} />
      </li>
    </ul>
  );
};

export default BulletedList;
