import Link from 'next/link';
import { notFound } from 'next/navigation';

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

      <form action={updateProjectWithId} className="flex max-w-xl flex-col gap-4">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" defaultValue={project.title} required />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" defaultValue={project.description} required />

        <label htmlFor="technologies">Technologies (comma-separated)</label>
        <input
          id="technologies"
          name="technologies"
          defaultValue={project.technologies.join(', ')}
          required
        />

        <div className="flex gap-4">
          <button type="submit">Update Project</button>
          <Link href="/projects">Cancel</Link>
        </div>
      </form>
    </main>
  );
}