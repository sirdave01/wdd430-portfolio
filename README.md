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

Open [https://wdd430-portfolio-mu-indol.vercel.app/](https://wdd430-portfolio-mu-indol.vercel.app/) with your browser to see the result

## Owner Authentication

Auth.js uses `AUTH_SECRET`; generate it locally with `npx auth secret`. The owner-only credentials provider also requires these entries in `.env.local`:

```env
OWNER_EMAIL=you@example.com
OWNER_PASSWORD_HASH=your-bcrypt-hash
```

Generate the hash with `node -e "require('bcryptjs').hash('your-password', 12).then(console.log)"` and replace the example values. Keep `.env.local` private. The `/projects/settings`, `/projects/create`, and `/projects/[id]/edit` routes and all project mutations require an authenticated owner session; public project browsing stays read-only.

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
