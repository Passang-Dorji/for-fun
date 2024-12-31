import React from 'react';
import GoodWishes from './components/wishes';
export default function Home() {
  const wishes: string[] = [
    'Happy_New_Year!',
    '2025'
    
  ];


  return (
    <div>
      <GoodWishes wishes={wishes} interval={5000} />
    </div>
  );
}
