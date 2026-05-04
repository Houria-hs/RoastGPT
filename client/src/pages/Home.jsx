import Navbar from "../componenets/NavBar";
import RepoInput from "../componenets/RepoInput";
import TerminalPreview from "../componenets/TerminalPreview";
import RoastResults from "../data/RoastResults";
import { useState } from "react";

export default function Home() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff3d0030,transparent_70%)]" />

      <Navbar />

      <div className="flex-1 flex flex-col px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-20 items-center justify-center relative z-10">

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center leading-tight font-[Orbitron] tracking-wider">
          Paste Your Repo <br />
          <span className="text-orange-500">Face The Consequences</span>
        </h1>

        <p className="text-zinc-400 mt-4 text-center max-w-xl text-sm sm:text-base">
          paste your github repo and get brutally honest feedback powered by AI
        </p>
        <p className="text-zinc-500 mt-2 text-center max-w-xl text-xs sm:text-sm">
          Note: only public GitHub repositories are supported. Private repos cannot be analyzed.
        </p>

        {/* INPUT */}
        <div className="w-full max-w-2xl mt-10">
          <RepoInput
            setResults={setResults}
            setLoading={setLoading}
          />
        </div>

        {/* OUTPUT */}
        <div className="w-full max-w-4xl mt-12">
          {loading && <TerminalPreview />}
          {results && <RoastResults data={results} />}
        </div>

      </div>
    </div>
  );
}