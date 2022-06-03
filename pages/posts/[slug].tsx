import Header from '@/components/Header';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Post = ({ post }) => {
  const Content = useMDXComponent(post.body.code);

  const [views, setViews] = useState('–');

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/views/${post.slug}`, {
        method: 'POST',
      });

      setViews((await response.json()).total);
    })();
  }, [post.slug]);

  return (
    <>
      <Head>
        <title>vblinden - {post.title}</title>
      </Head>
      <Header />
      <h1 className="text-4xl font-bold font-sans mb-1">{post.title}</h1>
      <p className="mb-8">
        <span className="font-bold font-sans">Date:</span> {format(parseISO(post.date), 'MMMM dd, yyyy')} <br />
        <span className="font-bold font-sans">Reading time:</span> {post.readingTime.text} ({post.wordCount}) <br />
        <span className="font-bold font-sans">Views:</span> {views}
      </p>

      <div className="content mb-10">
        <Content />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return {
    props: {
      post,
    },
  };
}

export default Post;
