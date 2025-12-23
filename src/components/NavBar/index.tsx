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
    <nav className="sticky top-0 bg-raisin-black px-6 py-4 w-full z-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <Link className="text-xl font-medium text-champagne-pink hover:text-papaya-whip transition-colors duration-200 tracking-tight" href="/">
            andmarek
          </Link>
        </div>
        <div className="flex gap-6">
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
