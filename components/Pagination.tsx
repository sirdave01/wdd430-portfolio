
"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export default function Pagination({
    totalPages,
}: { totalPages: number; })
{
    const pathname = usePathname();

    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    function createPageURL(pageNumber: number) {

        const params = new URLSearchParams(searchParams);

        params.set("page", pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    }

    if (totalPages <= 1) return null;

    const previousPage = Math.max(currentPage - 1, 1);
    const nextPage = Math.min(currentPage + 1, totalPages);

    return (
        <nav aria-label="Project pages" className="mt-8 flex items-center gap-2">
            {currentPage > 1 ? (
                <Link href={createPageURL(previousPage)} className="rounded border px-3 py-2">
                    Previous
                </Link>
            ) : (
                <span aria-disabled="true" className="rounded border px-3 py-2 text-gray-400">
                    Previous
                </span>
            )}

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <Link
                    key={pageNumber}
                    href={createPageURL(pageNumber)}
                    aria-current={pageNumber === currentPage ? "page" : undefined}
                    className={`rounded border px-3 py-2 ${
                        pageNumber === currentPage ? "bg-blue-600 text-white" : ""
                    }`}
                >
                    {pageNumber}
                </Link>
            ))}

            {currentPage < totalPages ? (
                <Link href={createPageURL(nextPage)} className="rounded border px-3 py-2">
                    Next
                </Link>
            ) : (
                <span aria-disabled="true" className="rounded border px-3 py-2 text-gray-400">
                    Next
                </span>
            )}

        </nav>
    );
}