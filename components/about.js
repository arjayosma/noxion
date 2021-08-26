const About = () => {
  return (
    <section className="flex flex-col items-center px-5 py-10 space-x-0 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
      <div>
        <div className="bg-gray-200 h-24 rounded-full w-24" />
      </div>
      <div>
        <p className="text-center text-sm md:text-base md:text-left">
          Welcome to <strong>Noxion</strong>! This is a Next.js blog with data
          fetched from the Notion API. You are witnessing the power of Notion's
          API.
        </p>
      </div>
    </section>
  );
};

export default About;
