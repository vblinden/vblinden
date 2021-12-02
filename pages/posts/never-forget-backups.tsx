import Head from 'next/head';
import Post from '../../components/Post';

const NeverForgetBackups = () => {
  return (
    <Post>
      <Head>
        <title>vblinden - Never. Forget. Backups.</title>
      </Head>

      <h1 className="text-xl font-bold font-sans">Never. Forget. Backups.</h1>
      <p className="mb-8">
        <span className="font-bold font-sans">Date:</span> 2019, August 26th
      </p>

      <p>
        Unfortunately DigitalOcean had a node failure yesterday in their AMS3 data center. And sadly my virtual machine
        running my blog was on there and I didn’t have backups enabled. So all my data is permanently gone. Which is not
        a huge problem, because I only had two small blog posts on here. So today I decided to make my blog a static
        website using{' '}
        <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
          Next.js
        </a>
        .
      </p>
    </Post>
  );
};

export default NeverForgetBackups;
