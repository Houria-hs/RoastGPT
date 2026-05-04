export default function TerminalPreview() {
  return (
    <div className="w-full mt-10">
      <div className="bg-black/70 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 font-mono shadow-xl">

        {/* header */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* logs */}
        <div className="text-green-400 space-y-2 text-sm">
          <p>$ initializing roast engine...</p>
          <p>$ fetching repository data...</p>
          <p>$ analyzing code structure...</p>
          <p className="animate-pulse">
            $ generating emotional damage...
          </p>
        </div>

      </div>
    </div>
  );
}