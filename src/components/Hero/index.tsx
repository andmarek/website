"use client";

import DynamicText from "./dynamicText";
import GenerativeArt from "../GenerativeArt";

export default function Hero(): React.JSX.Element {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <GenerativeArt />
      <div className="relative z-10 text-center p-8" style={{ textShadow: "0 4px 20px #282828, 0 0 60px #282828, 0 0 100px #282828" }}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-champagne-pink font-sans mb-2">
          Hello, I&apos;m
        </h1>
        <h1 className="text-5xl sm:text-7xl md:text-8xl text-papaya-whip font-sans font-bold mb-4 tracking-tight">
          Andrew Marek
        </h1>
        <div className="text-2xl sm:text-3xl md:text-4xl text-champagne-pink font-sans">
          <DynamicText />
        </div>
      </div>
    </div>
  );
}
