import Head from 'next/head';
import Post from '../../components/Post';
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/atom-one-dark.css';

const SetupLetsEncryptWithNginx = () => {
  return (
    <Post>
      <Head>
        <title>vblinden - Setup Let&apos;s Encrypt with Nginx</title>
      </Head>

      <h1 className="text-xl font-bold font-sans">Let&apos;s Encrypt and Nginx</h1>
      <p className="mb-8">
        <span className="font-bold font-sans">Date:</span> 2019, November 19th
      </p>

      <p className="mb-3">
        When I migrated my VPS (with Ubuntu) to an other host, I needed to setup{' '}
        <a href="https://nginx.org/" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
          Nginx
        </a>{' '}
        again with{' '}
        <a
          href="https://letsencrypt.org/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Let&apos;s Encrypt
        </a>{' '}
        but I always forget how to exactly do it. This blog post is aimed to describe in easy steps how to setup up
        Nginx with auto-renewing Let’s Encrypt SSL certificates.
      </p>

      <h2 id="setting-up-nginx" className="text-lg font-sans font-bold">
        Setting up Nginx
      </h2>
      <p className="mb-3">Setting up Nginx is super easy on Ubuntu. Run the following commands on your VPS.</p>

      <Highlight className="bash mb-3">{'sudo apt update\nsudo apt install nginx'}</Highlight>

      <p className="mb-3">
        If you have a firewall (ufw) enabled run the following command to enable HTTP (80) and HTTPS (443) to the
        firewall.
      </p>

      <Highlight className="bash mb-3">{"sudo ufw allow 'Nginx Full'"}</Highlight>

      <h2 id="installing-certbot" className="text-lg font-sans font-bold">
        Installing Certbot
      </h2>
      <p className="mb-3">
        Installing{' '}
        <a
          href="https://certbot.eff.org"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Certbot
        </a>{' '}
        is also super easy. Run the following commands on your VPS.
      </p>

      <Highlight className="bash mb-3">
        {
          'sudo apt-get update\nsudo apt-get install software-properties-common\nsudo add-apt-repository universe\nsudo add-apt-repository ppa:certbot/certbot\nsudo apt-get update\nsudo apt-get install certbot python-certbot-nginx'
        }
      </Highlight>

      <h2 id="getting-a-ssl-certificate-from-let-s-encrypt" className="text-lg font-sans font-bold">
        Getting a SSL certificate from Let’s Encrypt
      </h2>
      <p className="mb-3">
        Now that we installed Certbot we can get a certificate from Let’s Encrypt by running the following command.
      </p>

      <Highlight className="bash mb-3">{'sudo certbot --nginx -d example.com -d www.example.com'}</Highlight>

      <h2 id="auto-renew-your-certificates" className="text-lg font-sans font-bold">
        Auto-renew your certificates
      </h2>
      <p className="mb-3">
        To auto-renew the certificates you have installed, add the following command to your crontab (open by running{' '}
        <code>crontab -e</code> from terminal)
      </p>

      <Highlight className="bash">{'0 * * * * sudo certbot renew'}</Highlight>
    </Post>
  );
};

export default SetupLetsEncryptWithNginx;
