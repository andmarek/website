"use client";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";


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
  const [loaded, setLoaded] = useState(false)
  const gradientRef = useRef<HTMLDivElement | null>(null);

  const handleLoadedChange = (updatedLoad: boolean) => {
    setLoaded(updatedLoad);
  };

  useEffect(() => {
    const el = gradientRef.current;
    if (!el) return;
    let raf = 0;
    let t = 0;
    const animate = () => {
      t += 0.0025;
      const x = Math.sin(t) * 10;
      const y = Math.cos(t * 0.8) * 12;
      el.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div>
      <main className="relative bg-white dark:bg-raisin-black min-h-screen overflow-hidden">
        <div
          ref={gradientRef}
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(1200px 600px at 30% 20%, rgba(123,61,121,0.15), transparent), radial-gradient(1000px 500px at 70% 60%, rgba(204,85,0,0.18), transparent), radial-gradient(800px 400px at 50% 80%, rgba(117,109,148,0.18), transparent)",
            backgroundSize: "160% 160%",
            backgroundPosition: "50% 50%",
            filter: "blur(20px)",
          }}
        />

        <div className="font-sans text-gray-900 dark:text-champagne-pink">
          <Hero onUpdateLoadState={handleLoadedChange} />
        </div>

        <section className={`transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-6xl mx-auto px-4 pb-16">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link className="px-4 py-2 rounded-full border border-black/10 text-gray-700 hover:text-gray-900 hover:border-gray-400/40 transition-colors dark:border-white/10 dark:text-champagne-pink dark:hover:text-papaya-whip dark:hover:border-papaya-whip/40" href="https://github.com/andmarek">github</Link>
              <Link className="px-4 py-2 rounded-full border border-black/10 text-gray-700 hover:text-gray-900 hover:border-gray-400/40 transition-colors dark:border-white/10 dark:text-champagne-pink dark:hover:text-papaya-whip dark:hover:border-papaya-whip/40" href="https://twitter.com/AndrewMarek">twitter</Link>
              <Link className="px-4 py-2 rounded-full border border-black/10 text-gray-700 hover:text-gray-900 hover:border-gray-400/40 transition-colors dark:border-white/10 dark:text-champagne-pink dark:hover:text-papaya-whip dark:hover:border-papaya-whip/40" href="https://www.strava.com/athletes/16371872">strava</Link>
              <Link className="px-4 py-2 rounded-full border border-black/10 text-gray-700 hover:text-gray-900 hover:border-gray-400/40 transition-colors dark:border-white/10 dark:text-champagne-pink dark:hover:text-papaya-whip dark:hover:border-papaya-whip/40" href="https://www.linkedin.com/in/andmarek/">linkedin</Link>
            </div>
          </div>
        </section>

        <section className="relative isolate">
          <div className="max-w-6xl mx-auto px-4 pb-20">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-gray-900 dark:text-papaya-whip text-2xl md:text-3xl font-semibold">featured projects</h2>
              <Link href="/projects" className="text-gray-700 hover:text-gray-900 transition-colors dark:text-champagne-pink dark:hover:text-papaya-whip">view all</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 6).map((p) => (
                <Link key={p.name} href={p.link} className="group rounded-2xl border border-black/10 bg-black/[0.02] hover:bg-black/[0.05] transition-colors overflow-hidden dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                  <div className="relative w-full h-40">
                    <Image src={p.imagePath} alt={p.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity dark:from-black/40" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 group-hover:text-gray-700 transition-colors font-semibold dark:text-champagne-pink dark:group-hover:text-papaya-whip">{p.name}</h3>
                    <p className="mt-1 text-sm text-gray-700/90 line-clamp-2 dark:text-champagne-pink/90">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/10 text-gray-800 dark:bg-chinese-violet/40 dark:text-papaya-whip">{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-6xl mx-auto px-4 pb-24">
            <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 flex flex-col md:flex-row items-center gap-6 dark:border-white/10 dark:bg-white/5">
              <div className="flex-1">
                <h3 className="text-2xl text-gray-900 font-semibold dark:text-papaya-whip">Let’s build something great</h3>
                <p className="mt-2 text-gray-700/90 dark:text-champagne-pink/90">I love developer tools, performance, and clean UX. Open to interesting collabs and ideas.</p>
              </div>
              <div className="flex items-center gap-3">
                <Link className="px-4 py-2 rounded-md bg-burnt-orange/80 hover:bg-burnt-orange text-white font-medium transition-colors dark:text-raisin-black" href="mailto:andmarek@gmail.com">email me</Link>
                <Link className="px-4 py-2 rounded-md border border-black/15 text-gray-800 hover:text-gray-900 hover:border-gray-400/40 transition-colors dark:border-white/15 dark:text-champagne-pink dark:hover:text-papaya-whip dark:hover:border-papaya-whip/40" href="/projects">see projects</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
