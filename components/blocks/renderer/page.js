const Page = ({ content }) => {
  return (
    <div className="border rounded px-5 py-3">
      <p className="text-gray-400">
        Page: <strong>{content.title}</strong>
      </p>
    </div>
  );
};

export default Page;
