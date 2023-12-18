import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="px-4 py-2">
      <ul className="flex gap-4 items-end">
        <li>
          <Link href="/" 
                className="font-black font-italiana text-2xl text-[#be3a3b] hover:no-underline">
            PLSU
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/"
                className="text-[#be3a3b] hover:underline">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/works"
                className="text-[#be3a3b] hover:underline">
            WORKS
          </Link>
        </li>
        <li>
          <Link href="/contributors"
                className="text-[#be3a3b] hover:underline">
            CONTRIBUTORS
          </Link>
        </li>
        <li>
          <Link href="/about"
                className="text-[#be3a3b] hover:underline">
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
