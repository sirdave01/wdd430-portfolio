import type { Metadata } from 'next';
import ProjectList from '@/components/ProjectList';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Explore my web development projects and full-stack applications.',
};

const projects = [
  {
    id: 1,
    title: 'CARECONNECT API',
    description: 'A Node.js API for identifying and managing user profiles in health fields.',
    technologies: ['ExpressJS', 'NodeJS', 'MongoDB', 'Github Actions', 'Render'],
    link: 'https://careconnect-api-a8af.onrender.com/',
    image: '/projects/careconnect-api.png',
  },
  {
    id: 2,
    title: 'ByteHaven Identification API',
    description: 'A Node.js API for identifying user profiles.',
    technologies: ['ExpressJS', 'NodeJS', 'MongoDB', 'Github Actions', 'Render'],
    link: 'https://bytehaven-identification-api.onrender.com/',
    image: '/projects/bytehaven-api.png',
  },
  {
    id: 3,
    title: 'Afrisplit',
    description: 'A bill-splitting app for tracking shared expenses and settling up with a group.',
    image: '/projects/afrisplit.png',
  },
  {
    id: 4,
    title: 'Global Roots',
    description: 'A website showcasing global connections, culture, and community.',
    image: '/projects/global-roots.png',
  },
  {
    id: 5,
    title: 'Church Website',
    description: 'A church website that brings community information and resources together.',
    image: '/projects/church-website.png',
  },
  {
    id: 6,
    title: 'Sacrament Meetings',
    description: 'A meeting-planning project for organizing sacrament meeting details.',
    image: '/projects/sacrament-meetings.png',
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">My Portfolio</h1>
        <p className="mx-auto max-w-3xl text-lg">
          I am a certified full-stack developer who builds scalable, efficient applications
          with modern web technologies. Explore a selection of my recent projects.
        </p>
      </section>

      <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>
      <ProjectList projects={projects} />
    </main>
  );
}