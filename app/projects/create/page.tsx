import type { Metadata } from 'next';
import ProjectForm from './ProjectForm';
import { createProject } from '../lib/actions';

export const metadata: Metadata = {
  title: 'Create Project',
  description: 'Add a web development project to the portfolio.',
};

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Create Project</h1>
      <ProjectForm action={createProject} submitLabel="Save Project" />
    </main>
  );
}