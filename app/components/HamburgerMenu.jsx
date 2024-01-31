import Link from "next/link";
import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="shadow-md">
      {/* Hamburger icon for small screens */}
      <button
        onClick={menuOpen ? closeMenu : openMenu}
        className={`px-10 py-4 text-2xl text-[#be3a3b] focus:outline-none ${menuOpen ? 'hidden' : ''} font-light`}
      >
        {menuOpen ? '' : <IoMenuOutline size={36} />}
      </button>

      {/* Full-Screen Overlay Menu for small screens */}
      {menuOpen && (
        <div className="fixed z-50 w-screen h-screen flex flex-col justify-center items-center bg-[#fdf9f9]">
          <Link href="#" className="fixed top-4 left-10 text-[#be3a3b] hover:no-underline text-7xl font-medium duration-300" onClick={closeMenu}><IoCloseOutline size={40} /></Link>
          <div className="flex flex-col text-white text-center text-2xl font-medium space-y-6">
            <Link className="transition duration-300" onClick={closeMenu} href="/">HOME</Link>
            <Link className="transition duration-300" onClick={closeMenu} href="/works">WORKS</Link>
            <Link className="transition duration-300" onClick={closeMenu} href="/contributors">CONTRIBUTORS</Link>
            <Link className="transition duration-300" onClick={closeMenu} href="/about">ABOUT</Link>
          </div>
        </div>
      )}
    </div>
  );
};
