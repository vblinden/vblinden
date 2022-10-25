import Content from 'app/posts/content';
import Header from 'app/posts/header';
import Syntax from 'components/Syntax';

export default function Page() {
  return (
    <>
      <Header title={'How to install AMQP on macOS'} date={'October 2, 2020'} />

      <Content>
        <p>I recently wanted to install the AMQP extension for PHP version 7.4, but ran into some issues on macOS.</p>

        <p>It should be as easy as running the following commands:</p>

        <Syntax>
          {`
            brew install rabbitmq-c

            pecl install amqp
          `}
        </Syntax>

        <p>Unfortunately I ran into the following issues:</p>

        <Syntax>
          {`
            Warning: mkdir(): File exists in System.php on line 294 PHP Warning: mkdir(): File exists in
            /usr/local/Cellar/php/7.4.10/share/php/pear/System.php on line 294 Warning: mkdir(): File exists in
            /usr/local/Cellar/php/7.3.3/share/php/pear/System.php on line 294 ERROR: failed to mkdir
            /usr/local/Cellar/php/7.4.10/pecl/20190812
          `}
        </Syntax>

        <p>
          The command fails because pecl can’t create the directories itself. This can be easily fixed by executing the
          following commands:
        </p>

        <Syntax>
          {`
            pecl config-get ext_dir | pbcopy

            mkdir -p $PASTECLIPBOARD
          `}
        </Syntax>

        <p>You should also manually export the PKG_CONFIG_PATH because Homebrew fails to do so.</p>

        <Syntax>
          {`
            export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:/usr/local/Cellar/rabbitmq-c/0.10.0/lib/pkgconfig"
          `}
        </Syntax>

        <p>
          Now run the two commands again and it should work. I hope this helps anybody who also is running into this
          issue.
        </p>
      </Content>
    </>
  );
}
