import Head from 'next/head';
import Post from '../../components/Post';
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/atom-one-dark.css';

const RetrieveSubmodulesWithGit = () => {
  return (
    <Post>
      <Head>
        <title>vblinden - Retrieve submodules with Git</title>
      </Head>

      <h1 className="text-xl font-bold font-sans">Retrieve submodules with Git</h1>
      <p className="mb-8">
        <span className="font-bold font-sans">Date:</span> 2019, November 8th
      </p>

      <p className="mb-3">
        Yesterday I had a really hard time with pulling in a submodule from an old git repository I had laying around. I
        thought a quick Google with DuckDuckGo would solve all my problems, but alas. There was a lot of outdated
        information that simply didn’t work with the Git version I had installed on my computer (or maybe I just applied
        it incorrectly).
      </p>

      <p className="mb-3">
        Finally I found an{' '}
        <a
          href="https://stackoverflow.com/a/44692935"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          answer
        </a>{' '}
        on StackOverflow that didn&apos;t quite work, but send me in the right direction. Eventually I gave up the
        DuckDuckGoing and did what I should have done in the first place: Look at the{' '}
        <a
          href="https://git-scm.com/docs/git-submodule"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Git documentation
        </a>{' '}
        for the submodule command.
      </p>

      <p className="mb-3">
        The command I ran (from the root of my git folder) that worked for me after I cloned my repository was:
      </p>

      <Highlight className="bash mb-3">{'git submodule update --init --recursive'}</Highlight>

      <p>Lesson learned: If there is documentation available, consult that first.</p>
    </Post>
  );
};

export default RetrieveSubmodulesWithGit;
