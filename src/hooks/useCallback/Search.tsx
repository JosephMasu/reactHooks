/* Search.tsx */
import { memo } from 'react';

interface SearchProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  console.log('Search rendered!'); // for debugging
  return (
    <input
      type="text"
      placeholder="Type a name..."
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-auto flex-1 bg-white/20 text-white placeholder-white/70 
                 border border-white/30 rounded-lg px-3 py-2 focus:outline-none 
                 focus:ring-2 focus:ring-yellow-300 transition-all duration-200"
    />
  );
}

export default memo(Search);
