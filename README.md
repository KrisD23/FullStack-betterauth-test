# Fullstack Portfolio

Modern portfolio app built with Next.js, Bun, Prisma, and Better Auth. Features authentication (GitHub OAuth), blog posts, comments, and markdown rendering.

## Features

- Next.js 16 (Turbopack)
- Bun runtime
- Better Auth (GitHub OAuth)
- Blog posts & comments
- Markdown rendering
- Prisma ORM

## Quick Start

1. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```
2. Set up `.env`:
   ```env
   DATABASE_URL="postgresql://app_user:strongpassword@localhost:5432/prisma_demo_db"
   BETTER_AUTH_SECRET=your_better_auth_secret
   BETTER_AUTH_URL=http://localhost:3000
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```
3. Run:
   ```bash
   bun run dev
   # or
   npm run dev
   ```

## Environment Variables

Set in `.env` (see above). Access in code:

```ts
// Server-side
const secret = process.env.BETTER_AUTH_SECRET;
// Client-side
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
```

## Better Auth Example

```ts
import { handleAuth } from "better-auth/next";
export const { GET, POST } = handleAuth({
  providers: [
    {
      id: "github",
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  ],
  secret: process.env.BETTER_AUTH_SECRET,
  baseUrl: process.env.BETTER_AUTH_URL,
});
```

## Scripts

- `bun run dev` / `npm run dev`: Start dev server
- `bun run build` / `npm run build`: Build
- `bun run seed` / `npm run seed`: Seed DB
