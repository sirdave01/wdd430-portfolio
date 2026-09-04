// example header of a NextJS app

// bringing in Next.js navigation so route changes happen without full page reloads.
import Link from "next/link";

// defining a reusable component that can be imported.
export default function Header() {

    // The returned JSX uses semantic HTML elements: 
    // header for page header structure, nav for navigation, 
    // and a list (ul/li) for menu links
    
    return (

        // className applies Tailwind CSS utility classes for color, spacing, alignment, and sizing
        
        <header className="bg-gray-800 text-white p-4 shadow-md">
            
            <div id="header-title" className="text-2xl font-bold">Osigwe Uchechukwu DavidCaleb</div>
            
            <nav className="max-w-4xl mx-auto mt-4 flex justify-between items-center">

                {/* <Link href="/"> and <Link href="/about"> map to App Router pages at app/page.tsx and app/about/page.tsx */}

                {/* Use Next.js Link for internal routes in your app, and use an HTML <a> element for external URLs. */}
                
                <ul className="flex gap-6">
        
                    <li><Link href="/">Home</Link></li>
        
                    <li><Link href="/about">About</Link></li>
        
                </ul>
        
            </nav>
        
        </header>

    );

}