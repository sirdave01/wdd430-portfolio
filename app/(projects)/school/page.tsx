import ProjectList from '@/components/ProjectList';
import { getProjects } from '../../projects/lib/projects-db';

export default async function SchoolProjectsPage() {
  const projects = await getProjects('school');

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold">School Projects</h1>
      <ProjectList projects={projects} />
    </main>
  );
}