// creating a reusable navlinks components that will imported into the reusable header component. This will make the code more modular and easier to maintain.

"use client"; // this is a client component, so it can use state and effects

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [

    { href: "/", label: "Home" },

    { href: "/about", label: "About" },

    { href: "/projects", label: "Projects" },

    { href: "/contact", label: "Contact" },

];

export default function NavLinks() {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="relative">
            <button
                type="button"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="primary-navigation"
                onClick={() => setIsOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 hover:bg-white/10 md:hidden"
            >
                <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
                    <span className={`h-0.5 w-5 bg-current transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`h-0.5 w-5 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-5 bg-current transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </span>
            </button>

        <ul
            id="primary-navigation"
            className={`${isOpen ? "flex" : "hidden"} absolute right-0 top-full z-20 mt-2 min-w-48 flex-col gap-1 rounded-md bg-gray-800 p-2 shadow-lg md:static md:mt-0 md:flex md:min-w-0 md:flex-row md:items-center md:gap-x-6 md:bg-transparent md:p-0 md:shadow-none`}
        >

            {links.map(({ href, label }) => {

                const isActive = pathname === href;

                return (

                    <li key={href}>

                        <Link
                            
                            href={href}
                            onClick={() => setIsOpen(false)}

                            aria-current={isActive ? "page" : undefined}

                            className={isActive ? "font-semibold text-yellow-300 underline" : "text-white hover:text-gray-300"}
                        >
                            {label}

                        </Link>

                    </li>

                );

            })}

        </ul>

        </div>

    );

}