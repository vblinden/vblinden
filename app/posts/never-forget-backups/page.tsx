import Content from 'app/posts/content';
import Header from 'app/posts/header';

export default function Page() {
  return (
    <>
      <Header title={'Never. Forget. Backups.'} date={'August 26, 2019'} />

      <Content>
        <p>
          Unfortunately DigitalOcean had a node failure yesterday in their AMS3 data center. And sadly my virtual
          machine running my blog was on there and I didn’t have backups enabled. So all my data is permanently gone.
          Which is not a huge problem, because I only had two small blog posts on here. So today I decided to make my
          blog a static website using{' '}
          <a href="https://nextjs.org" target={'_blank'} rel="noreferrer">
            Next.js
          </a>
          .
        </p>
      </Content>
    </>
  );
}
