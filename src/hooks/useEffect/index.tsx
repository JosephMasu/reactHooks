// tutorial/useEffect/index.tsx
import React from 'react';
import { useCountWithEffect } from './useEffect';

export default function UseEffectDemo() {
  const { count, setCount } = useCountWithEffect(0);

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-gray-100 rounded-xl shadow-lg text-center font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Count: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
