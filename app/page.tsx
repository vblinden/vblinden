import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="my-8">
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
          . I am currently working as a software engineer at team.blue. On this website you can find some thoughts and
          other babblings that I thought were important or useful enough to put online. Please enjoy.
        </p>

        <p>
          Disclaimer: The opinions expressed herein are my own personal opinions and do not represent my employer’s view
          in any way.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold font-sans mb-3">Blog.</h2>
        <ul className="list-inside list-disc ml-6">
          <li>
            <Link
              href="/posts/implement-rigorously-the-five-step-process"
              className="text-blue-600 hover:text-blue-800"
            >
              Implement Rigorously: The Five Step Process
            </Link>
          </li>
          <li>
            <Link href="/posts/how-to-install-amqp-on-macos" className="text-blue-600 hover:text-blue-800">
              How to install AMQP on macOS
            </Link>
          </li>
          <li>
            <Link href="/posts/what-did-you-undesign" className="text-blue-600 hover:text-blue-800">
              What did you undesign?
            </Link>
          </li>
          <li>
            <a
              href="/posts/deploying-an-application-using-dokku-with-https-and-redirects"
              className="text-blue-600 hover:text-blue-800"
            >
              Deploying an application using Dokku (with HTTPS and redirects)
            </a>
          </li>
          <li>
            <Link href="/posts/setup-lets-encrypt-with-nginx" className="text-blue-600 hover:text-blue-800">
              Setup Let's Encrypt with Nginx
            </Link>
          </li>
          <li>
            <Link href="/posts/retrieve-submodules-with-git" className="text-blue-600 hover:text-blue-800">
              Retrieve submodules with Git
            </Link>
          </li>
          <li>
            <Link href="/posts/never-forget-backups" className="text-blue-600 hover:text-blue-800">
              Never. Forget. Backups.
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold font-sans mb-3">Projects.</h2>
        <dl>
          <dt className="fw-normal">
            <a
              href="https://checkeroni.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              checkeroni.com
            </a>
          </dt>
          <dd>
            Super minimal, simple and inexpensive 24/7 uptime monitoring service. Create an account, add an url, and it
            will check it every couple of minutes. When the url is down, it will notify you via email, SMS or by pinging
            a webhook.
          </dd>

          <dt className="mt-3 fw-normal">
            <a
              href="https://bin.vblinden.dev"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              bin.vblinden.dev
            </a>
          </dt>
          <dd>
            Privbin is a online content-hosting service where users can store plain text publicly or privately for a
            specific duration. Client side encryption is optional.
          </dd>

          <dt className="mt-3 fw-normal">
            <a
              href="https://drinkmorewater.app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              drinkmorewater.app
            </a>
          </dt>
          <dd>
            This app does what is says: Help you drink more water. You can configure the kind of glasses you drink from,
            the type of beverages you drink and easily keep track of your daily water intake.
          </dd>

          <dt className="mt-3 fw-normal">
            <a
              href="https://nederboard.nl"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              nederboard.nl
            </a>
          </dt>
          <dd>
            A soundboard with snippets from all kinds of different meme videos in the Netherlands. Including classics
            like:{' '}
            <a
              href="https://nederboard.nl/board/helemaalknettah"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Helemaal knettah
            </a>
            ,{' '}
            <a
              href="https://nederboard.nl/board/rustahg"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Rustahg
            </a>
            ,{' '}
            <a
              href="https://nederboard.nl/board/mandje"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Mand
            </a>{' '}
            and many more!
          </dd>

          <dt className="mt-3 fw-normal">
            <a
              href="https://iloveitshipit.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              iloveitshipit.com
            </a>
          </dt>
          <dd>
            Small soundboard of the legendary words spoken by{' '}
            <a
              href="https://www.hanselman.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Scott Hanselman
            </a>{' '}
            during a .NET conference back in the day.
          </dd>
        </dl>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold font-sans mb-3">Contact.</h2>
        <p>You can reach me at blog [at] vblinden.dev.</p>
      </section>
    </>
  );
}
