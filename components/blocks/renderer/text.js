import { getColor } from '../../../util';

const Text = ({ text }) => {
  return text.map((value, index) => {
    const { annotations, text } = value;
    const { bold, code, color, italic, strikethrough, underline } = annotations;
    return (
      <span
        key={index}
        className={[
          bold ? 'font-bold' : '',
          code ? 'bg-gray-200 font-mono px-1 py-0.5 rounded' : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : '',
          color ? getColor(color) : '',
        ]
          .filter((className) => className !== '')
          .join(' ')}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

export default Text;
