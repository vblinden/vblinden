import Link from 'next/link';

const Post = ({ children }) => {
  return (
    <div className="container post mb-3">
      <div className="row mt-3">
        <div className="col-md-12">
          <h1 className="fs-3 fw-bold">
            <Link href="/">
              <a className="text-decoration-none text-body">vblinden.</a>
            </Link>
          </h1>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Post;
