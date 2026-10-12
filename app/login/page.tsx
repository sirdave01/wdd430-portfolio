import type { Metadata } from 'next';
import { LoginForm } from '@/components/login-form';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to manage your portfolio projects.',
};

type LoginPageProps = {
  searchParams: Promise<{ callbackUrl?: string | string[] }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const rawCallbackUrl = (await searchParams).callbackUrl;
  const callbackUrl = typeof rawCallbackUrl === 'string' ? rawCallbackUrl : undefined;

  return (
    <main className="flex min-h-[70svh] items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
      <section
        aria-labelledby="login-heading"
        className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="mb-8">
          <h1 id="login-heading" className="text-3xl font-bold text-slate-900">
            Sign in
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Sign in to manage your portfolio projects.
          </p>
        </div>
        <LoginForm callbackUrl={callbackUrl} />
      </section>
    </main>
  );
}