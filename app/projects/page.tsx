import ProjectList from '@/components/ProjectList';
import { fetchProjects } from './lib/fetch-projects';

export default async function ProjectsPage() {
  const projects = await fetchProjects('/api/projects');

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Projects Overview</h1>
      <ProjectList projects={projects} />
    </main>
  );
}