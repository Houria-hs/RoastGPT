import { useState } from "react";
import { roastRepo } from "../services/api";
import RoastModes from "./RoastModes";

export default function RepoInput({ setResults, setLoading }) {
  const [repoUrl, setRepoUrl] = useState("");
  const [mode, setMode] = useState("Brutal");

  const handleRoast = async () => {
    if (!repoUrl) return;

    try {
      setLoading(true);

      const res = await roastRepo({
        repoUrl,
        mode
      });

      setResults(res.data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong 😭");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">

      {/* CONTAINER */}
      <div className="relative bg-black/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl">

        {/* subtle glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 pointer-events-none" />

        {/* terminal label */}
        <p className="text-green-400 font-mono text-sm mb-3">
          $ paste your repo ↓
        </p>

        {/* INPUT */}
        <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus-within:border-orange-500 transition">

    

          <input
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="github.com/username/repo"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-zinc-600"
          />
        </div>

        {/* MODES */}
        <div className="mt-5">
          <RoastModes
            selectedMode={mode}
            setSelectedMode={setMode}
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleRoast}
          className="mt-6 w-full py-4 rounded-xl font-bold 
          bg-gradient-to-r from-orange-500 to-red-600 
          hover:scale-[1.02] transition-all duration-200 
          shadow-lg shadow-red-500/20 active:scale-[0.98]"
        >
          🔥 Roast My Repo
        </button>

      </div>
    </div>
  );
}