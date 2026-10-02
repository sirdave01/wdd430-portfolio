import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/app/projects/lib/projects-db';

export const metadata: Metadata = {
    title: 'Manage Projects',
    description: 'Manage the projects displayed in the portfolio.',
};

export default async function SettingsProjectsPage() {
    const session = await auth();
    if (!session?.user) redirect('/login');

    const projects = await getProjects();

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <h1 className="text-3xl font-bold sm:text-4xl">Manage Projects</h1>
                <Link
                    href="/projects/create"
                    className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                >
                    Create project
                </Link>
            </div>
            {projects.length ? (
                <ProjectList projects={projects} showActions />
            ) : (
                <p>No projects yet.</p>
            )}
        </main>
    );
}