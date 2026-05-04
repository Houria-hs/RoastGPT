import { getRepoData } from "../services/githubService.js";
import { generateRoast } from "../services/geminiService.js";


export const roastRepo = async (req, res) => {
  try {
    const { repoUrl, mode } = req.body;

    if (!repoUrl) {
      return res.status(400).json({ error: "repoUrl is required" });
    }

    const repoData = await getRepoData(repoUrl);

    if (!repoData) {
      return res.status(400).json({ error: "Invalid repo" });
    }

    const roast = await generateRoast(repoData, mode);

    return res.json({
      success: true,
      ...roast
    });

  } catch (error) {
    console.error("🔥 BACKEND ERROR:", error);

    return res.status(500).json({
      error: error.message
    });
  }
};