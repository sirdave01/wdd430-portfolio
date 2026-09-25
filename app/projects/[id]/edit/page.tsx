import Link from 'next/link';
import { notFound } from 'next/navigation';

import ProjectForm from '../../create/ProjectForm';
import { updateProject } from '../../lib/actions';
import { getProjectbyId } from '../../lib/projects-db';

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const project = await getProjectbyId(id);

  if (!project) {
    notFound();
  }

  const updateProjectWithId = updateProject.bind(null, id);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Edit Project</h1>
      <ProjectForm
        action={updateProjectWithId}
        submitLabel="Update Project"
        initialValues={{
          title: project.title,
          description: project.description,
          technologies: project.technologies.join(', '),
          yearCompleted: project.yearCompleted,
        }}
      />
      <Link href="/projects" className="mt-4 inline-block text-blue-600 hover:underline">
        Cancel
      </Link>
    </main>
  );
}