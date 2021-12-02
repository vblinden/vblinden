import Head from 'next/head';
import Post from '../../components/Post';
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/atom-one-dark.css';

const RetrieveSubmodulesWithGit = () => {
  return (
    <Post>
      <Head>
        <title>vblinden - How to install AMQP on macOS</title>
      </Head>

      <h1 className="text-xl font-bold font-sans">How to install AMQP on macOS</h1>
      <p className="mb-8">
        <span className="font-bold font-sans">Date:</span> 2020, October 2th
      </p>

      <p className="mb-3">
        I recently wanted to install the AMQP extension for PHP version 7.4, but ran into some issues on macOS.
      </p>
      <p className="mb-3">It should be as easy as running the following commands:</p>

      <Highlight className="bash mb-3">{'brew install rabbitmq-c\n\npecl install amqp'}</Highlight>

      <p className="mb-3">Unfortunately I ran into the following issues:</p>

      <Highlight className="bash mb-3">
        {
          'Warning: mkdir(): File exists in System.php on line 294 PHP Warning: mkdir(): File exists in\n/usr/local/Cellar/php/7.4.10/share/php/pear/System.php on line 294 Warning: mkdir(): File exists in\n/usr/local/Cellar/php/7.3.3/share/php/pear/System.php on line 294 ERROR: failed to mkdir\n/usr/local/Cellar/php/7.4.10/pecl/20190812'
        }
      </Highlight>

      <p className="mb-3">
        The command fails because <code>pecl</code> can’t create the directories itself. This can be easily fixed by
        executing the following commands:
      </p>

      <Highlight className="bash mb-3">{'pecl config-get ext_dir | pbcopy\n\nmkdir -p $PASTECLIPBOARD'}</Highlight>

      <p className="mb-3">
        You should also manually export the <code>PKG_CONFIG_PATH</code> because Homebrew fails to do so.
      </p>

      <Highlight className="bash mb-3">
        {'export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:/usr/local/Cellar/rabbitmq-c/0.10.0/lib/pkgconfig"'}
      </Highlight>

      <p>
        Now run the two commands again and it should work. I hope this helps anybody who also is running into this
        issue.
      </p>
    </Post>
  );
};

export default RetrieveSubmodulesWithGit;
