import Link from "next/link";
import React from 'react';

interface NavLinkProps {
    linkText: string;
    destination: string;
}

export default function NavLink(props: NavLinkProps): React.JSX.Element {
    return (
        <Link 
            className="text-base text-cinereous hover:text-papaya-whip transition-colors duration-200" 
            href={props.destination}
        >
            {props.linkText}
        </Link>
    );
}