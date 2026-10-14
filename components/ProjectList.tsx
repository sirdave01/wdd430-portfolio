import ProjectCard from './ProjectCard';
import type { Project } from '@/app/projects/lib/projects-db';

interface ProjectListProps {
  projects: Array<
    Pick<Project, 'id' | 'title' | 'description' | 'link' | 'image'> & {
      technologies?: string[];
    }
  >;
  showActions?: boolean;
}

export default function ProjectList({ projects, showActions = false }: ProjectListProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          showActions={showActions}
          {...project}
        />
      ))}
    </section>
  );
}