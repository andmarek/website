import React from 'react';
import Link from 'next/link';

export default function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 py-8 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-700 dark:text-cinereous font-sans">
        <p className="text-sm">© {year} andmarek</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link className="px-3 py-1.5 rounded-full border border-black/10 hover:border-gray-400/40 text-gray-700 hover:text-gray-900 transition-colors dark:border-white/10 dark:hover:border-papaya-whip/40 dark:text-champagne-pink dark:hover:text-papaya-whip" href="https://github.com/andmarek">github</Link>
          <Link className="px-3 py-1.5 rounded-full border border-black/10 hover:border-gray-400/40 text-gray-700 hover:text-gray-900 transition-colors dark:border-white/10 dark:hover:border-papaya-whip/40 dark:text-champagne-pink dark:hover:text-papaya-whip" href="https://twitter.com/AndrewMarek">twitter</Link>
          <Link className="px-3 py-1.5 rounded-full border border-black/10 hover:border-gray-400/40 text-gray-700 hover:text-gray-900 transition-colors dark:border-white/10 dark:hover:border-papaya-whip/40 dark:text-champagne-pink dark:hover:text-papaya-whip" href="https://www.strava.com/athletes/16371872">strava</Link>
          <Link className="px-3 py-1.5 rounded-full border border-black/10 hover:border-gray-400/40 text-gray-700 hover:text-gray-900 transition-colors dark:border-white/10 dark:hover:border-papaya-whip/40 dark:text-champagne-pink dark:hover:text-papaya-whip" href="https://www.linkedin.com/in/andmarek/">linkedin</Link>
        </div>
      </div>
    </footer>
  );
}