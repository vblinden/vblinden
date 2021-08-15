import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>vblinden</title>
      </Head>
      <div className="row mt-5 mb-5">
        <div className="col-md-12">
          <h1 className="fs-3 fw-bold">vblinden.</h1>
          <p>
            Hello everyone, my online nickname is vblinden and I am currently working as a &quot;full stack
            developer&quot; at team.blue. On my site you can find some thoughts and other babbling that I thought were
            important enough to put online. Please enjoy.
          </p>
          <p>
            Disclaimer: The opinions expressed herein are my own personal opinions and do not represent my
            employer&apos;s view in any way.
          </p>
          <h2 className="fs-4 fw-bold mt-5">Writings.</h2>
          <ul>
            <li>
              <Link href="/posts/how-to-install-amqp-on-macos">
                <a>How to install AMQP on macOS</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/what-did-you-undesign">What did you undesign?</Link>
            </li>
            <li>
              <Link href="/posts/deploying-an-application-using-dokku-with-https-and-redirects">
                Deploying an application using Dokku (with https and redirects)
              </Link>
            </li>
            <li>
              <Link href="/posts/setup-lets-encrypt-with-nginx">Setup Let&apos;s Encrypt with Nginx</Link>
            </li>
            <li>
              <Link href="/posts/retrieve-submodules-with-git">Retrieve submodules with Git</Link>
            </li>
            <li>
              <Link href="/posts/never-forget-backups">Never. Forget. Backups.</Link>
            </li>
          </ul>
          {/* <p>
            <a href="">View all writings</a>.
          </p> */}
          <h2 className="fs-4 fw-bold mt-5">Projects.</h2>
          <dl>
            <dt>
              <a href="https://checkify.io" target="_blank" rel="noreferrer">
                checkify.io
              </a>
            </dt>
            <dd>
              Super minimal, simple and inexpensive 24/7 uptime monitoring service. Create an account, add an url, and
              it will check it every couple of minutes. When the url is down, it will notify you via email, SMS or by
              pinging a webhook.
            </dd>

            <dt className="mt-4">
              <a href="https://drinkmorewater.app" target="_blank" rel="noreferrer">
                drinkmorewater.app
              </a>
            </dt>
            <dd>
              This app does what is says: Help you drink more water. You can configure the kind of glasses you drink
              from, the type of beverages you drink and easily keep track of your daily water intake.
            </dd>

            <dt className="mt-4">
              <a href="https://nederboard.nl" target="_blank" rel="noreferrer">
                nederboard.nl
              </a>
            </dt>
            <dd>
              A soundboard with snippets from all kinds of different meme videos in the Netherlands. Including classics
              like:{' '}
              <a href="https://nederboard.nl/board/helemaalknettah" target="_blank" rel="noreferrer">
                Helemaal knettah
              </a>
              ,{' '}
              <a href="https://nederboard.nl/board/rustahg" target="_blank" rel="noreferrer">
                Rustahg
              </a>
              ,{' '}
              <a href="https://nederboard.nl/board/mandje" target="_blank" rel="noreferrer">
                Mand
              </a>{' '}
              and many more!
            </dd>

            <dt className="mt-4">
              <a href="https://iloveitshipit.com" target="_blank" rel="noreferrer">
                iloveitshipit.com
              </a>
            </dt>
            <dd>
              Small soundboard of the legendary words spoken by{' '}
              <a href="https://www.hanselman.com/" target="_blank" rel="noreferrer">
                Scott Hanselman
              </a>{' '}
              during a .NET conference back in the day.
            </dd>
          </dl>

          <h2 className="fs-4 fw-bold mt-5">Contact.</h2>
          <p>You can always reach me at blog [at] vblinden.dev.</p>
        </div>
      </div>
    </div>
  );
}
