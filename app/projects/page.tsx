import ProjectList from "@/components/ProjectList";
import { ProjectSearch } from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";

import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from "./lib/projects-db";

export const dynamic = "force-dynamic";

export default async function ProjectsPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const projects = await fetchFilteredProjects(
    query,
    currentPage
  );

  const totalPages = await fetchProjectsPages(query);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        Projects Overview
      </h1>

      <ProjectSearch />

      <ProjectList projects={projects} />

      <Pagination totalPages={totalPages} />
    </main>
  );
}