import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch and explore my work as a Fullstack Web Developer.',
};

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <section
        aria-labelledby="contact-heading"
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:p-14">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Contact
            </p>
            <h1
              id="contact-heading"
              className="max-w-xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
            >
              Let&apos;s build something useful.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Have a project in mind, want to collaborate, or just want to talk
              about fullstack web development? I&apos;d be glad to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:d08178084956@gmail.com"
                className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Email me
              </a>
              <a
                href="https://wa.me/2348178084956"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
              >
                Message on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <a
              href="https://github.com/sirdave01"
              target="_blank"
              rel="noreferrer"
              className="mt-5 w-fit font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900"
            >
              Connect on GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <aside className="flex flex-col justify-center rounded-xl bg-slate-50 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Explore my work
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Take a look at my projects, the technologies I use, and what
              I&apos;ve been learning.
            </p>
            <Link
              href="/projects"
              className="mt-6 w-fit font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900"
            >
              Browse projects
            </Link>
            <Link
              href="/about"
              className="mt-4 w-fit font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900"
            >
              More about me
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}