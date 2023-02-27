# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

### Configure the the Oauth2 module for development (local)

To run the project in development, firstly, you need to configure our `nuxt-auth` module ([check out the documentation](https://github.com/storyblok/nuxt-auth)) with your oauth credentials (these credentials are available in the app settings area of Storyblok).

Rename the file `.sample.env` to `.env` and fill out the variables.

```text
NUXT_ENV_CLIENT_TOKEN="Id from Storyblok App"
STORYBLOK_CLIENT_ID="Secret from Storyblok App"
STORYBLOK_CLIENT_SECRET="Secret from Storyblok App"
STORYBLOK_CLIENT_REDIRECT_URI=https://YOUR_ID.ngrok.io/auth/callback
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
