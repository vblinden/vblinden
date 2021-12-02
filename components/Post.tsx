import Header from './Header';

const Post = ({ children }) => {
  return (
    <div className="mb-8">
      <Header />

      {children}
    </div>
  );
};

export default Post;
