'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
  title: z.string().trim().min(3, 'Title must be at least 3 characters.'),
  description: z.string().trim().min(20, 'Description must be at least 20 characters.'),
  technologies: z.string().trim().min(2, 'Add at least one technology.'),
  yearCompleted: z.coerce
    .number()
    .int('Year must be a whole number.')
    .gte(2000, 'Year must be 2000 or later.')
    .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    yearCompleted?: string[];
  };
  message?: string | null;
};

function validateProjectForm(formData: FormData) {
  return ProjectFormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    yearCompleted: formData.get('yearCompleted'),
  });
}

function parseTechnologies(value: string) {
  return value
    .split(',')
    .map((technology) => technology.trim())
    .filter(Boolean);
}

function getValidationState(formData: FormData): State | null {
  const validatedFields = validateProjectForm(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the highlighted fields.',
    };
  }

  return null;
}

function toPostgresArray(value: string[]) {
  return `{${value
    .map((technology) => `"${technology.replaceAll('\\', '\\\\').replaceAll('"', '\\"')}"`)
    .join(',')}}`;
}

export async function createProject(
  _previousState: State,
  formData: FormData,
): Promise<State> {
  const validationState = getValidationState(formData);
  if (validationState) return validationState;

  const validatedFields = validateProjectForm(formData);
  if (!validatedFields.success) {
    return { message: 'Please correct the highlighted fields.' };
  }

  const { title, description, technologies, yearCompleted } = validatedFields.data;

  try {
    await sql`
      INSERT INTO projects (title, description, technologies, year_completed)
      VALUES (${title}, ${description}, ${toPostgresArray(parseTechnologies(technologies))}, ${yearCompleted})
    `;
  } catch (error) {
    console.error('Error creating project:', error);
    return { message: 'Database error: failed to create project.' };
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(
  id: number,
  _previousState: State,
  formData: FormData,
): Promise<State> {
  const validationState = getValidationState(formData);
  if (validationState) return validationState;

  const validatedFields = validateProjectForm(formData);
  if (!validatedFields.success) {
    return { message: 'Please correct the highlighted fields.' };
  }

  const { title, description, technologies, yearCompleted } = validatedFields.data;

  try {
    await sql`
      UPDATE projects
      SET title = ${title}, description = ${description}, technologies = ${toPostgresArray(parseTechnologies(technologies))}, year_completed = ${yearCompleted}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Error updating project:', error);
    return { message: 'Database error: failed to update project.' };
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(formData: FormData) {
  const id = Number(formData.get('id'));

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error('Invalid project id.');
  }

  try {
    await sql`
      DELETE FROM projects
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw new Error('Failed to delete project. Please try again later.');
  }

  revalidatePath('/projects');
}