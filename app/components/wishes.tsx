"use client"
import TypingText from "@/app/components/typingText";
import React, { useState, useEffect, FC } from 'react';

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
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-500 via-slate-50 to-green-500">
      <div className="p-8 bg-opacity-75 rounded-lg shadow-xl skew-x-12 origin-bottom -rotate-12 ">
        <TypingText text={wishes[currentWishIndex]} />
        <h1
          className="mt-4 text-3xl sm:text-5xl font-bold skew-y-6"
          style={{ color: currentColor, transition: "color 1s ease" }}
        >
          2025
        </h1>
        <div className='text-black scale-100'> hello </div>
      </div>
    </div>
  );
};

export default GoodWishes;
