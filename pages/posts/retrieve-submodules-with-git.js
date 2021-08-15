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
      <div className="row">
        <div className="col-md-12">
          <div className="mb-4 mt-3">
            <h1>Retrieve submodules with Git</h1>
            <p>Date: 2019, November 8th</p>
          </div>

          <p>
            Yesterday I had a really difficult time with pulling in a submodule from an old git repository I had laying
            around. I thought a quick <strike>Google</strike> DuckDuckGo search would solve all my problems, but alas.
            There was a lot of outdated information that simply didn’t work with the Git version I had installed on my
            computer (or I applied incorrectly).
          </p>

          <p>
            Finally I found an{' '}
            <a href="https://stackoverflow.com/a/44692935" target="_blank" rel="noreferrer">
              answer
            </a>{' '}
            on StackOverflow that quite work, but send me in the right direction. Eventually I gave up and did what I
            should have done in the first place: Look at the{' '}
            <a href="https://git-scm.com/docs/git-submodule" target="_blank" rel="noreferrer">
              Git documentation
            </a>{' '}
            for the submodule command.
          </p>

          <p>The command I ran (from the root of my git folder) that worked for me after I cloned my repository was:</p>

          <Highlight className="bash">{'git submodule update --init --recursive'}</Highlight>

          <p>Lesson learned: If there is documentation available, consult that first.</p>
        </div>
      </div>
    </Post>
  );
};

export default RetrieveSubmodulesWithGit;
