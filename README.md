# Comparing different ways of updating the URL with search params in NextJS
Using the `create-next-app` on 2025-02-07

Compare different ways of (hopefully) immediately updating the URL immediately with search parameters and illustrating the different loading states.

Created in response to having this issue in a personal project and [perusing this issue](https://github.com/vercel/next.js/issues/53543)

Please let me know if there is something wrong or faulty with these examples.  

# Methods Compared
- Search params as query paramters, using NextJS Form component.  [Vercel commerce method](https://github.com/vercel/next.js/issues/53543#issuecomment-2327883526)

- Search params as query parameters, using normal HTML form component

- Search params as dynamic URL params (parts of the URL path) with loading page

- Search params as dynamic URL params (parts of the URL path) with Suspense


# Default `create-next-app` README follows

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
