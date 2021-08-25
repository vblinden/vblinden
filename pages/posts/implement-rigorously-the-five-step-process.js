import Head from 'next/head';
import Post from '../../components/Post';

const WhatDidYouUndesign = () => {
  return (
    <Post>
      <Head>
        <title>vblinden - What did you undesign?</title>
      </Head>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-4 mt-3">
            <h1 className="fs-3">Implement Rigorously: The Five Step Process</h1>
            <p>Date: 2021, August 25th</p>
          </div>

          <p>
            I have always been a fan of Elon Musk and his philosophy of continuously improving products by recursively
            iterating. In one of the videos made by Everyday Astronaut (see video at end of post) he gives a tour of the
            SpaceX facilities and in some parts of the video he elaborates the method he is using at SpaceX to build a
            new iteration of Starship every couple of weeks. He calls this &quot;Implement Rigorously&quot;. I have
            taken the liberty to write down these five steps (paraphrasing his words).
          </p>

          <p className="fw-bold">Step 1: Make your requirements less dumb</p>
          <p>
            Your requirements are definitely dumb. It does not matter who gave them to you. It is particularly dangerous
            if a smart person gave you the requirements, because you might not question them enough. Everyone is wrong.
            No matter who you are, everyone is wrong some of the time. All designs are wrong, it’s just a matter of how
            wrong.
          </p>
          <p>
            Each requirement needs to come with a name, not a department. Because you can&apos;t ask the departments,
            you have to ask a person. The person also must take responsibility for that requirement. Otherwise you could
            have a requirement that an intern randomly came up with two years ago and they are not even at the company
            anymore.
          </p>

          <p className="fw-bold">Step 2: Delete the part or process</p>
          <p>
            If you are not occasionally adding things back in, you are not deleting enough. The bias tends to be very
            strongly towards: &quot;Let&apos;s add this part or process in case we need it&quot;. But you can have
            arguments for so many things. Things can always be added later. If you are not adding things back 10% of the
            time, you&apos;re clearly not deleting enough. Just delete it.
          </p>

          <p className="fw-bold">Step 3: Simplify or optimize </p>
          <p>
            It is possibly the most common error of a smart engineer to optimize a thing that should not exist. Everyone
            is trained in high school and college to always answer the question. You can&apos;t tell your professor his
            question is dumb, because you will get a bad grade. You always have to answer the question. So everyone has
            a mental straight jacket on without knowing it and they&apos;ll work on optimizing the thing that simply
            shouldn&apos;t exist in the first place.
          </p>

          <p className="fw-bold">Step 4: Accelerate cycle time</p>
          <p>
            You&apos;re moving too slowly, go faster. But don&apos;t go faster before you have worked on the other three
            things (requirements, deleting and simplifying) first. For example, if you&apos;re digging your grave,
            don&apos;t dig it faster, stop digging your grave. Then look for things that can go faster. You can always
            make things go faster.
          </p>

          <p className="fw-bold">Step 5: Automate</p>
          <p>
            The last step is automating the design or process as much as possible. An important part of this is to
            remove in-process testing after the problems have been diagnosed; if a product is reaching the end of a
            production line with a high acceptance rate, there is no need for in-process testing.
          </p>

          <p>
            I recommend you watch the whole video (and series). It gives very useful insights in how Elon Musk is
            leading SpaceX (and Tesla) in iterating as much as possible and getting so much stuff done.
          </p>

          <div className="d-flex align-items-center">
            <iframe
              className="mx-auto mb-4"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/t705r8ICkRw?start=808"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    </Post>
  );
};

export default WhatDidYouUndesign;
