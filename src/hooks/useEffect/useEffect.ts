// tutorial/useEffect/hook.ts
import { useEffect, useState } from 'react';

export function useCountWithEffect(initial = 0) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log('The count is:', count);

    return () => {
      console.log('I am being cleaned up!');
    };
  }, [count]);

  return { count, setCount };
}
