import ProjectCard from './ProjectCard';

interface Project {
  id?: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id ?? `${project.title}-${index}`}
          {...project}
        />
      ))}
    </section>
  );
}