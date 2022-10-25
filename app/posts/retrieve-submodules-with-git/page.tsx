import Content from 'app/posts/content';
import Header from 'app/posts/header';
import Syntax from 'components/Syntax';

export default function Page() {
  return (
    <>
      <Header title={'Never. Forget. Backups.'} date={'August 26, 2019'} />

      <Content>
        <p>
          Yesterday I had a really hard time with pulling in a submodule from an old git repository I had laying around.
          I thought a quick Google with DuckDuckGo would solve all my problems, but alas. There was a lot of outdated
          information that simply didn’t work with the Git version I had installed on my computer (or maybe I just
          applied it incorrectly).
        </p>

        <p>
          Finally I found an{' '}
          <a href="https://stackoverflow.com/a/44692935" target="_blank" rel="noreferrer">
            answer
          </a>{' '}
          on StackOverflow that didn't quite work, but send me in the right direction. Eventually I gave up the
          DuckDuckGoing and did what I should have done in the first place: Look at the{' '}
          <a href="https://git-scm.com/docs/git-submodule" target="_blank" rel="noreferrer">
            Git documentation
          </a>{' '}
          for the submodule command.
        </p>

        <p>The command I ran (from the root of my git folder) that worked for me after I cloned my repository was:</p>

        <Syntax language="bash">{`git submodule update --init --recursive`}</Syntax>

        <p>Lesson learned: If there is documentation available, consult that first.</p>
      </Content>
    </>
  );
}
