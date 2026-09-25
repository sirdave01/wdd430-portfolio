import Link from "next/link";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    
    return (
      
    <section>
            
      <nav>
            <Link href="/projects">Overview</Link> | {" "}

            <Link href="/opensource">Open Source</Link> | {" "}

            <Link href="/school">School</Link> | {" "}

            <Link href="/projects/settings">Settings</Link>

            | {" "}

            <Link href="/projects/create">Create Project</Link>

        </nav>
          
        {children}
          
    </section>
      
  );
}