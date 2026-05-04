import { Flame } from "lucide-react";

export default function Navbar() {
 return (
    <nav className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-4">

            <div className="flex gap-2 font-bold text-xl">
                <Flame/>
                RepoRoast
            </div>

            <div className="flex gap-4 text-zinc-400 text-sm sm:text-base">
                <button>Examples</button>
            </div>
        </div>
    </nav>
 )
}