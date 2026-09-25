import ProjectForm from './ProjectForm';
import { createProject } from '../lib/actions';

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Create Project</h1>
      <ProjectForm action={createProject} submitLabel="Save Project" />
    </main>
  );
}