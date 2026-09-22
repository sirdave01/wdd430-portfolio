import ProjectList from '@/components/ProjectList';
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton';
import { getProjects } from '../../projects/lib/projects-db';
import type { Project } from '../../projects/lib/projects-db';
import { Suspense } from 'react';

// Project data comes from Postgres and must be requested for each visit.
export const dynamic = 'force-dynamic';

export default async function OpenSourceProjectsPage() {
  // Start the database request before rendering so the page shell can stream first.
  const projects = getProjects('opensource');

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold">Open Source Projects</h1>
      <Suspense fallback={<ProjectCardSkeleton />}>
        <OpenSourceProjectList projects={projects} />
      </Suspense>
    </main>
  );
}

// This async child is the Suspense boundary that streams the project cards.
async function OpenSourceProjectList({
  projects,
}: {
  projects: Promise<Project[]>;
}) {
  return <ProjectList projects={await projects} />;
}