'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/projects/lib/actions';

export function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="min-w-0">
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          className="block w-full min-w-0 rounded-md border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>
      <div className="min-w-0">
        <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          minLength={6}
          required
          className="block w-full min-w-0 rounded-md border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>
      <button
        disabled={isPending}
        type="submit"
        className="mt-1 w-full rounded-md bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Signing in...' : 'Sign in'}
      </button>
      {errorMessage && (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}