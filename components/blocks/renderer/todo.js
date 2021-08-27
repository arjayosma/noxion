import Text from './text';

const ToDo = ({ content, id }) => {
  const { checked, text } = content;
  return (
    <div className="mt-3">
      <label className="flex items-center space-x-3" htmlFor={id}>
        <input defaultChecked={checked} disabled id={id} type="checkbox" />
        <Text text={text} />
      </label>
    </div>
  );
};

export default ToDo;
