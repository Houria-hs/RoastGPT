import { roastModes } from "../data/RoastModes"
export default function RoastModes({
 selectedMode,
 setSelectedMode
}) {

return (
<div className="flex flex-wrap gap-3 mt-6">
 {roastModes.map(mode=>(
<button
key={mode}
onClick={()=>setSelectedMode(mode)}
className={`
px-5 py-3 rounded-full
${selectedMode===mode
 ? "bg-white text-black"
 : "border border-zinc-700"
}
`}
>
{mode}
</button>
))}
</div>
)
}