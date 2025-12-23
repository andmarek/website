"use client";
import { useState } from "react";
import Hero from "../components/Hero";
import Link from "next/link";


interface HomeLinkWrapperProps {
  hrefProp: string;
  text: string;
}

const HomeLinkWrapper: React.FC<HomeLinkWrapperProps> = ({ hrefProp, text }) => {
  return (
    <Link 
      className="text-base text-cinereous hover:text-papaya-whip transition-colors duration-200" 
      href={hrefProp}
    >
      {text}
    </Link>
  )
}

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadedChange = (updatedLoad: boolean) => {
    setLoaded(updatedLoad);
  };

  return (
    <main className="bg-raisin-black flex min-h-screen flex-col items-center">
      <div className="w-full">
        <Hero onUpdateLoadState={handleLoadedChange} />
      </div>
      <div className={`transition-opacity duration-1000 ease-in-out flex items-center gap-6 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <HomeLinkWrapper hrefProp="https://github.com/andmarek" text="github" />
        <HomeLinkWrapper hrefProp="https://twitter.com/AndrewMarek" text="twitter" />
        <HomeLinkWrapper hrefProp="https://www.strava.com/athletes/16371872" text="strava" />
        <HomeLinkWrapper hrefProp="https://www.linkedin.com/in/andmarek/" text="linkedin" />
      </div>
    </main>
  );
}
