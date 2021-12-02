import Link from 'next/link';

const Header = ({ withDescription = false }) => {
  return (
    <header className="my-8">
      <h1 className="text-3xl font-bold mb-3 font-sans">
        <Link href="/">
          <a className="hover:text-blue-600">vblinden.</a>
        </Link>
      </h1>
      {withDescription && (
        <>
          <p className="mb-3">
            Hello friends, my name is Vincent van der Linden and you can find me online as{' '}
            <a
              href="https://github.com/vblinden"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              @vblinden
            </a>
            . I am currently working as a Software Engineer at team.blue. On this website you can find some thoughts and
            other babblings that I thought were important or useful enough to put online. Please enjoy.
          </p>

          <p>
            Disclaimer: The opinions expressed herein are my own personal opinions and do not represent my employer’s
            view in any way.
          </p>
        </>
      )}
    </header>
  );
};

export default Header;
