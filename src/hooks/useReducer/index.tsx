import { useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default function ReducerCounter() {
  const [count, dispath] = useReducer(reducer, 0);

  return (
    <div className="p-4 rounded-xl bg-gray-100 text-center shadow-md">
      <h2 className="text-xl font-bold text-green-600 mb-2">Counter (useReducer)</h2>
      <p className="text-lg font-medium mb-4">Count: {count}</p>
      <div className="space-x-2">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={() => dispath({ type: "increment" })}
        >
          ➕ Increment
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          onClick={() => dispath({ type: "decrement" })}
        >
          ➖ Decrement
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
          onClick={() => dispath({ type: "reset" })}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}
