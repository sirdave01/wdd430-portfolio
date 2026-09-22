// creating the suspense skeleton

export default function ProjectCardSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-xl border p-6 space-y-4">
          <div className="h-6 w-3/4 rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-200" />
          <div className="h-4 w-5/6 rounded bg-slate-200" />
          <div className="h-5 w-24 rounded bg-slate-300" />
        </div>
      ))}
    </div>
  );
}