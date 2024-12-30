import React from 'react';
import GoodWishes from './components/wishes';
export default function Home() {
  const wishes: string[] = [
    'Happy New Years',
    'Here is to a year of growth, laughter',
    ' and love. Let the pages of 2025 be',
    ' filled with unforgettable moments',
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
      <GoodWishes wishes={wishes} colors={colors} interval={5000} />
      <div className='text-black ring-offset-inherit translate-x-9 skew-y-12	origin-top-left		'> hello </div>
    </div>
  );
}
