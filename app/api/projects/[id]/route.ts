import { NextRequest, NextResponse } from "next/server";

import {getProjectById} from "@/app/projects/lib/projects-db";

export async function GET(

    _request: NextRequest,
    
    { params }: { params: Promise<{ id: string }> }
  
) {

    const { id } = await params;
    
  const numericId = Number(id);

  // Invalid id (not a number)
    if (Number.isNaN(numericId)) {
      
        return NextResponse.json({ error: "Invalid project id" }, { status: 400 });
        
  }

  const project = getProjectById(numericId);

    if (!project) {
      
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
      
  }

    return NextResponse.json(project);
    
}