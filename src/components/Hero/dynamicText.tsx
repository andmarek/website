import React, { useState, useEffect } from 'react';

export default function DynamicText() {
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState('fadeIn');
  const phrases = [
    'Software Developer',
    'Runner',
    'Caffeine Connoisseur',
    'Tech Enthusiast',
    'Living in Seattle'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('fadeOut');
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setAnimation('fadeIn');
      }, 500);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <h1 className={`transition-all duration-500 ease-in-out ${animation}`}>
      {phrases[index]}
    </h1>
  );
}
