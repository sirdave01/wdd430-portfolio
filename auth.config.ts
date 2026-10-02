import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login', // use your own login page instead of the Auth.js default
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;

      const isProjectEditRoute = /^\/projects\/[^/]+\/edit(?:\/|$)/.test(pathname);
      const isProtected =
        pathname === '/dashboard' ||
        pathname.startsWith('/dashboard/') ||
        pathname === '/projects/create' ||
        pathname.startsWith('/projects/create/') ||
        pathname === '/projects/settings' ||
        pathname.startsWith('/projects/settings/') ||
        isProjectEditRoute;

      if (isProtected) {
        if (isLoggedIn) return true;
        return false; // redirects to /login
      }

      // Redirect already-logged-in users away from the login page
      if (isLoggedIn && pathname === '/login') {
        return Response.redirect(new URL('/projects/settings', nextUrl));
      }

      return true;
    },
  },
  providers: [], // providers are added in auth.ts
} satisfies NextAuthConfig;