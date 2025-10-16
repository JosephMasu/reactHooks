import { useEffect, useRef, useState } from "react";

interface DemoProps {}

export default function useRefDemo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-6">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center w-80">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">
          useRef Demo
        </h1>

        <p className="text-lg mb-4">
          <span className="font-medium text-gray-700">Count:</span>{" "}
          <span className="font-semibold text-indigo-500">{count}</span>
        </p>

        <button
          onClick={handleIncrement}
          className="px-5 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export function useRefDemo2({}: DemoProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-6">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 w-80">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">
          useRef Focus Demo
        </h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
      </div>
    </div>
  );
}