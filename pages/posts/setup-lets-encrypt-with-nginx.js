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
      <div className="row">
        <div className="col-md-12">
          <div className="mb-4 mt-3">
            <h1 className="fs-3">Let&apos;s Encrypt and Nginx</h1>
            <p>Date: 2019, November 19th</p>
          </div>

          <p>
            When I migrated my VPS (with Ubuntu) to an other host, I needed to setup{' '}
            <a href="https://nginx.org/" target="_blank" rel="noreferrer">
              Nginx
            </a>{' '}
            again with{' '}
            <a href="https://letsencrypt.org/" target="_blank" rel="noreferrer">
              Let&apos;s Encrypt
            </a>{' '}
            but I always forget how to exactly do it. This blog post is aimed to describe in easy steps how to setup up
            Nginx with auto-renewing Let’s Encrypt SSL certificates.
          </p>

          <h2 id="setting-up-nginx" className="fs-4 fw-bold">
            Setting up Nginx
          </h2>
          <p>Setting up Nginx is super easy on Ubuntu. Run the following commands on your VPS.</p>

          <Highlight className="bash">{'sudo apt update\nsudo apt install nginx'}</Highlight>

          <p>
            If you have a firewall (ufw) enabled run the following command to enable HTTP (80) and HTTPS (443) to the
            firewall.
          </p>

          <Highlight className="bash">{"sudo ufw allow 'Nginx Full'"}</Highlight>

          <h2 id="installing-certbot" className="fs-4 fw-bold">
            Installing Certbot
          </h2>
          <p>
            Installing{' '}
            <a href="https://certbot.eff.org" target="_blank" rel="noreferrer">
              Certbot
            </a>{' '}
            is also super easy. Run the following commands on your VPS.
          </p>

          <Highlight className="bash">
            {
              'sudo apt-get update\nsudo apt-get install software-properties-common\nsudo add-apt-repository universe\nsudo add-apt-repository ppa:certbot/certbot\nsudo apt-get update\nsudo apt-get install certbot python-certbot-nginx'
            }
          </Highlight>

          <h2 id="getting-a-ssl-certificate-from-let-s-encrypt" className="fs-4 fw-bold">
            Getting a SSL certificate from Let’s Encrypt
          </h2>
          <p>
            Now that we installed Certbot we can get a certificate from Let’s Encrypt by running the following command.
          </p>

          <Highlight className="bash">{'sudo certbot --nginx -d example.com -d www.example.com'}</Highlight>

          <h2 id="auto-renew-your-certificates" className="fs-4 fw-bold">
            Auto-renew your certificates
          </h2>
          <p>
            To auto-renew the certificates you have installed, add the following command to your crontab (open by
            running <code>crontab -e</code> from terminal)
          </p>

          <Highlight className="bash">{'0 * * * * sudo certbot renew'}</Highlight>
        </div>
      </div>
    </Post>
  );
};

export default SetupLetsEncryptWithNginx;
