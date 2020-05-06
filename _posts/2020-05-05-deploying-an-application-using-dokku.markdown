---
layout: post
title: "Deploying an application using Dokku (with https and redirects)"
date: 2020-05-05 13:39:37 +0200
categories: docker dokku
---

If you are creating a web application, you have to deploy it at some point. Most of the time I choose a service or provider that manages the server for me and I just have to deploy the application. Think about [Heroku](https://www.heroku.com/), [Fortrabbit](https://www.fortrabbit.com/), [Google Cloud](https://cloud.google.com/), [Microsoft Azure](https://azure.microsoft.com/en-us/) or [AWS](https://aws.amazon.com/). These services are great and work really well, however they can really add up in cost when you want to scale up an application or have multiple little applications running. 

This is why I recently purchased a Virtual Private Server (VPS), they are a lot cheaper (cheap as in $2.50 a month!) then the providers mentioned above. This is of course if you are not taking in account that these providers also offer a free tier for some of their services (mostly you can have one single application at most though).

The only downside to this is that you have to manage the server yourself and that can be a real hassle if you don't have much experience and knowledge about managing a server. Luckily there are a lot of tutorials for [initial server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04) out there which you can follow. Don't forget to install the `unattended-upgrades` package (if you are using Ubuntu), enable a firewall and you will be fine (I am **not** an expert on server management or security, so please don't quote me on this).

Anyway, the real pain is to manage and install every single application and it's dependencies. For example: when you are hosting a PHP application with Nginx as the webserver you have to install PHP, Composer (for package management), Nginx and PHP-FPM. If you have some front-end dependencies like Vue.js with Webpack you also have to install Node.js and maintain those packages. 

Luckily for me (and you), we have [Docker](https://www.docker.com/) these days which makes it much easier to manage all these stuff because each application will have it's own `Dockerfile` or `docker-compose.yml` file which will handle everything that is needed to run the application correctly. This is a much better approach already, except now we aren't managing dependencies directly but we are managing containers. Worrying about what will happen when a container will fall over, will it restart correctly, what happens if my database container fails, etc.

This is where [Dokku](https://github.com/dokku/dokku) gets in the picture. Dokku describes itself as "a Docker powered mini-Heroku", and it really is as easy to use as Heroku. It will take care of all server related stuff, like managing dependencies, using SSL with Let's Encrypt, redirects of domains etc. But at the same time it will allow us to define our own `Dockerfile` which will give us more room to customize the way our application is handled by Dokku.

I always use the following commands to get Dokku up and running with an application using the [Buildpacks](https://github.com/dokku/dokku/blob/master/docs/deployment/methods/buildpacks.md) that Dokku supports at the moment.

To install Dokku on your server, you should follow the [official documentation](http://dokku.viewdocs.io/dokku/getting-started/installation/). They also have a [great guide](http://dokku.viewdocs.io/dokku/deployment/application-deployment/) for deploying your first application.

When Dokku is installed we can create a new app by executing the following commands on your server. This will tell Dokku we want to create a new application with the name `appname` and assign two domains to it: `example.com` and `www.example.com`.

```bash
dokku apps:create appname
dokku domains:add appname example.com
dokku domains:add appname www.example.com
```

You application should now be reachable at `example.com` and `www.example.com` if you have updated your DNS records correctly. Next thing we need to tell Dokku to use SSL. Dokku doesn't support Let's Encrypt certificates out of the box, so we need to install a [plugin](https://github.com/dokku/dokku-letsencrypt) for it. Execute the following commands on your server.
```bash
# Install the plugin:
sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git 

# Tell Let's Encrypt which email to use:
dokku config:set --global DOKKU_LETSENCRYPT_EMAIL=test@example.com 

# Enable Let's Encrypt for our application:
dokku letsencrypt appname 
```

Congratulations your application now uses SSL certificates from Let's Encrypt. The last thing we need to do is to tell Dokku that we want the redirect the `example.com` domain to the `www.example.com` domain, so we don't have double content on the internet. We also have to install a [plugin](https://github.com/dokku/dokku-redirect) to make it work.

```bash
# Install the plugin:
dokku plugin:install https://github.com/dokku/dokku-redirect.git

# Redirect example.com to www.example.com:
dokku redirect:set appname example.com www.example.com
```

That's it! You now have a application running on a server using Let's Encrypt SSL certificates and redirecting the root domain `example.com` to the subdomain `www.example.com`.

In a next blog post I will show you how to use a custom `Dockerfile` and use it with Dokku. If you want to read more about that already, you can check out the [Dokku documentation](http://dokku.viewdocs.io/dokku/deployment/methods/dockerfiles/).
