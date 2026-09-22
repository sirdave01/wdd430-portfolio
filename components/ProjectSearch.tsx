// this file handles the search for the application and handles the query using
// the three hooks: useSearchParam, usePathname and useRouter using client state

"use client";

import {
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

export function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <section className="mb-10 max-w-2xl" aria-label="Project search">
      <label htmlFor="project-search" className="mb-2 block text-sm font-semibold tracking-wide text-slate-700 text-white">
        Find a project
      </label>

      <div className="group relative">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
        </svg>

        <input
          id="project-search"
          type="search"
          placeholder="Search projects..."
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
          className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-5 text-base text-slate-900 shadow-[0_8px_30px_rgb(15,23,42,0.06)] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <p className="mt-2 pl-1 text-sm text-slate-500 text-white">
        Search by title, description, or technology.
      </p>
    </section>
  );
}