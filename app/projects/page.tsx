import ProjectList from '@/components/ProjectList';
import { getProjects } from './lib/projects-db';

export default function ProjectsPage() {
  const projects = getProjects();
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Projects Overview</h1>
      <ProjectList projects={projects} />
    </main>
  );
}