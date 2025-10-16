/* eslint-disable no-empty-pattern */
import { useState, useMemo } from "react";
import { initialItems } from "./utils";

interface DemoProps {}

function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 w-80 text-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">
          useMemo Demo
        </h1>

        <div className="space-y-2 mb-4">
          <h2 className="text-lg font-medium">Count: {count}</h2>
          <h2 className="text-lg font-medium">
            Selected Item:{" "}
            <span className="text-indigo-500 font-semibold">
              {selectedItem?.id}
            </span>
          </h2>
        </div>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Demo;
