"use client"
import TypingText from "./UnfoldingCard";
import React, { useState, useEffect, FC } from 'react';
import UnfoldingCard from "./UnfoldingCard";
type GoodWishesProps = {
  wishes: string[]; 
  colors?: string[]; 
  interval?: number; 
};

const GoodWishes: FC<GoodWishesProps> = ({ wishes, colors = [], interval = 3000 }) => {
  const [currentWishIndex, setCurrentWishIndex] = useState<number>(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCurrentWishIndex((prevIndex) => (prevIndex + 1) % wishes.length);
    }, interval);

    return () => clearInterval(rotationInterval);
  }, [wishes, interval]);

  const currentColor = colors[currentWishIndex % colors.length] || "#333"; 

  return (
    <div className="flex justify-center items-center  bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-purple-500 to-90% min-h-screen">
      <div className="md:-ml-20 md:-mt-96 bg-opacity-75 rounded-lg shadow-xl md:-skew-x-12 -skew-x-3 origin-bottom	md:rotate-12 w-48 ml-48 sm:w-64 sm:h-40 md:w-72 md:h-48 lg:w-80 lg:h-56">
        <TypingText text={wishes[currentWishIndex]} />
      </div>
    </div>

  );
};

export default GoodWishes;
