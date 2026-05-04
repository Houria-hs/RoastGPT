

export default function RoastResults({ data }) {
    const score = Math.min(10, Math.max(0, Number(data.chaosScore)));
    let color = "";

    if (score <= 3) color = "bg-green-500";
    else if (score <= 7) color = "bg-orange-500";
    else color = "bg-red-500";

  return (
    <div className="w-full mt-10">

      <div className="bg-black/70 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 font-mono shadow-xl">

        {/* header */}
        <div className="flex gap-2 mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* command */}
        <p className="text-green-400 mb-4">
          $ roast --analyze repo
        </p>


        {/* roast */}
        <div className="space-y-2 mb-6">
          {data.roast.map((line, i) => (
            <p key={i} className="text-red-400">
              ❯ {line}
            </p>
          ))}
        </div>

        {/* feedback */}
        <p className="text-green-400 mb-3">
          $ suggestions:
        </p>

        <div className="space-y-2 mb-6">
          {data.feedback.map((tip, i) => (
            <p key={i} className="text-yellow-400">
              ➤ {tip}
            </p>
          ))}
        </div>

        {/* chaos */}
        <p className="text-green-400 mb-2">
          $ chaos-score:
        </p>

         <div className="flex items-center gap-4">
      <span className="text-white font-bold text-xl">
        {score}/10
      </span>

      <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-700`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
    </div>

      </div>
    </div>
  );
}