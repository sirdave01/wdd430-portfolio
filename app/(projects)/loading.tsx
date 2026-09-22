// This boundary covers the full page while a route in this group is loading.
export default function ProjectsLoading() {
  return (
    <main className="container mx-auto animate-pulse px-4 py-12" aria-busy="true">
      <div className="mb-8 h-10 w-72 rounded bg-slate-200" />
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((card) => (
          <div key={card} className="space-y-4 rounded-xl border p-6">
            <div className="h-6 w-3/4 rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-5/6 rounded bg-slate-200" />
            <div className="h-5 w-24 rounded bg-slate-300" />
          </div>
        ))}
      </div>
    </main>
  );
}