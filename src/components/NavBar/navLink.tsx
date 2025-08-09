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
          ? 'text-papaya-whip bg-white/5'
          : 'text-champagne-pink hover:text-papaya-whip hover:bg-white/5')
      }
      href={props.destination}
    >
      {props.linkText}
    </Link>
  );
}