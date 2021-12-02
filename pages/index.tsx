import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>vblinden</title>
      </Head>

      <Header withDescription />

      <section className="mb-8">
        <h2 className="text-xl font-bold font-sans mb-3">Blog.</h2>
        <ul className="list-inside list-disc ml-6">
          <li>
            <Link href="/posts/implement-rigorously-the-five-step-process">
              <a className="text-blue-600 hover:text-blue-800">Implement Rigorously: The Five Step Process</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/how-to-install-amqp-on-macos">
              <a className="text-blue-600 hover:text-blue-800">How to install AMQP on macOS</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/what-did-you-undesign">
              <a className="text-blue-600 hover:text-blue-800">What did you undesign?</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/deploying-an-application-using-dokku-with-https-and-redirects">
              <a className="text-blue-600 hover:text-blue-800">
                Deploying an application using Dokku (with https and redirects)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts/setup-lets-encrypt-with-nginx">
              <a className="text-blue-600 hover:text-blue-800">Setup Let&apos;s Encrypt with Nginx</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/retrieve-submodules-with-git">
              <a className="text-blue-600 hover:text-blue-800">Retrieve submodules with Git</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/never-forget-backups">
              <a className="text-blue-600 hover:text-blue-800">Never. Forget. Backups.</a>
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold font-sans mb-3">Projects.</h2>
        <dl>
          <dt className="fw-normal">
            <a
              href="https://checkify.io"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              checkify.io
            </a>
          </dt>
          <dd>
            Super minimal, simple and inexpensive 24/7 uptime monitoring service. Create an account, add an url, and it
            will check it every couple of minutes. When the url is down, it will notify you via email, SMS or by pinging
            a webhook.
          </dd>

          <dt className="mt-3 fw-normal">
            <a
              href="https://bin.vblinden.xyz"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              bin.vblinden.xyz
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

          <dt className="mt-3 fw-normal">
            <a
              href="https://lofi.vblinden.xyz"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              lofi.vblinden.xyz
            </a>
          </dt>
          <dd>An easy way to listen to different kind of LoFi music.</dd>

          <dt className="mt-3 fw-normal">
            <a
              href="https://piglatin.vblinden.xyz"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              piglatin.vblinden.xyz
            </a>
          </dt>
          <dd>
            A converter from plain English to Pig Latin, or &quot;Igpay Atinlay&quot; which is a language game or argot
            in which English words are altered to conceal the words from others not familiar with the rules.
          </dd>
        </dl>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold font-sans mb-3">Contact.</h2>
        <p>You can reach me at blog [at] vblinden.xyz.</p>
      </section>
    </>
  );
}
