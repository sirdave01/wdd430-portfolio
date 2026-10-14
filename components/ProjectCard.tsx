import Image from 'next/image';
import Link from 'next/link';
import { deleteProject } from '@/app/projects/lib/actions';
import type { Project } from '@/app/projects/lib/projects-db';

interface ProjectCardProps extends Partial<Project> {
  showActions?: boolean;
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies = [],
  link,
  image,
  showActions = false,
}: ProjectCardProps) {
  return (
    <article className="border border-gray-200 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Project Image */}
      {image && (
        <div className="aspect-video overflow-hidden bg-gray-100 relative">
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            unoptimized
            className="object-cover object-top hover:scale-105 transition duration-300"
          />
        </div>
      )}

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-blue-700">{title}</h3>
        <p className="text-gray-700 mb-3 text-sm line-clamp-3">{description}</p>

        <p className="text-sm text-gray-600 mb-4">
          <strong>Technologies:</strong> {technologies.join(', ')}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            View Project →
          </a>
        )}

        {showActions && id !== undefined && (
          <div className="mt-4 flex gap-3">
            <Link href={`/projects/${id}/edit`} className="text-blue-600 hover:underline">
              Edit
            </Link>
            <form action={deleteProject}>
              <input type="hidden" name="id" value={id} />
              <button type="submit" className="text-red-600 hover:underline">
                Delete
              </button>
            </form>
          </div>
        )}
      </div>
    </article>
  );
}