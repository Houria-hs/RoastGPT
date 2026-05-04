import React from 'react'

export const roastModes = [
 "Mild Roast",
 "Senior Dev",
 "Stack Overflow",
 "Brutal"
];


export default function RoastModes({ selectedMode, setSelectedMode }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {roastModes.map((mode) => (
        <button
          key={mode}
          onClick={() => setSelectedMode(mode)}
          className={`px-4 py-2 rounded-xl text-sm transition
          ${
            selectedMode === mode
              ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}