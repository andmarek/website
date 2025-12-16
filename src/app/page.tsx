"use client";

import Hero from "../components/Hero";
import Link from "next/link";

interface HomeLinkWrapperProps {
  hrefProp: string;
  text: string;
}

const HomeLinkWrapper: React.FC<HomeLinkWrapperProps> = ({ hrefProp, text }) => {
  return (
    <Link className="text-xl text-champagne-pink hover:text-papaya-whip transition-all duration-500" href={hrefProp}> {text} </Link>
  )
}

export default function Home() {
  return (
    <div>
      <main className="bg-raisin-black min-h-screen">
        <Hero />
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 font-sans flex items-center space-x-6 text-sm">
          <HomeLinkWrapper hrefProp="https://github.com/andmarek" text="github" />
          <HomeLinkWrapper hrefProp="https://twitter.com/AndrewMarek" text="twitter" />
          <HomeLinkWrapper hrefProp="https://www.strava.com/athletes/16371872" text="strava" />
          <HomeLinkWrapper hrefProp="https://www.linkedin.com/in/andmarek/" text="linkedin" />
        </div>
      </main>
    </div>
  );
}
