import { useState } from "react";
import { roastRepo } from "../services/api";
import RoastModes from "./RoastModes";

const validateGitHubUrl = (url) => {
  if (!url) {
    return { valid: false, message: "Please enter a GitHub repository URL." };
  }

  const trimmedUrl = url.trim();
  const githubPattern = /^(https?:\/\/)?(www\.)?github\.com\/[\w.-]+\/[\w.-]+\/?$/i;

  if (!githubPattern.test(trimmedUrl)) {
    return { valid: false, message: "Enter a valid GitHub repo URL like github.com/username/repo." };
  }

  return { valid: true, message: "" };
};

export default function RepoInput({ setResults, setLoading }) {
  const [repoUrl, setRepoUrl] = useState("");
  const [mode, setMode] = useState("Brutal");
  const [error, setError] = useState("");

  const handleRoast = async () => {
    const validation = validateGitHubUrl(repoUrl);
    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    try {
      setError("");
      setLoading(true);

      const res = await roastRepo({
        repoUrl: repoUrl.trim(),
        mode
      });

      setResults(res.data);
    } catch (err) {
      console.error(err);
      if (err.response && (err.response.status === 403 || err.response.status === 404)) {
        setError("This repository appears to be private or inaccessible. Please use a public GitHub repo.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
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

        {error && (
          <p className="mt-3 text-sm text-red-400 font-medium">
            {error}
          </p>
        )}

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