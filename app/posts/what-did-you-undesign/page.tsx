import Content from 'app/posts/content';
import Header from 'app/posts/header';

export default function Page() {
  return (
    <>
      <Header title={'What did you undesign?'} date={'September 28, 2020'} />

      <Content>
        <p>
          In the video below Eric Berger from Ars Technica asks the question on how Elon Musk and the team at SpaceX
          build the iteration of Starship within 4/5 months and how they’d go so fast. Here is the transcript for those
          who want to read instead of listening:
        </p>

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

        <p>
          What did you undesign in your projects recently? Or are you in a scenario where you are only adding more and
          more stuff?
        </p>

        <iframe
          className="mx-auto mt-4"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/sOpMrVnjYeY?start=4800"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </Content>
    </>
  );
}
