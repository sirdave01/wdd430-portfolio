import Link from 'next/link';

// This route-group layout is shared by /opensource and /school.
export default function ProjectsGroupLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <nav aria-label="Project categories" className="container mx-auto flex flex-wrap gap-x-4 gap-y-2 px-4 py-4">
        <Link href="/projects" className="hover:underline">Overview</Link>
        <Link href="/opensource" className="hover:underline">Open Source</Link>
        <Link href="/school" className="hover:underline">School</Link>
      </nav>
      {children}
    </>
  );
}