import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname();

  // Defining navigation items and their corresponding paths
  const navItems = [
    { text: 'HOME', path: '/' },
    { text: 'WORKS', path: '/works' },
    { text: 'CONTRIBUTORS', path: '/contributors' },
    { text: 'ABOUT', path: '/about' },
  ];
  
  return (
    <nav className="px-10 py-4 shadow-md">
      <ul className="flex gap-4 items-end">
        <li className="mr-auto pt-1">
          <Link href="/" 
                className="font-black font-italiana text-2xl text-[#be3a3b] hover:no-underline">
            PLSU
          </Link>
        </li>
        {navItems.map((item) => (  
          <li key={item.path} className={pathname === item.path ? 'active' : ''}>
            <Link href={item.path} className={`${pathname === item.path ? '' : ''} text-[#be3a3b] font-medium`}>
              {item.text}
            </Link>
          </li>
        ))}  
      </ul>
    </nav>
  );
}
