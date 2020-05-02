---
layout: post
title: "Setup Let's Encrypt with Nginx"
date: 2019-11-14 19:31:13 +0200
categories: lets-encrypt nginx
---

When I migrated my VPS (with Ubuntu) to an other host, I needed to setup [Nginx](https://nginx.org/) again with [Let's Encrypt](https://letsencrypt.org/) but I always forget how to exactly do it. This blog post is aimed to describe in easy steps how to setup up Nginx with auto-renewing Let's Encrypt SSL certificates.

## Setting up Nginx
Setting up Nginx is super easy on Ubuntu. Run the following commands on your VPS.

```cmd
sudo apt update
sudo apt install nginx
```

If you have a firewall (ufw) enabled run the following command to enable HTTP (80) and HTTPS (443) to the firewall.

```cmd
sudo ufw allow 'Nginx Full'
```

## Installing Certbot
Installing [Certbot](https://certbot.eff.org) is also super easy. Run the following commands on your VPS.

```cmd
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot python-certbot-nginx
```

## Getting a SSL certificate from Let's Encrypt
Now that we installed Certbot we can get a certificate from Let's Encrypt by running the following command.

```cmd
sudo certbot --nginx -d example.com -d www.example.com
```

## Auto-renew your certificates
To auto-renew the certificates you have installed, add the following command to your crontab (open by running `crontab -e` from terminal)
```cmd
0 * * * * sudo certbot renew
```
