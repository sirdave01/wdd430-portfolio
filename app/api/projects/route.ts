import { NextRequest, NextResponse } from 'next/server';

import { getProjects } from '@/app/projects/lib/projects-db';

export async function GET(request: NextRequest) {

    const type = new URL(request.url).searchParams.get('type');

    const projects = getProjects(type);

    return NextResponse.json(projects);
    
}