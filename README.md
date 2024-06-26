# Welcome to the ✨ DevFest'24 Frontend Boilerplate ✨

This is a [Next.js](https://nextjs.org/) + [Typescript](https://www.typescriptlang.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It contains a boilerplate project set up with Next.js, TypeScript, ESLint, Prettier, Husky, LintStaged, and SCSS for styling. It's designed to kickstart new projects quickly and efficiently.

## Configuration

The project comes pre-configured with:

- [**Next.js**](https://nextjs.org/) - A React framework for building web applications.
- [**TypeScript**](https://www.typescriptlang.org/) - Static type-checking for JavaScript.
- [**SCSS**](https://sass-lang.com/) - CSS preprocessor for styling.
- [**ESLint**](https://eslint.org/) - Configured to find and fix common problems in the code and enforce best practices.
- [**Prettier**](https://prettier.io/) - Integrated with ESLint for consistent code formatting.
- [**Husky**](https://typicode.github.io/husky/) & [**LintStaged**](https://www.npmjs.com/package/lint-staged): Automatically lint and format staged files before committing.

## Getting Started

To get started with this boilerplate, follow these steps:

1. **Clone the Repository**

```javascript
git clone https://github.com/yourusername/project-boilerplate.git
cd devfest-boilerplate
```

2. **Install Dependencies**

Navigate to the project directory and install the required dependencies.

```javascript
npm install
```

The application will start running on `http://localhost:3000`.

## SEO

This boilerplate exploits Next.js SEO abilities to optimize SEO throught the project.

In `/src/app/layout.tsx`, which is the RootLayout thst wraps over the entire project (See here: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required), you will find the metadata object instantiated. This metadata is available project-wide. However, to implement page-specific SEO, it is important to instantiate a metadata object on every page.

If in `/src/app/layout.tsx`, you have:

```javascript
export const metadata = {
  title: 'DevFest Lagos',
  description: 'DevFest Lagos is a...',
  openGraph: {
    title: 'DevFest Lagos',
    description: 'DevFest Lagos is a...',
  },
};
```

In another page, (e.g. `/src/app/test/page.tsx`), you can implement page specific SEO like by creating a new metadata object to override properties that which exists at the root and add new properties:

```javascript
export const metadata = {
  title: 'DevFest Lagos | Coming Soon',
  description: 'DevFest Lagos comes up on...',
  keywords: 'devfest, devfest lagos, coming soon, date, venue',
};
```

or by

## Google Analytics

This boilerplate is configured to use Google Analytics to collect usage data using Next.js third party libraries.

See: https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics

All you have to do is;

1. **Add the measurement ID to `.env` file**

At the .env file, replace the `YOUR_TRACKING_ID_HERE` value with your measurement ID and you're good to go! The existing configuration tracks pageviews, sessions and user visits.

2. **Tracking specific events**

To track specific events like users clicking on a CTA or subscribing to DevFest updates, see example in `src/app/test/page.tsx` or see https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#sending-events-1.

Feel free to delete the folder and page after you have gotten the hang of the implementation.

## Contributing

Contributions are welcome. Please feel free to submit a pull request.
