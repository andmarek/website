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
    <div className="text-champagne-pink flex flex-col items-center px-6 py-12 sm:px-10 sm:py-20 md:px-20 md:py-28">
      <div className={`transition-opacity duration-1000 ease-in-out w-full max-w-4xl flex flex-col sm:flex-row items-center gap-10 sm:gap-16 justify-center ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div id="intro" className="text-center sm:text-left">
          <p className="text-lg sm:text-xl text-cinereous tracking-tight">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-papaya-whip tracking-tighter mt-1">
            Andrew Marek
          </h1>
          <DynamicText />
        </div>
        <div className="flex-shrink-0">
          <Image
            alt="Andrew Marek"
            height={400}
            width={400}
            src="/me_downscaled_v6.png"
            onLoad={handleLoad}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
