---
title: Let's make some noise
description: Blah blah music music
---
![Miles](/images/uploads/img_3305.jpg)

## Deploy to Netlify

The folder of your generated project will contain a netlify-example.toml file you can rename to netlify.toml to get started with Netlify deployment. It automatically sets the BASE_URL based on your Netlify configuration and the type of deployment (Production deployment, branch deployment, preview deployment). So no need to set the production URL in the package.json.

## Deploy with other CI solutions

If you use other CI solutions, you always have to make sure, that the environment variable BASE_URL is set to the URL where the website will run. Tools like GitLab allow you to set environment variables in the settings of the project and make it easy to use what ever way you want to deploy your project.
