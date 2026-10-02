import type { Metadata } from 'next';
import ProjectList from '@/components/ProjectList';
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton';
import { getProjects } from '../../projects/lib/projects-db';
import type { Project } from '../../projects/lib/projects-db';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'School Projects',
  description: 'Explore web development projects completed as part of my coursework.',
};

// Project data comes from Postgres and must be requested for each visit.
export const dynamic = 'force-dynamic';

export default async function SchoolProjectsPage() {
  // Start the database request before rendering so the page shell can stream first.
  const projects = getProjects('school');

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold">School Projects</h1>

      <Suspense fallback={<ProjectCardSkeleton />}>
        <SchoolProjectList projects={projects} />
      </Suspense>
      
    </main>
  );
}

// This async child is the Suspense boundary that streams the project cards.
async function SchoolProjectList({
  projects,
}: {
  projects: Promise<Project[]>;
}) {
  return <ProjectList projects={await projects} />;
}