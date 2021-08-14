import Post from '../../components/Post';

const NeverForgetBackups = () => {
  return (
    <Post>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-4 mt-3">
            <h1>Never. Forget. Backups.</h1>
            <p>Date: 2019, August 26th</p>
          </div>

          <p>
            Unfortunately DigitalOcean had a node failure yesterday in their AMS3 data center. And sadly my virtual
            machine running my blog was on there and I didn’t have backups enabled. So all my data is permanently gone.
            Which is not a huge problem, because I only had two small blog posts on here. So today I decided to make my
            blog a static website using{' '}
            <a href="https://nextjs.org" target="_blank" rel="noreferrer">
              Next.js
            </a>
            .
          </p>
        </div>
      </div>
    </Post>
  );
};

export default NeverForgetBackups;
