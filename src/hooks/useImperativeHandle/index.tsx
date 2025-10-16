import { useRef } from "react";
import TextInput, { TextInputRef } from "./TextInput";

function Demo() {
  const inputRef = useRef<TextInputRef>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="mb-4">
        <TextInput ref={inputRef} />
      </div>
      <button
        onClick={() => inputRef.current?.reset()}
        className="px-5 py-2 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 transition"
      >
        Reset From Parent
      </button>
    </div>
  );
}

export default Demo;
