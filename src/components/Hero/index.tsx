import { useState } from "react";
import Image from "next/image";
import DynamicText from "./dynamicText";

export default function Hero({ onUpdateLoadState }: { onUpdateLoadState: (state: boolean) => void }): React.JSX.Element {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    onUpdateLoadState(true);
  };

  return (
    <section className="relative w-full">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-72 w-72 md:h-[28rem] md:w-[28rem] rounded-full bg-gradient-to-br from-plum/20 via-chinese-violet/10 to-burnt-orange/10 blur-3xl" />
      </div>
      <div className="text-champagne-pink flex flex-col items-center font-sans">
        <div className={`transition-opacity duration-1000 ease-in-out max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center px-4 md:px-8 lg:px-12 py-10 md:py-16 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div id="intro" className="flex-1 text-center md:text-left">
            <p className="text-sm tracking-widest uppercase text-cinereous">Hello, I&apos;m</p>
            <h1 className="mt-2 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-gradient">Andrew Marek</span>
            </h1>
            <div className="mt-3 text-xl md:text-2xl text-cinereous">
              <DynamicText />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center md:justify-end mb-8 md:mb-0">
            <Image
              alt="Andrew portrait"
              height={420}
              width={420}
              src="/me_downscaled_v6.png"
              onLoad={handleLoad}
              className="rounded-2xl ring-1 ring-white/10 shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
