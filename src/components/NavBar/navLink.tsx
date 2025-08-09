"use client";
import Link from "next/link";
import React from 'react';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    linkText: string;
    destination: string;
}

export default function NavLink(props: NavLinkProps): React.JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === props.destination;

  return (
    <Link
      className={
        `font-sans rounded-md px-3 py-2 text-sm md:text-base transition-colors duration-300 ` +
        (isActive
          ? 'text-gray-900 bg-black/5 dark:text-papaya-whip dark:bg-white/5'
          : 'text-gray-700 hover:text-gray-900 hover:bg-black/5 dark:text-champagne-pink dark:hover:text-papaya-whip dark:hover:bg-white/5')
      }
      href={props.destination}
    >
      {props.linkText}
    </Link>
  );
}