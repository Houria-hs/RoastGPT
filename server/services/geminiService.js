import { GoogleGenerativeAI }
from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateRoast=
async(repoData,mode)=>{

const model =
genAI.getGenerativeModel({
 model:"gemini-2.5-flash"
});


const modePrompts = {
  "Mild Roast": `
Be polite and constructive.
Light humor only. No harsh criticism.
Focus on helpful feedback more than roasting.
`,

  "Senior Dev": `
Act like a strict senior engineer doing a code review.
Be direct, critical, and realistic.
Point out bad practices clearly with some sarcasm.
`,

  "Stack Overflow": `
Respond like a Stack Overflow reply.
Slightly arrogant, passive-aggressive, but correct.
Focus on pointing out obvious mistakes like "this has been answered before".
`,

  "Brutal": `
Be ruthless and savage.
Roast the project aggressively with dark humor.
Make it funny but harsh.
`
};

const sanitizeMode = (inputMode) => {
  if (!inputMode || typeof inputMode !== "string") return "Brutal";
  const trimmed = inputMode.trim();
  return Object.prototype.hasOwnProperty.call(modePrompts, trimmed)
    ? trimmed
    : "Brutal";
};

const selectedMode = sanitizeMode(mode);
const personality = modePrompts[selectedMode];

const prompt = `
You are a sarcastic software engineer.

${personality}

Roast this repository in depth.

Instructions:
- Generate 6 to 10 roast lines
- Each roast must target a different aspect:
  (naming, structure, idea, scalability, professionalism, documentation, etc.)
- Avoid repetition
- Make it witty, specific, and developer-humor style

Feedback:
- Generate 5 to 7 useful suggestions
- Make them actionable, not generic

Return ONLY valid JSON.
No markdown. No backticks. No extra text.

Schema:
{
  "roast": ["..."],
  "feedback": ["..."],
  "chaosScore": "number between 1 and 10 (integer, not string)"
}

Repository:
Name: ${repoData.name}
Description: ${repoData.description}
Language: ${repoData.language}
`;

 const response = await model.generateContent(prompt);

  let text = response.response.text(); // ✅ FIX HERE

  text = text.replace(/```json|```/g, "").trim();

  const match = text.match(/{[\s\S]*}/);

  if (!match) throw new Error("No JSON found from Gemini");

  const data = JSON.parse(match[0]);

  return {
    mode: selectedMode,
    ...data
  };

}