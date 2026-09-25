// switching to SQL DB on NEON - PostgreSQL (Vercel)

import { sql } from "@vercel/postgres";
export interface Project{
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    yearCompleted: number;
    link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
    
    if (type) {
        
        const { rows } = await sql<Project>`
            SELECT id, title, description, type, technologies, year_completed AS "yearCompleted", link
            FROM projects
            WHERE type = ${type}
            ORDER BY id
        `;
    
        return rows;
    }

    const { rows } = await sql<Project>`
        SELECT id, title, description, type, technologies, year_completed AS "yearCompleted", link
        FROM projects
        ORDER BY id
    `;

    return rows;
    
}

export async function getFilteredProjects(
    query: string,
    page: number,
    pageSize = 6,
): Promise<Project[]> {
    const offset = (page - 1) * pageSize;
    const search = `%${query.trim()}%`;

    const { rows } = await sql<Project>`
        SELECT id, title, description, type, technologies, year_completed AS "yearCompleted", link
        FROM projects
        WHERE title ILIKE ${search}
           OR description ILIKE ${search}
        ORDER BY id
        LIMIT ${pageSize}
        OFFSET ${offset}
    `;

    return rows;
}

// adding pagination to the server-side logic as a companion to Search

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredProjects(query: string, currentPage: number): Promise<Project[]> {
    
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    const search = `%${query.trim()}%`;

    const { rows } = await sql<Project>`
    
    SELECT id, title, description, type, technologies, year_completed AS "yearCompleted", link
    
    FROM projects
    
    WHERE title ILIKE ${search}
        OR description ILIKE ${search}
        OR array_to_string(technologies, ' ') ILIKE ${search}
    
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
    
    `;

    return rows
    
}

export async function fetchProjectsPages(query: string): Promise<number> {
    
    const search = `%${query.trim()}%`;

    const { rows } = await sql<{ count: number }>`
    
    SELECT COUNT(*)::int AS count
    FROM projects
    WHERE title ILIKE ${search}
        OR description ILIKE ${search}
        OR array_to_string(technologies, ' ') ILIKE ${search}
        
    `;
    
    const count = rows[0]?.count ?? 0;

    return Math.ceil(count / ITEMS_PER_PAGE);
}

export async function getProjectbyId(id: number): Promise<Project | null>  {

    const { rows } = await sql<Project>`
    
        SELECT id, title, description, type, technologies, year_completed AS "yearCompleted", link
        FROM projects
        WHERE id = ${id}
        
    `;

    return rows[0] ?? null;
    
}