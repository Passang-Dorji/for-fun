import React from 'react';
import GoodWishes from './components/wishes';
export default function Home() {
  const wishes: string[] = [
    'Happy_New_Year!',
    '2025'
    
  ];

  const colors: string[] = [
    '#FF5733', 
    '#33FF57', 
    '#3357FF', 
    '#FF33A1', 
    '#F4D03F', 
  ];

  return (
    <div>
      <GoodWishes wishes={wishes} interval={5000} />
    </div>
  );
}
