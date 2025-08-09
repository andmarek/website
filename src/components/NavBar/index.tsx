import Link from "next/link";
import React from "react";
import NavLink from "./navLink";
import ThemeToggle from "../ThemeToggle";

export default function NavBar(): React.JSX.Element {
  const links = [
    ["home", "/"],
    ["about", "/about"],
    ["projects", "/projects"],
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-raisin-black/70 bg-white/90 dark:bg-raisin-black/90 border-b border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link className="font-sans text-xl md:text-2xl text-gray-900 dark:text-champagne-pink hover:text-gray-600 dark:hover:text-papaya-whip hover:drop-shadow-glow font-bold transition-colors" href="/">
          andmarek
        </Link>
        <div className="flex items-center gap-1 md:gap-2">
          {links.map(([linkText, destination], index) => (
            <NavLink
              key={index}
              linkText={linkText}
              destination={destination}
            />
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
