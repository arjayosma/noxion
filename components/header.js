import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <h1 className="font-bold text-4xl text-center md:text-left">
            Noxion Blog
          </h1>
        </a>
      </Link>
    </header>
  );
};

export default Header;
