// example header of a NextJS app

// importing the reusable NavLinks component that will be used in the Header component. This makes the code more modular and easier to maintain.

import Link from 'next/link';
import { auth } from '@/auth';
import NavLinks from '@/components/NavLinks';
import { SignOutButton } from '@/components/sign-out-button';

// defining a reusable component that can be imported.

export default async function Header() {
    const session = await auth();

    return (
        <header className="bg-gray-800 px-4 py-4 text-white shadow-md">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3">
                <Link
                    id="header-title"
                    href="/"
                      className="w-full max-w-full break-words text-lg font-bold sm:w-auto sm:text-2xl"
                >
                    Osigwe Uchechukwu DavidCaleb
                </Link>
                <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-5 gap-y-3">
                    <nav aria-label="Main navigation" className="min-w-0">
                        <NavLinks />
                    </nav>
                    {session?.user ? (
                        <SignOutButton />
                    ) : (
                        <Link href="/login" className="shrink-0 hover:text-yellow-300">
                            Sign in
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}