import Content from 'app/posts/content';
import Header from 'app/posts/header';
import Syntax from 'components/Syntax';

export default function Page() {
  return (
    <>
      <Header title={"Setup Let's Encrypt with Nginx"} date={'November 19, 2019'} />

      <Content>
        <p>
          When I migrated my VPS (with Ubuntu) to an other host, I needed to setup{' '}
          <a href="https://nginx.org/" target="_blank" rel="noreferrer">
            Nginx
          </a>{' '}
          again with{' '}
          <a href="https://letsencrypt.org/" target="_blank" rel="noreferrer">
            Let's Encrypt
          </a>{' '}
          but I always forget how to exactly do it. This blog post is aimed to describe in easy steps how to setup up
          Nginx with auto-renewing Let’s Encrypt SSL certificates.
        </p>

        <h2>Setting up Nginx</h2>

        <p>Setting up Nginx is super easy on Ubuntu. Run the following commands on your VPS.</p>

        <Syntax>
          {`
            sudo apt update
            sudo apt install nginx
          `}
        </Syntax>

        <p>
          If you have a firewall (ufw) enabled run the following command to enable HTTP (80) and HTTPS (443) to the
          firewall.
        </p>

        <Syntax>
          {`
            sudo ufw allow 'Nginx Full'
          `}
        </Syntax>

        <h2>Installing Certbot</h2>

        <p>
          <a href="https://certbot.eff.org" target="_blank" rel="noreferrer">
            Certbot
          </a>{' '}
          is also super easy. Run the following commands on your VPS.
        </p>

        <Syntax>
          {`
            sudo apt-get update
            sudo apt-get install software-properties-common

            sudo add-apt-repository universe
            sudo add-apt-repository ppa:certbot/certbot

            sudo apt-get update
            sudo apt-get install certbot python-certbot-nginx
          `}
        </Syntax>

        <h2>Getting a SSL certificate from Let’s Encrypt</h2>

        <p>
          Now that we installed Certbot we can get a certificate from Let’s Encrypt by running the following command.
        </p>

        <Syntax>
          {`
            sudo certbot --nginx -d example.com -d www.example.com
          `}
        </Syntax>

        <h2>Auto-renew your certificates</h2>

        <p>
          To auto-renew the certificates you have installed, add the following command to your crontab (open by running
          crontab -e from terminal)
        </p>

        <Syntax>
          {`
            0 \* \* \* \* sudo certbot renew
          `}
        </Syntax>
      </Content>
    </>
  );
}
