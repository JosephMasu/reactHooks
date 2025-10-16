import {
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";

export interface TextInputRef {
  reset: () => void;
}

interface TextInputProps {}

function TextInput(props: TextInputProps, ref: Ref<TextInputRef>) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (!localRef.current) return;
      localRef.current.value = "";
      localRef.current?.focus();
    },
  }));

  return (
    <input
      type="text"
      ref={localRef}
      placeholder="Type something..."
      className="border border-gray-300 rounded-md px-4 py-2 w-64 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    />
  );
}

export default forwardRef(TextInput);
