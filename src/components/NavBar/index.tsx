import Link from "next/link";
import React from "react";
import NavLink from "./navLink";

export default function NavBar(): React.JSX.Element {
  const links = [
    ["home", "/"],
    ["about", "/about"],
    ["projects", "/projects"],
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-raisin-black/70 bg-raisin-black/90 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link className="font-sans text-xl md:text-2xl text-champagne-pink hover:text-papaya-whip hover:drop-shadow-glow font-bold transition-colors" href="/">
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
        </div>
      </div>
    </nav>
  );
}
