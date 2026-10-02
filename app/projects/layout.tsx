import Link from "next/link";
import { auth } from '@/auth';

export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
    
    return (
      
    <section>
            
      <nav aria-label="Project navigation" className="container mx-auto flex flex-wrap gap-x-4 gap-y-2 px-4 py-4">
        <Link href="/projects" className="hover:underline">Overview</Link>
        <Link href="/opensource" className="hover:underline">Open Source</Link>
        <Link href="/school" className="hover:underline">School</Link>
        {session?.user && (
          <>
            <Link href="/projects/settings" className="hover:underline">Manage projects</Link>
            <Link href="/projects/create" className="hover:underline">Create project</Link>
          </>
        )}
      </nav>
          
        {children}
          
    </section>
      
  );
}