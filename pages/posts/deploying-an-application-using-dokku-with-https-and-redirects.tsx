import Head from 'next/head';
import Post from '../../components/Post';
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/atom-one-dark.css';

const DeployingAnApplicationUsingDokku = () => {
  return (
    <Post>
      <Head>
        <title>vblinden - Deploying an application using Dokku (with HTTPS and redirects)</title>
      </Head>

      <h1 className="text-xl font-bold font-sans">Deploying an application using Dokku (with HTTPS and redirects)</h1>
      <p className="mb-8">
        <span className="font-bold font-sans">Date:</span> 2020, May 5th
      </p>

      <p className="mb-3">
        If you are creating a web application, you have to deploy it at some point. Most of the time I choose a service
        or provider that manages the server for me and I just have to deploy the application. Think about{' '}
        <a
          href="https://www.heroku.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Heroku
        </a>
        ,{' '}
        <a
          href="https://www.fortrabbit.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Fortrabbit
        </a>
        ,{' '}
        <a
          href="https://cloud.google.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Google Cloud
        </a>
        ,{' '}
        <a
          href="https://azure.microsoft.com/en-us/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Microsoft Azure
        </a>{' '}
        or{' '}
        <a
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          AWS
        </a>
        . These services are great and work really well, however they can really add up in cost when you want to scale
        up an application or have multiple little applications running.
      </p>

      <p className="mb-3">
        This is why I recently purchased a Virtual Private Server (VPS), they are a lot cheaper (cheap as in $2.50 a
        month!) then the providers mentioned above. This is of course if you are not taking in account that these
        providers also offer a free tier for some of their services (mostly you can have one single application at most
        though).
      </p>

      <p>
        The only downside to this is that you have to manage the server yourself and that can be a real hassle if you
        don’t have much experience and knowledge about managing a server. Luckily there are a lot of tutorials for{' '}
        <a
          href="https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          initial server setup
        </a>{' '}
        out there which you can follow. Don’t forget to install the <code>unattended-upgrades</code> package (if you are
        using Ubuntu), enable a firewall and you will be fine (I am <strong>not</strong> an expert on server management
        or security, so please don’t quote me on this).
      </p>

      <p className="mb-3">
        Anyway, the real pain is to manage and install every single application and it’s dependencies. For example: when
        you are hosting a PHP application with Nginx as the webserver you have to install PHP, Composer (for package
        management), Nginx and PHP-FPM. If you have some front-end dependencies like Vue.js with Webpack you also have
        to install Node.js and maintain those packages.
      </p>

      <p className="mb-3">
        Luckily for me (and you), we have{' '}
        <a
          href="https://www.docker.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Docker
        </a>{' '}
        these days which makes it much easier to manage all these stuff because each application will have it’s own{' '}
        <code>Dockerfile</code> or <code>docker-compose.yml</code> file which will handle everything that is needed to
        run the application correctly. This is a much better approach already, except now we aren’t managing
        dependencies directly but we are managing containers. Worrying about what will happen when a container will fall
        over, will it restart correctly, what happens if my database container fails, etc.
      </p>

      <p className="mb-3">
        This is where{' '}
        <a
          href="https://github.com/dokku/dokku"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Dokku
        </a>{' '}
        gets in the picture. Dokku describes itself as “a Docker powered mini-Heroku”, and it really is as easy to use
        as Heroku. It will take care of all server related stuff, like managing dependencies, using SSL with Let’s
        Encrypt, redirects of domains etc. But at the same time it will allow us to define our own{' '}
        <code>Dockerfile</code> which will give us more room to customize the way our application is handled by Dokku.
      </p>

      <p className="mb-3">
        I always use the following commands to get Dokku up and running with an application using the{' '}
        <a
          href="https://github.com/dokku/dokku/blob/master/docs/deployment/methods/buildpacks.md"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Buildpacks
        </a>{' '}
        that Dokku supports at the moment.
      </p>

      <p className="mb-3">
        To install Dokku on your server, you should follow the{' '}
        <a
          href="http://dokku.viewdocs.io/dokku/getting-started/installation/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          official documentation
        </a>
        . They also have a{' '}
        <a
          href="http://dokku.viewdocs.io/dokku/deployment/application-deployment/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          great guide
        </a>{' '}
        for deploying your first application.
      </p>

      <p className="mb-3">
        When Dokku is installed we can create a new app by executing the following commands on your server. This will
        tell Dokku we want to create a new application with the name <code>appname</code> and assign two domains to it:{' '}
        <code>example.com</code> and <code>www.example.com</code>.
      </p>

      <Highlight className="bash mb-3">
        {'dokku apps:create appname\ndokku domains:add appname example.com\ndokku domains:add appname www.example.com'}
      </Highlight>

      <p className="mb-3">
        You application should now be reachable at <code>example.com</code> and <code>www.example.com</code> if you have
        updated your DNS records correctly. Next thing we need to tell Dokku to use SSL. Dokku doesn’t support Let’s
        Encrypt certificates out of the box, so we need to install a{' '}
        <a
          href="https://github.com/dokku/dokku-letsencrypt"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          plugin
        </a>{' '}
        for it. Execute the following commands on your server.
      </p>

      <Highlight className="bash mb-3">
        {
          "# Install the plugin:\nsudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git\n\n# Tell Let's Encrypt which email to use:\ndokku config:set --global DOKKU_LETSENCRYPT_EMAIL=test@example.com\n\n# Enable Let's Encrypt for our application:\ndokku letsencrypt appname"
        }
      </Highlight>

      <p className="mb-3">
        Congratulations your application now uses SSL certificates from Let’s Encrypt. The last thing we need to do is
        to tell Dokku that we want the redirect the <code>example.com</code> domain to the <code>www.example.com</code>{' '}
        domain, so we don’t have double content on the internet. We also have to install a{' '}
        <a
          href="https://github.com/dokku/dokku-redirect"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          plugin
        </a>{' '}
        to make it work.
      </p>

      <Highlight className="bash mb-3">
        {
          '# Install the plugin:\ndokku plugin:install https://github.com/dokku/dokku-redirect.git\n\n# Redirect example.com to www.example.com:\ndokku redirect:set appname example.com www.example.com'
        }
      </Highlight>

      <p className="mb-3">
        That’s it! You now have a application running on a server using Let’s Encrypt SSL certificates and redirecting
        the root domain <code>example.com</code> to the subdomain <code>www.example.com</code>.
      </p>

      <p className="mb-3">
        In a next blog post I will show you how to use a custom <code>Dockerfile</code> and use it with Dokku. If you
        want to read more about that already, you can check out the{' '}
        <a
          href="http://dokku.viewdocs.io/dokku/deployment/methods/dockerfiles/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Dokku documentation
        </a>
        .
      </p>
    </Post>
  );
};

export default DeployingAnApplicationUsingDokku;
