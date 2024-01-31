'use client';
import NavBar from "./components/NavBar";
import HamburgerMenu from "./components/HamburgerMenu";
import { taviraj, raleway, lato, italiana, roboto, antic_didone } from "./fonts";
import "./globals.css";
import { useEffect, useState } from 'react';

export default function RootLayout ({children}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1025);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <html lang="en" className={`${raleway.variable} ${taviraj.variable} ${italiana.variable} ${antic_didone.variable}`}>
      <body className="flex flex-col min-h-screen">
      
        <header>
          {isSmallScreen ? <HamburgerMenu /> : <NavBar />}
        </header>

        <main className="grow">
          {children}
        </main>

        <footer className="border-t py-3 text-center text-xs">
          Designed by{' '}
          <a href="https://www.unikaanalytics.com/" target="_blank"
              className="text-orange-800 hover:underline">
            Unika Analytics
          </a>
        </footer>
      </body>
    </html>
  );
}