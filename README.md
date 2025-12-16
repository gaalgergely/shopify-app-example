# Shopify App Node

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![Build Status](https://travis-ci.com/Shopify/shopify-app-node.svg?branch=master)](https://travis-ci.com/Shopify/shopify-app-node)

An embedded Shopify app starter built with [Next.js](https://nextjs.org/), [Koa](https://koajs.com/), [Shopify-koa-auth](https://github.com/Shopify/quilt/tree/master/packages/koa-shopify-auth), [Polaris](https://github.com/Shopify/polaris-react), and [App Bridge React](https://shopify.dev/tools/app-bridge/react-components).

The repository demonstrates a full authentication and proxy setup for Shopify apps, along with a sample merchant experience that lets users select products and view them inside the embedded admin.

## What’s inside

- **OAuth and session handling** – Protects embedded routes with `shopify-koa-auth`, persists sessions, and exposes middleware that proxies GraphQL requests to the merchant’s shop with the correct access token.
- **Embedded UI shell** – Uses Polaris for styling and App Bridge providers for navigation, authenticated API calls, and reauthorization handling when Shopify requires it.
- **Sample merchant workflow** – A product picker powered by App Bridge’s `ResourcePicker` that stores selections in local storage and renders the chosen products with Polaris components.
- **Webhook and billing stubs** – Server helpers show how to register webhooks and scaffold one-time purchase or subscription flows via the Shopify Billing API.

## Project structure

- `server/server.js` – Koa server that wires up OAuth, session storage, webhook registration, and the GraphQL proxy middleware for authenticated requests.
- `pages/_app.js` – Wraps every page with Polaris, App Bridge, and Apollo providers to deliver an authenticated client-side GraphQL experience.
- `pages/index.js` – Demonstrates the embedded UI by letting merchants pick and display products from their store.
- `components` – Reusable UI pieces built with Polaris and App Bridge helpers.

## Getting started

This repository is used by [Shopify-App-CLI](https://github.com/Shopify/shopify-app-cli) as a scaffold for Node apps, but you can also run it directly:

1. Create a Shopify Partner account and a development store if you don’t already have them.
2. In the Partner Dashboard, create a new app and note the API key and secret.
3. Copy `.env.example` to `.env` (if present) or set the environment variables expected in `server/server.js` (for example, `SHOPIFY_API_KEY`, `SHOPIFY_API_SECRET`, `SCOPES`, and `HOST`).
4. Install dependencies and start the development server:

   ```sh
   npm install
   npm run dev
   ```

5. Install the app on your development store using the generated install URL.

## Extending the starter

The server and client patterns shown here are ready to be reused in your own Shopify app:

- Add new API routes that leverage the authenticated Shopify GraphQL client provided in `server/server.js`.
- Extend the Polaris/App Bridge UI shell with additional pages in `pages/` to build new merchant experiences.
- Implement webhook handlers and billing flows using the stubs as templates for production use.

## License

This repository is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
