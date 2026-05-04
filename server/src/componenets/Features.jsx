import React from 'react'

const Features = () => {
  return (
    <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ["Funny Roasts", "AI drags your code respectfully."],
            ["Real Feedback", "Not just memes. Actually useful."],
            ["Chaos Score", "Measure architectural disorder."]
          ].map(([title, desc]) => (
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Features