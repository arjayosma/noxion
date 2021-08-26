const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-5 space-y-5 text-sm md:flex-row md:justify-between md:space-y-0">
      <div>
        <span>&copy; All rights reserved 2021</span>
      </div>
      <div className="space-x-3">
        <a href="https://facebook.com/" rel="noreferrer" target="_blank">
          Facebook
        </a>
        <a href="https://twitter.com/" rel="noreferrer" target="_blank">
          Twitter
        </a>
        <a href="https://linkedin.com/" rel="noreferrer" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
