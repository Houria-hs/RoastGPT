import { Flame } from "lucide-react";

export default function Navbar() {
 return (
    <nav className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between">

            <div className="flex gap-2 font-bold text-xl">
                <Flame/>
                RepoRoast
            </div>

            <div className="flex gap-6 text-zinc-400">
                <button>Examples</button>
            </div>
        </div>
    </nav>
 )
}