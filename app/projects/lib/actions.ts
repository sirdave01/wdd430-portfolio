'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ProjectFormSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  technologies: z.string().min(2),
});

function parseProjectForm(formData: FormData) {
  const parsed = ProjectFormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
  });

  if (!parsed.success) {
    throw new Error('Invalid project input.');
  }

  return {
    title: parsed.data.title.trim(),
    description: parsed.data.description.trim(),
    technologies: parsed.data.technologies
      .split(',')
      .map((technology) => technology.trim())
      .filter(Boolean),
  };
}

function toPostgresArray(value: string[]) {
  return `{${value
    .map((technology) => `"${technology.replaceAll('\\', '\\\\').replaceAll('"', '\\"')}"`)
    .join(',')}}`;
}

export async function createProject(formData: FormData) {
  const { title, description, technologies } = parseProjectForm(formData);

  await sql`
    INSERT INTO projects (title, description, technologies)
    VALUES (${title}, ${description}, ${toPostgresArray(technologies)})
  `;

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(id: number, formData: FormData) {
  const { title, description, technologies } = parseProjectForm(formData);

  await sql`
    UPDATE projects
    SET title = ${title}, description = ${description}, technologies = ${toPostgresArray(technologies)}
    WHERE id = ${id}
  `;

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(formData: FormData) {
  const id = Number(formData.get('id'));

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error('Invalid project id.');
  }

  await sql`
    DELETE FROM projects
    WHERE id = ${id}
  `;

  revalidatePath('/projects');
}