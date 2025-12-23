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
    <div className="text-champagne-pink flex flex-col items-center px-4 py-8 sm:px-10 sm:py-16 md:px-20 md:py-24">
      <div className={`transition-opacity duration-1000 ease-in-out container w-full flex flex-col sm:flex-row items-center gap-8 sm:gap-12 justify-center ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div id="intro" className="text-center sm:text-left">
          <p className="text-xl sm:text-2xl md:text-3xl tracking-tight">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-papaya-whip tracking-tight">
            Andrew Marek
          </h1>
          <DynamicText />
        </div>
        <div>
          <Image
            alt="me_downscaled"
            height={500}
            width={500}
            src="/me_downscaled_v6.png"
            onLoad={handleLoad}
          />
        </div>
      </div>
    </div>
  );
}
