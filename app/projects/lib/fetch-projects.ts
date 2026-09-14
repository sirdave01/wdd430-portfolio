import { headers } from 'next/headers';

import type { Project } from './projects-db';

export async function fetchProjects(path: string): Promise<Project[]> {
  const requestHeaders = await headers();
  const host = requestHeaders.get('host');

  if (!host) {
    throw new Error('Unable to determine the request host');
  }

  const protocol = requestHeaders.get('x-forwarded-proto') ?? 'http';
  const response = await fetch(`${protocol}://${host}${path}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`);
  }

  return response.json();
}