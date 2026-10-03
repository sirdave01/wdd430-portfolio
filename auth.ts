import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsed.success) return null;

        const { email, password } = parsed.data;
        const ownerEmail = (
          process.env.AUTH_ADMIN_EMAIL ?? process.env.OWNER_EMAIL
        )
          ?.trim()
          .toLowerCase();
        const ownerPasswordHash =
          process.env.AUTH_ADMIN_PASSWORD_HASH ?? process.env.OWNER_PASSWORD_HASH;

        if (!ownerEmail || !ownerPasswordHash || email.toLowerCase() !== ownerEmail) {
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, ownerPasswordHash);
        if (!passwordsMatch) return null;

        return { id: 'portfolio-owner', name: 'Portfolio Owner', email: ownerEmail };
      },
    }),
  ],
});