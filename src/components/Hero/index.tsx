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
    <div className="text-champagne-pink flex flex-col items-center m-4 sm:m-10 md:m-20 font-sans">
      <div className={`transition-opacity duration-1000 ease-in-out container w-full flex flex-col sm:flex-row items-center p-4 sm:p-10 justify-center ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div id="intro" className="text-2xl sm:text-3xl md:text-4xl p-4 sm:p-5 text-center sm:text-left">
          <h1>Hello, I&apos;m</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-papaya-whip">
            Andrew Marek
          </h1>
          <DynamicText />
        </div>
        <div className="mt-8 sm:mt-0">
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
