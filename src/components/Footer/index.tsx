import React from 'react';
import Link from 'next/link';

export default function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-cinereous font-sans">
        <p className="text-sm">© {year} andmarek</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link className="px-3 py-1.5 rounded-full border border-white/10 hover:border-papaya-whip/40 text-champagne-pink hover:text-papaya-whip transition-colors" href="https://github.com/andmarek">github</Link>
          <Link className="px-3 py-1.5 rounded-full border border-white/10 hover:border-papaya-whip/40 text-champagne-pink hover:text-papaya-whip transition-colors" href="https://twitter.com/AndrewMarek">twitter</Link>
          <Link className="px-3 py-1.5 rounded-full border border-white/10 hover:border-papaya-whip/40 text-champagne-pink hover:text-papaya-whip transition-colors" href="https://www.strava.com/athletes/16371872">strava</Link>
          <Link className="px-3 py-1.5 rounded-full border border-white/10 hover:border-papaya-whip/40 text-champagne-pink hover:text-papaya-whip transition-colors" href="https://www.linkedin.com/in/andmarek/">linkedin</Link>
        </div>
      </div>
    </footer>
  );
}