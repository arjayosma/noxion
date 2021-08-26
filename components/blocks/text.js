const Text = ({ text }) => {
  return text.map((value, index) => {
    const { text } = value;
    return <span key={index}>{text.content}</span>;
  });
};

export default Text;
