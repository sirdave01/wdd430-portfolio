
export interface Project{
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'CARECONNECT API',
        description: 'A Node.js API for identifying and managing user profiles in health fields.',
        type: 'opensource',
        technologies: ['ExpressJS', 'NodeJS', 'MongoDB', 'GitHub Actions', 'Render'],
        link: 'https://careconnect-api-a8af.onrender.com/',
    },
    {
        id: 2,
        title: "ByteHaven Identification API",
        description: 'A Node.js API for identifying user profiles.',
        type: 'opensource',
        technologies: ['ExpressJS', 'NodeJS', 'MongoDB', 'GitHub Actions', 'Render'],
        link: 'https://bytehaven-identification-api.onrender.com/',
    },
    {
        id: 3,
        title: 'School Management System',
        description: 'A web application for managing school operations, including student enrollment, attendance, and grading.',
        type: 'school',
        technologies: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    },
    {
        id: 4,
        title: 'Online Learning Platform',
        description: 'A platform for delivering online courses and tracking student progress.',
        type: 'school',
        technologies: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    },
    {
        id: 5,
        title: "AfriSplit",
        description: "AfriSplit is a collaborative expense-sharing web application designed to simplify group finances. It eliminates the need for manual calculations or complex group chat discussions when splitting bills",
        type: "opensource",
        technologies: ["React", "NodeJS", "Pollar SDK", "Stellar", "TypeScript", "MongoDB", "Tailwind CSS"],
    },
];

export function getProjects(type?: string | null): Project[] {
  if (type) return projects.filter((p) => p.type === type);
  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find((p) => p.id === id) ?? null;
}