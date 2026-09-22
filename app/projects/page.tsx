import ProjectList from '@/components/ProjectList';
import { getProjects } from './lib/projects-db';

// updating the projects page to use dynamic rendering rather than static rendering

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Projects Overview</h1>
      <ProjectList projects={projects} />
    </main>
  );
}