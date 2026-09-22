import Link from 'next/link';

// This route-group layout is shared by /opensource and /school.
export default function ProjectsGroupLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <nav className="container mx-auto flex gap-4 px-4 py-4">
        <Link href="/projects">Overview</Link>
        <Link href="/opensource">Open Source</Link>
        <Link href="/school">School</Link>
        <Link href="/projects/settings">Settings</Link>
      </nav>
      {children}
    </>
  );
}