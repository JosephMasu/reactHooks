import {
  forwardRef,
  Ref,
  useImperativeHandle,
  useState,
} from "react";

export type CounterRef = {
  checkSubscibed: (value: boolean) => void;
  reset: () => void;
};

interface CounterProps {}

function Counter(props: CounterProps, ref: Ref<CounterRef>) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({
    checkSubscibed: (value) => console.log(value),
    reset,
  }));

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-200 w-72">
      <h1 className="text-2xl font-semibold text-indigo-600 mb-4">
        Count: {count}
      </h1>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default forwardRef(Counter);
