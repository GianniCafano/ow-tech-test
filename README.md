This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install the dependencies:

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run in production mode

To build the application and run the app in production mode:

```bash
yarn build
```

and then run:

```bash
yarn start
```
You will see the application uses server side rendering to produce all the static files for each title.

## adding your google maps API key

To use the Google Map seen on the Title details pages, you need to add your API key. To do this, create a .env.local file in the root of the application and add:

```NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY"```

## Running tests

To execute the unit tests, run:

```bash
yarn test
```


