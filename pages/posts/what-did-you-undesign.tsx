import Head from 'next/head';
import Post from '../../components/Post';

const WhatDidYouUndesign = () => {
  return (
    <Post>
      <Head>
        <title>vblinden - What did you undesign?</title>
      </Head>

      <h1 className="text-xl font-bold font-sans">What did you undesign?</h1>
      <p className="mb-8">
        <span className="font-bold font-sans">Date:</span> 2020, September 28th
      </p>

      <p className="mb-3">
        In the video below Eric Berger from Ars Technica asks the question on how Elon Musk and the team at SpaceX build
        the iteration of Starship within 4/5 months and how they’d go so fast. Here is the transcript for those who want
        to read instead of listening:
      </p>

      <blockquote className="mb-3">
        <p>
          <strong>Eric Berger:</strong> How did you go so fast?
        </p>

        <p>
          <strong>Elon Musk:</strong> I have this mantra: if the schedule is long, it’s wrong. If it’s tight, it’s
          right. Basically just have recursive improvement on schedule. And say with every feedback loop: Did this make
          it go faster? If it didn’t, we gonna need to fix it. If the design takes a long time to build, it’s the wrong
          design. This is the fundamental thing. The tendency is to complicate things. I have another: the best part is
          no part. The best process is no process. It weights nothing, it costs nothing. Can’t go wrong. As obvious as
          that sound. The best part is no part. The thing I’m most impressed with when I have the design meetings at
          SpaceX is: what did you undesign? Undesigning is the best thing. Just delete it. That’s the best thing.
        </p>
      </blockquote>

      <p className="mb-10">
        Tell me, did you undesign something in your projects recently? Or are you in a scenario where you are only
        adding more and more stuff?
      </p>

      <div className="relative" style={{ padding: '28%' }}>
        <iframe
          className="mx-auto mb-4 absolute inset-0 w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/sOpMrVnjYeY?start=4800"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
    </Post>
  );
};

export default WhatDidYouUndesign;
