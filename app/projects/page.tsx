import ProjectList from '@/components/ProjectList';

const projects = [
	{
		title: 'CARECONNECT API',
		description: 'A Node.js API for identifying and managing user profiles in health fields.',
		technologies: ['ExpressJS', 'NodeJS', 'MongoDB', 'GitHub Actions', 'Render'],
		link: 'https://careconnect-api-a8af.onrender.com/',
	},
	{
		title: 'ByteHaven Identification API',
		description: 'A Node.js API for identifying user profiles.',
		technologies: ['ExpressJS', 'NodeJS', 'MongoDB', 'GitHub Actions', 'Render'],
		link: 'https://bytehaven-identification-api.onrender.com/',
	},
];

export default function ProjectsPage() {
	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="mb-8 text-4xl font-bold">Projects Overview</h1>
			<ProjectList projects={projects} />
		</main>
	);
}
