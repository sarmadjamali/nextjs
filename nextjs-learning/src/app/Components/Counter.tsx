'use client';
import { useState } from 'react';

import { CounterProps } from './Interfaces';

function showCount(currentCount: number) {
  return currentCount > 0 ? <b className="text-blue-600">{currentCount}</b> : <span className="text-red-600">{currentCount}</span>;
}

export default function Counter({ mycount }: CounterProps) {

  const [count, setCount] = useState(mycount);

  // Helper function to display the count with bold styling if positive
  //   const showCount = (currentCount: number) => {
  //     return currentCount > 0 ? <b className="text-blue-600">{currentCount}</b> : <span className="text-red-600">{currentCount}</span>;
  //   };


  return (

    <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>🧮 Counter</h2>
      <p>Current count: {showCount(count)}</p>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
        ➖ Decrease
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
        🔄 Reset
      </button>
      <p style={{ marginTop: '10px' }}>Click the buttons to change the count.</p>
    </div>

  );
}